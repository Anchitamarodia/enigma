import { Linkedin, Github, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const membersData = [
  {
    id: 1,
    name: "Yamuna Sharma D",
    role: "Lead",
    description:
      "Always drawn to art and creativity, i love finding stories in colors, design and the little details that often go unnoticed ",
    image: "/leads/lead.jpeg",
    social: {
      email: "yamusharma529@gmail.com",
      linkedin: "http://linkedin.com/in/yamuna-sharma-192a2029b",
      github: "https://github.com/yamunasharma24",
    },
  },
  {
    id: 9,
    name: "Kshitij Sharma",
    role: "Co-Lead",
    description: "A curious jack of all trades who loves learning, building, and exploring new skills across domains.",
    image: "/leads/colead.jpg", 
    social: {
      email: "kshitijsharma.765@gmail.com", 
      linkedin: "https://linkedin.com/in/kshitijjj", // Added https:// for better linking
      github: "https://github.com/kshxiscool", 
    },
  },
  {
    id: 3,
    name: "Krishal Karna",
    role: "Technical Lead",
    description: "Turning data into decisions — one model at a time.",
    image: "/leads/tech.jpeg",
    social: {
      email: "karnakreeshal@gmail.com",
      linkedin: "https://www.linkedin.com/in/krishalkarna/",
      github: "https://github.com/kreeshal17",
    },
  },
  {
    id: 4,
    name: "Shaili Srivastava ",
    role: "Operation Lead",
    description:
      "Passionate about technology and problem-solving. I love building efficient systems, optimizing workflows, and constantly learning new stuff to stay ahead.",
    image: "/leads/operation.jpeg",
    social: {
      email: "23btrcn026@jainuniversity.ac.in",
      linkedin: "https://www.linkedin.com/in/shaili-srivastava0908/",
      github: "https://github.com/ShailiSrivastava",
    },
  },
  {
    id: 6,
    name: "Aakash Agarwal",
    role: "Resource Lead",
    description: "Passionate technologist solving real-world challenges",
    image: "/leads/resource.jpeg",
    social: {
      email: "aakashrkl603@gmail.com",
      linkedin: "https://www.linkedin.com/in/aakashagarwal1609/",
      github: "https://github.com/AaKaShAgArWaLs",
    },
  },
  {
    id: 7,
    name: "Ayadee Aphiwatamorn",
    role: "Creative lead",
    description:
      "Creativity isn’t just what i do…it’s how i see the world. i love turning ideas into something visual, meaningful and uniquely mine",
    image: "/leads/creative.jpeg",
    social: {
      email: "ayadee.aphiwatamorn@gmail.com",
      linkedin: "http://linkedin.com/in/ayadee-aphiwatamorn1878",
      github: "https://github.com/AyadeeAphiwatamorn",
    },
  },
  {
    id: 8,
    name: "Suyog Lal Shrestha",
    role: "Photography Lead",
    description: "Eager and enthusiastic about exploring new things.",
    image: "/leads/photography.jpeg",
    social: {
      email: "sathyac2004@gmail.com",
      linkedin: "https://www.linkedin.com/in/",
      github: "https://github.com/",
    },
  },
  {
    id: 10,
    name: "Sworaj Khadka",
    role: "Social Media Lead",
    description: "Crafting our digital presence and keeping the community engaged one post at a time.",
    image: "/leads/social.jpg", 
    social: {
      email: "sworajkhadka21@gmail.com", 
      linkedin: "https://www.linkedin.com/in/sworaj-khadka-071a20349", 
      github: "https://github.com/SworajKhadka", 
    },
  },
];

const formatTeamData = (members: typeof membersData) => {
  return members.map((member) => ({
    name: member.name,
    role: member.role,
    description: member.description,
    image: member.image,
    linkedin: member.social.linkedin,
    github: member.social.github,
    email: member.social.email,
  }));
};

const Team = () => {
  const teamMembers = formatTeamData(membersData);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass p-3 rounded-2xl hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-10">
                <div className="w-40 h-56 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(var(--primary),0.5)] transition-all duration-300">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <AvatarFallback className="text-2xl font-bold bg-primary/10 rounded-none">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute -bottom-4 right-1/2 transform translate-x-1/2">
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary rounded-full hover:scale-110 transition-transform"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-secondary rounded-full hover:scale-110 transition-transform"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="w-4 h-4 text-background" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 bg-accent rounded-full hover:scale-110 transition-transform"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-snug px-2">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;