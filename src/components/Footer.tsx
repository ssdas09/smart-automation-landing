
import { Zap } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/30 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold gradient-text">SwayamAI</span>
            </div>
            <p className="text-foreground/70">
              Transforming businesses with intelligent AI automation solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-foreground/70 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#benefits" className="text-foreground/70 hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#process" className="text-foreground/70 hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">AI Strategy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Process Automation</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Chatbots</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Data Analysis</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>123 Tech Avenue</li>
              <li>New Delhi, India</li>
              <li>aiservices@swayamai.co.in</li>
              <li>+919311147087</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-sm">
            © {year} SwayamAI. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-foreground/50 hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-foreground/50 hover:text-primary transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-foreground/50 hover:text-primary transition-colors text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
