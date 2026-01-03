import { AlertTriangle, CheckCircle, Info, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

interface DiseaseResult {
  name: string;
  confidence: number;
  type: string;
  risk: 'Low' | 'Medium' | 'High';
  icd10: string;
  description: string;
}

interface AnalysisResultsProps {
  results: DiseaseResult[];
  primaryDiagnosis: DiseaseResult;
}

const AnalysisResults = ({ results, primaryDiagnosis }: AnalysisResultsProps) => {
  const getRiskStyles = (risk: string) => {
    switch (risk) {
      case 'Low':
        return {
          bg: 'bg-risk-low/10',
          text: 'text-risk-low',
          border: 'border-risk-low/30',
          icon: <CheckCircle className="w-5 h-5" />
        };
      case 'Medium':
        return {
          bg: 'bg-risk-medium/10',
          text: 'text-risk-medium',
          border: 'border-risk-medium/30',
          icon: <Info className="w-5 h-5" />
        };
      case 'High':
        return {
          bg: 'bg-risk-high/10',
          text: 'text-risk-high',
          border: 'border-risk-high/30',
          icon: <AlertTriangle className="w-5 h-5" />
        };
      default:
        return {
          bg: 'bg-muted',
          text: 'text-muted-foreground',
          border: 'border-border',
          icon: <Info className="w-5 h-5" />
        };
    }
  };

  const primaryRiskStyles = getRiskStyles(primaryDiagnosis.risk);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Primary Diagnosis Card */}
      <div className={`p-6 rounded-2xl border-2 ${primaryRiskStyles.border} ${primaryRiskStyles.bg}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`${primaryRiskStyles.text}`}>{primaryRiskStyles.icon}</span>
              <span className={`text-xs font-semibold uppercase tracking-wide ${primaryRiskStyles.text}`}>
                Primary Diagnosis
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              {primaryDiagnosis.name}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-foreground">
              {(primaryDiagnosis.confidence * 100).toFixed(1)}%
            </p>
            <p className="text-xs text-muted-foreground">Confidence</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          {primaryDiagnosis.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${primaryRiskStyles.bg} ${primaryRiskStyles.text} border ${primaryRiskStyles.border}`}>
            {primaryDiagnosis.risk} Risk
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">
            {primaryDiagnosis.type}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            ICD-10: {primaryDiagnosis.icd10}
          </span>
        </div>
      </div>

      {/* Differential Diagnoses */}
      <div className="p-6 rounded-2xl bg-card border border-border">
        <h4 className="font-display font-semibold text-foreground mb-4">
          Differential Diagnoses
        </h4>
        
        <div className="space-y-4">
          {results.slice(0, 5).map((result, index) => {
            const riskStyles = getRiskStyles(result.risk);
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">
                      {result.name}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {(result.confidence * 100).toFixed(1)}%
                    </span>
                  </div>
                  <Progress value={result.confidence * 100} className="h-2" />
                </div>
                <span className={`w-16 text-center px-2 py-1 rounded text-xs font-medium ${riskStyles.bg} ${riskStyles.text}`}>
                  {result.risk}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="flex-1" size="lg">
          <Download className="w-4 h-4 mr-2" />
          Download PDF Report
        </Button>
        <Button variant="outline" className="flex-1" size="lg">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Explainability
        </Button>
      </div>
    </div>
  );
};

export default AnalysisResults;
