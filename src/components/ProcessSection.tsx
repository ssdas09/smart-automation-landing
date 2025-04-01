
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Strategic Consultation",
    description: "We analyze your business needs, challenges, and goals to identify automation opportunities."
  },
  {
    number: "02",
    title: "Solution Design",
    description: "Our experts design a customized AI automation solution tailored to your specific requirements."
  },
  {
    number: "03",
    title: "Implementation",
    description: "We seamlessly integrate the AI solution into your existing systems and workflows."
  },
  {
    number: "04",
    title: "Training & Support",
    description: "We provide comprehensive training and ongoing support to ensure maximum adoption and ROI."
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-t from-background/95 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Implementation</span> Process
          </h2>
          <p className="text-foreground/70 text-lg">
            We follow a proven methodology to ensure successful AI automation implementation
            that delivers measurable results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative border border-border/50 bg-background/50 backdrop-blur-sm rounded-lg p-6 hover:glowing-border transition-all duration-300"
            >
              <div className="absolute -top-4 left-6 bg-primary text-background text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mt-5 mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
