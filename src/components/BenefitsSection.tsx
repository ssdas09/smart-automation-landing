
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Reduce manual tasks by up to 80% with our smart automation solutions.",
  },
  {
    title: "Cost Reduction",
    description: "Lower operational costs and reallocate resources to high-value activities.",
  },
  {
    title: "Enhanced Accuracy",
    description: "Eliminate human error with precision AI-driven processes.",
  },
  {
    title: "Faster Decision Making",
    description: "Access real-time insights to make informed decisions quickly.",
  },
  {
    title: "Scalability",
    description: "Easily scale your operations without proportional increases in staff.",
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead of competitors with cutting-edge AI technologies.",
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-background via-background to-background/95">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="rounded-2xl border border-primary/30 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 z-0"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose <span className="gradient-text">AI Automation</span>
                </h2>
                
                <p className="text-foreground/70 mb-8 text-lg">
                  Our AI solutions deliver tangible results that directly impact your bottom line:
                </p>
              
                <div className="grid gap-y-6 gap-x-10 md:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">{benefit.title}</h3>
                        <p className="text-foreground/60 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                <span className="gradient-text">93%</span> of Businesses
              </h3>
              <p className="text-foreground/70">
                Report significant ROI within 6 months of implementing our AI automation solutions.
              </p>
              <div className="w-full bg-background/50 rounded-full h-4 border border-border/50">
                <div className="bg-gradient-to-r from-primary to-accent h-4 rounded-full w-[93%]"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                <span className="gradient-text">4.5x</span> Productivity
              </h3>
              <p className="text-foreground/70">
                Average productivity increase reported by clients after implementing our solutions.
              </p>
              <div className="w-full bg-background/50 rounded-full h-4 border border-border/50">
                <div className="bg-gradient-to-r from-primary to-accent h-4 rounded-full w-[78%]"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                <span className="gradient-text">68%</span> Cost Reduction
              </h3>
              <p className="text-foreground/70">
                Average decrease in operational costs across our client portfolio.
              </p>
              <div className="w-full bg-background/50 rounded-full h-4 border border-border/50">
                <div className="bg-gradient-to-r from-primary to-accent h-4 rounded-full w-[68%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
