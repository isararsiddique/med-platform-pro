import { useState, useCallback } from "react";
import { Upload, Image as ImageIcon, X, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface ImageUploaderProps {
  onImageSelect: (file: File, preview: string) => void;
  isAnalyzing?: boolean;
}

const ImageUploader = ({ onImageSelect, isAnalyzing }: ImageUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, []);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreview(result);
      setSelectedFile(file);
      onImageSelect(file, result);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const clearImage = () => {
    setPreview(null);
    setSelectedFile(null);
  };

  return (
    <div className="w-full">
      {!preview ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`
            relative border-2 border-dashed rounded-2xl p-12 text-center
            transition-all duration-300 cursor-pointer
            ${isDragging 
              ? 'border-primary bg-primary/5 scale-[1.02]' 
              : 'border-border hover:border-primary/40 hover:bg-secondary/50'
            }
          `}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleInputChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <div className="flex flex-col items-center gap-4">
            <div className={`
              w-16 h-16 rounded-2xl flex items-center justify-center
              transition-all duration-300
              ${isDragging ? 'bg-primary text-primary-foreground scale-110' : 'bg-secondary text-primary'}
            `}>
              <Upload className="w-8 h-8" />
            </div>
            
            <div>
              <p className="font-display font-semibold text-foreground mb-1">
                Drop your image here
              </p>
              <p className="text-sm text-muted-foreground">
                or click to browse • PNG, JPG up to 10MB
              </p>
            </div>

            <Button variant="outline" size="sm" className="mt-2 pointer-events-none">
              <ImageIcon className="w-4 h-4 mr-2" />
              Select Image
            </Button>
          </div>
        </div>
      ) : (
        <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-elevated">
          {/* Image Preview */}
          <div className="relative aspect-square max-h-[400px] overflow-hidden">
            <img 
              src={preview} 
              alt="Selected skin lesion" 
              className="w-full h-full object-contain bg-muted"
            />
            
            {/* Overlay during analysis */}
            {isAnalyzing && (
              <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="w-10 h-10 text-primary-foreground animate-spin" />
                  <p className="text-primary-foreground font-medium">Analyzing image...</p>
                </div>
              </div>
            )}
          </div>

          {/* Image Info Bar */}
          <div className="p-4 bg-secondary/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm truncate max-w-[200px]">
                  {selectedFile?.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {selectedFile && (selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            {!isAnalyzing && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={clearImage}
                className="text-muted-foreground hover:text-destructive"
              >
                <X className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
