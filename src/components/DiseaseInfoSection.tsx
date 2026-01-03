import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";

const diseases = [
  {
    name: 'Melanocytic Nevus',
    code: 'D22.9',
    type: 'Benign',
    risk: 'Low',
    description: 'Common mole composed of melanocytes. Usually harmless but should be monitored for changes in size, shape, or color.',
  },
  {
    name: 'Melanoma',
    code: 'C43.9',
    type: 'Malignant',
    risk: 'High',
    description: 'Most serious form of skin cancer. Develops from pigment-producing cells. Early detection is crucial.',
  },
  {
    name: 'Basal Cell Carcinoma',
    code: 'C44.9',
    type: 'Malignant',
    risk: 'Medium',
    description: 'Most common skin cancer. Grows slowly and rarely spreads. Often appears as a pearly bump.',
  },
  {
    name: 'Actinic Keratosis',
    code: 'L57.0',
    type: 'Precancerous',
    risk: 'Medium',
    description: 'Rough, scaly patches from sun damage. Can progress to squamous cell carcinoma if untreated.',
  },
  {
    name: 'Benign Keratosis',
    code: 'L82.1',
    type: 'Benign',
    risk: 'Low',
    description: 'Non-cancerous skin growths including seborrheic keratoses. Common in older adults.',
  },
  {
    name: 'Dermatofibroma',
    code: 'D23.9',
    type: 'Benign',
    risk: 'Low',
    description: 'Firm benign nodule, often on lower legs. May appear after minor skin trauma.',
  },
  {
    name: 'Vascular Lesion',
    code: 'D18.0',
    type: 'Benign',
    risk: 'Low',
    description: 'Abnormal blood vessel formations including hemangiomas and angiokeratomas.',
  },
];

const DiseaseInfoSection = () => {
  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'Low':
        return <CheckCircle className="w-5 h-5 text-risk-low" />;
      case 'Medium':
        return <AlertCircle className="w-5 h-5 text-risk-medium" />;
      case 'High':
        return <AlertTriangle className="w-5 h-5 text-risk-high" />;
      default:
        return null;
    }
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'Benign':
        return 'bg-risk-low/10 text-risk-low border-risk-low/30';
      case 'Precancerous':
        return 'bg-risk-medium/10 text-risk-medium border-risk-medium/30';
      case 'Malignant':
        return 'bg-risk-high/10 text-risk-high border-risk-high/30';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Supported Classifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI model classifies skin lesions across 7 distinct categories, 
            providing risk assessment and ICD-10 medical codes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {diseases.map((disease, index) => (
            <div 
              key={index}
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-elevated transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {getRiskIcon(disease.risk)}
                  <span className={`px-2 py-0.5 rounded text-xs font-medium border ${getTypeStyles(disease.type)}`}>
                    {disease.type}
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                  {disease.code}
                </span>
              </div>
              
              <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {disease.name}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {disease.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseaseInfoSection;
