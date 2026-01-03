import { ArrowRight, Shield, Brain, FileText, Network, Microscope } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Research Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/10 mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-secondary-foreground">Research Demo • Neuro-Symbolic AI</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Council of Models
          </h1>
          
          <p className="font-display text-xl md:text-2xl text-gradient font-semibold mb-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            A Neuro-Symbolic Ensemble Framework for Explainable Skin Lesion Classification
          </p>

          {/* Authors */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-sm text-muted-foreground">by</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Isarar Siddique</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Zulfikar Ali Ansari</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Raiyan Siddique</span>
          </div>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            Integrating clinical knowledge with deep learning for transparent, trustworthy 
            dermatological diagnosis with LIME & SHAP explainability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              <Microscope className="w-5 h-5" />
              Try Demo
            </Button>
            <Button variant="outline" size="xl">
              Read Paper
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <FeatureCard 
              icon={<Network className="w-6 h-6" />}
              title="Ensemble Architecture"
              description="Multi-model consensus with neuro-symbolic reasoning"
            />
            <FeatureCard 
              icon={<Brain className="w-6 h-6" />}
              title="Explainable AI"
              description="LIME & SHAP visualizations for clinical transparency"
            />
            <FeatureCard 
              icon={<FileText className="w-6 h-6" />}
              title="Clinical Integration"
              description="ICD-10, SNOMED-CT & UMLS medical coding"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-elevated transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default HeroSection;
