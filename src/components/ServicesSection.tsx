
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, LineChart, MessageSquare, Search, Settings } from "lucide-react";

const services = [
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "AI Strategy Development",
    description: "Custom AI strategies tailored to your business goals and industry challenges."
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "Process Automation",
    description: "Streamline operations by automating repetitive tasks and complex workflows."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "AI Chatbots & Assistants",
    description: "Intelligent virtual assistants that enhance customer service and support."
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Data Analysis",
    description: "Turn your data into actionable insights with AI-powered analytics tools."
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with predictive models."
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Custom AI Solutions",
    description: "Bespoke AI applications designed to solve your unique business challenges."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">AI Automation</span> Services
          </h2>
          <p className="text-foreground/70 text-lg">
            We offer a comprehensive range of AI-powered solutions to help businesses optimize operations,
            enhance customer experiences, and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/50 bg-background/50 backdrop-blur-sm hover:glowing-border transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
