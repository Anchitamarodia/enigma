import { Linkedin, Github, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "President",
      description: "Leading the club's strategic vision and initiatives",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      name: "Sarah Chen",
      role: "Vice President",
      description: "Managing operations and community engagement",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Marcus Johnson",
      role: "Technical Lead",
      description: "Overseeing technical projects and workshops",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
    {
      name: "Emily Zhang",
      role: "Events Coordinator",
      description: "Planning and executing club events and competitions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
    {
      name: "David Kumar",
      role: "Marketing Head",
      description: "Managing club branding and outreach initiatives",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      name: "Lisa Anderson",
      role: "Finance Officer",
      description: "Handling budgets and financial planning",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The passionate individuals driving ENIGMA forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-2">
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href="#"
                      className="p-2 bg-primary rounded-full hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-secondary rounded-full hover:scale-110 transition-transform"
                    >
                      <Github className="w-4 h-4 text-background" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-accent rounded-full hover:scale-110 transition-transform"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
