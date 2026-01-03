import { Brain, Heart, GraduationCap, Building2, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        {/* Research Team Section */}
        <div className="mb-12 p-8 rounded-2xl bg-secondary/50 border border-border">
          <h3 className="font-display font-bold text-xl text-foreground mb-6 text-center">Research Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AuthorCard 
              name="Isarar Siddique"
              affiliation="Khalifa University of Science and Technology"
              department="Department of Clinical Sciences & Healthcare Engineering Innovation Group"
              location="Abu Dhabi, UAE"
            />
            <AuthorCard 
              name="Zulfikar Ali Ansari"
              affiliation="Symbiosis International (Deemed University)"
              department="AI and Machine Learning, Symbiosis Institute of Technology"
              location="Pune, India"
              isCorresponding
            />
            <AuthorCard 
              name="Raiyan Siddique"
              affiliation="Shri Ramswaroop Memorial University"
              department="Department of Computer Science"
              location="Barabanki, India"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">Council of Models</h3>
                <p className="text-xs text-muted-foreground">Neuro-Symbolic Framework</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              A neuro-symbolic ensemble framework for explainable skin lesion classification 
              with clinical knowledge integration. Designed for transparent, trustworthy AI diagnosis.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Research Paper</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Model Weights</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dataset</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Citation</h4>
            <div className="p-3 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                Siddique, I., Ansari, Z.A., & Siddique, R. (2024). Council of Models: A Neuro-Symbolic Ensemble Framework...
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-risk-medium/5 border border-risk-medium/20 mb-8">
          <p className="text-xs text-muted-foreground">
            <strong className="text-risk-medium">Research Disclaimer:</strong> This tool is intended for 
            research and educational purposes only. It should not replace professional medical advice, 
            diagnosis, or treatment. Always consult a qualified healthcare provider for medical concerns.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Council of Models Research. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-risk-high fill-risk-high" /> for explainable healthcare AI
          </p>
        </div>
      </div>
    </footer>
  );
};

interface AuthorCardProps {
  name: string;
  affiliation: string;
  department: string;
  location: string;
  isCorresponding?: boolean;
}

const AuthorCard = ({ name, affiliation, department, location, isCorresponding }: AuthorCardProps) => (
  <div className="p-4 rounded-xl bg-card border border-border text-center">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
      <GraduationCap className="w-6 h-6 text-primary" />
    </div>
    <h4 className="font-display font-semibold text-foreground mb-1">
      {name}
      {isCorresponding && <span className="text-primary ml-1">*</span>}
    </h4>
    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-2">
      <Building2 className="w-3 h-3" />
      <span>{affiliation}</span>
    </div>
    <p className="text-xs text-muted-foreground mb-1">{department}</p>
    <p className="text-xs text-muted-foreground/70">{location}</p>
    {isCorresponding && (
      <div className="flex items-center justify-center gap-1 mt-2 text-xs text-primary">
        <Mail className="w-3 h-3" />
        <span>Corresponding Author</span>
      </div>
    )}
  </div>
);

export default Footer;
