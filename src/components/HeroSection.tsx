
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 bg-hero-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block rounded-full px-3 py-1 text-sm bg-primary/10 border border-primary/20 text-primary mb-4">
              AI Automation Agency
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Business with <span className="gradient-text">AI-Powered Automation</span>
            </h1>
            
            <p className="text-lg text-foreground/70 md:text-xl max-w-xl">
              We help businesses leverage cutting-edge AI technology to automate processes, 
              reduce costs, and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="font-medium">
                Schedule A Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Explore Services
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative h-80 sm:h-96 w-full">
              <div className="absolute inset-0 rounded-2xl overflow-hidden glowing-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 animate-pulse opacity-60"></div>
                <div className="absolute inset-0 backdrop-blur-sm"></div>
                
                <div className="relative h-full w-full p-6 flex items-center justify-center">
                  <div className="bg-background/50 rounded-lg p-6 glowing-border backdrop-blur-md w-full max-w-md">
                    <div className="space-y-4">
                      <div className="h-10 w-3/4 rounded-md bg-primary/20 animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-5 w-full rounded-md bg-primary/10 animate-pulse"></div>
                        <div className="h-5 w-5/6 rounded-md bg-primary/10 animate-pulse"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-5 w-full rounded-md bg-accent/10 animate-pulse"></div>
                        <div className="h-5 w-4/6 rounded-md bg-accent/10 animate-pulse"></div>
                      </div>
                      <div className="h-8 w-1/3 rounded-md bg-primary/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
