import { Lightbulb, Users, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creative solutions and cutting-edge technological advancement",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a collaborative network of passionate tech enthusiasts",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Striving for technical mastery and professional development",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit">
              About <span className="gradient-text">ENIGMA</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ENIGMA is a student-led club dedicated to fostering innovation, collaboration, and technical excellence among passionate students.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in creating an environment where creativity meets technology, empowering students to explore, learn, and build the future together.
            </p>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass p-6 rounded-2xl hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-xl glow-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 font-outfit">Our Mission</h3>
          <div className="glass p-8 rounded-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower students with the tools, knowledge, and community needed to excel in technology and innovation, while fostering a culture of collaboration, creativity, and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
