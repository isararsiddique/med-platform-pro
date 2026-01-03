import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import ImageUploader from "./ImageUploader";
import AnalysisResults from "./AnalysisResults";

// Mock disease data based on the Python app
const MOCK_RESULTS = [
  {
    name: 'Melanocytic nevus',
    confidence: 0.847,
    type: 'Benign',
    risk: 'Low' as const,
    icd10: 'D22.9',
    description: 'A common benign skin lesion composed of melanocytes. Usually harmless but should be monitored for changes.'
  },
  {
    name: 'Melanoma',
    confidence: 0.089,
    type: 'Malignant',
    risk: 'High' as const,
    icd10: 'C43.9',
    description: 'The most serious form of skin cancer. Early detection is crucial for successful treatment.'
  },
  {
    name: 'Basal cell carcinoma',
    confidence: 0.032,
    type: 'Malignant',
    risk: 'Medium' as const,
    icd10: 'C44.9',
    description: 'The most common type of skin cancer. Grows slowly and rarely spreads to other parts of the body.'
  },
  {
    name: 'Dermatofibroma',
    confidence: 0.018,
    type: 'Benign',
    risk: 'Low' as const,
    icd10: 'D23.9',
    description: 'A common benign skin growth that usually appears on the legs. Firm to touch and may be pink to brown.'
  },
  {
    name: 'Actinic keratosis',
    confidence: 0.014,
    type: 'Precancerous',
    risk: 'Medium' as const,
    icd10: 'L57.0',
    description: 'Rough, scaly patch caused by years of sun exposure. Considered precancerous.'
  },
];

const AnalysisSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleImageSelect = (file: File, preview: string) => {
    setSelectedImage(preview);
    setShowResults(false);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsAnalyzing(false);
    setShowResults(true);
  };

  return (
    <section id="analysis" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skin Lesion Analysis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload a dermoscopic image for AI-powered analysis. Our ensemble model provides 
            classification across 7 lesion types with confidence scores.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Upload */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">1</span>
                  Upload Image
                </h3>
                <ImageUploader 
                  onImageSelect={handleImageSelect}
                  isAnalyzing={isAnalyzing}
                />
              </div>

              {selectedImage && !showResults && (
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Analyze with AI
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Right Column - Results */}
            <div>
              {showResults ? (
                <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
                  <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">2</span>
                    Analysis Results
                  </h3>
                  <AnalysisResults 
                    results={MOCK_RESULTS}
                    primaryDiagnosis={MOCK_RESULTS[0]}
                  />
                </div>
              ) : (
                <div className="h-full min-h-[400px] p-6 rounded-2xl border-2 border-dashed border-border flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-4 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="font-display font-semibold text-muted-foreground mb-1">
                      Results will appear here
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Upload an image and run analysis
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
