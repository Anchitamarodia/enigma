import { Linkedin, Github, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "President",
      description: "Leading the club's strategic vision and initiatives",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Sarah Chen",
      role: "Vice President",
      description: "Managing operations and community engagement",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Marcus Johnson",
      role: "Technical Lead",
      description: "Overseeing technical projects and workshops",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Zhang",
      role: "Events Coordinator",
      description: "Planning and executing club events and competitions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "David Kumar",
      role: "Marketing Head",
      description: "Managing club branding and outreach initiatives",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      name: "Lisa Anderson",
      role: "Finance Officer",
      description: "Handling budgets and financial planning",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
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
                <div className="w-48 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(var(--primary),0.5)] transition-all duration-300">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <AvatarFallback className="text-2xl font-bold bg-primary/10 rounded-none">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute -bottom-6 right-1/2 transform translate-x-1/2">
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
