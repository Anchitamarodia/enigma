import { Lightbulb, Users, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "TECH INNOVATION",
      description: "Fostering creative solutions and cutting-edge technological advancement in a raw technical environment.",
    },
    {
      icon: Users,
      title: "CORE COMMUNITY",
      description: "Building a collaborative network of passionate tech enthusiasts and technical rebels.",
    },
    {
      icon: Trophy,
      title: "MISSION EXCELLENCE",
      description: "Striving for technical mastery and professional development through rigorous missions.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-start">

          {/* Left Column - Fragmented Text */}
          <div className="md:col-span-5 space-y-12">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary font-code tracking-[0.3em] uppercase text-xs">Sector.Origin</span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black font-poppins tracking-tighter leading-[0.85] mb-8">
              ABOUT <br />
              <span className="text-primary italic">ENIGMA.</span>
            </h2>

            <div className="space-y-6 border-l border-white/10 pl-8">
              <p className="text-xl text-muted-foreground leading-relaxed font-bold">
                ENIGMA is a collective of student innovators dedicated to technical excellence and creative destruction.
              </p>
              <p className="text-lg text-muted-foreground/60 leading-relaxed font-code">
                [SYSTEM_MANIFESTO]: We believe in creating an environment where high-intensity technology meets radical creativity, empowering the next generation of builders.
              </p>
            </div>
          </div>

          {/* Right Column - Radical Feature Blocks */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-background p-10 hover:bg-primary/5 transition-colors group relative hover:animate-jitter"
                >
                  <div className="absolute top-4 right-4 text-white/5 font-black text-4xl select-none">
                    0{index + 1}
                  </div>
                  <div className="mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary text-black">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 font-poppins tracking-tight uppercase">{feature.title}</h3>
                  <p className="text-muted-foreground font-code text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}

            {/* Mission Statement Block */}
            <div className="bg-primary p-10 col-span-1 sm:col-span-1 flex flex-col justify-between">
              <h3 className="text-black text-2xl font-black font-poppins tracking-tight uppercase">MISSION.LOG</h3>
              <p className="text-black/80 font-bold leading-tight text-lg mt-8">
                To empower students with the knowledge and community needed to excel in technical innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.01] pointer-events-none" />
    </section>
  );
};

export default About;
