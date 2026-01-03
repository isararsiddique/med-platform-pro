import { Activity, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">DermAI</h3>
                <p className="text-xs text-muted-foreground">Clinical Analysis Platform</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              AI-powered skin lesion analysis using the Council of Models neuro-symbolic 
              ensemble framework. Designed for clinical decision support with explainable AI.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Research Paper</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Model Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-risk-medium/5 border border-risk-medium/20 mb-8">
          <p className="text-xs text-muted-foreground">
            <strong className="text-risk-medium">Medical Disclaimer:</strong> This tool is intended for 
            educational and research purposes only. It should not replace professional medical advice, 
            diagnosis, or treatment. Always consult a qualified healthcare provider for medical concerns.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DermAI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-risk-high fill-risk-high" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
