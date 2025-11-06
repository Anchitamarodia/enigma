import { Button } from "@/components/ui/button";
import { Target, Rocket, Heart } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-8">
            Our <span className="gradient-text">Vision</span>
          </h2>

          <div className="glass p-12 rounded-3xl space-y-6">
            <div className="flex justify-center gap-4 mb-8">
              <div className="p-4 bg-primary/20 rounded-full">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="p-4 bg-secondary/20 rounded-full">
                <Rocket className="w-8 h-8 text-secondary" />
              </div>
              <div className="p-4 bg-accent/20 rounded-full">
                <Heart className="w-8 h-8 text-accent" />
              </div>
            </div>

            <blockquote className="text-2xl md:text-3xl font-semibold leading-relaxed">
              "To create a community where innovation flourishes, collaboration thrives, and every student has the opportunity to explore the limitless possibilities of technology."
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision ENIGMA as the cornerstone of technological advancement in our campus, where students from all backgrounds come together to learn, create, and inspire the next generation of innovators.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Innovation First",
                description: "Embracing new ideas and pushing boundaries",
              },
              {
                title: "Inclusive Community",
                description: "Welcoming students from all disciplines",
              },
              {
                title: "Continuous Growth",
                description: "Learning and evolving together",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-2 gradient-text">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          <Button variant="glow" size="xl" className="mt-8">
            Join Our Vision
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Vision;
