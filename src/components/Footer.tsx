import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/enigmaclub", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/enigmaclub", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/enigmaclub", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/enigmaclub", label: "Instagram" },
  ];

  return (
    <footer className="relative pt-20 pb-10 border-t border-border/50">
      {/* Glow Line Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-50" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold font-outfit">E</span>
              </div>
              <span className="text-2xl font-bold font-outfit gradient-text">ENIGMA</span>
            </div>
            <p className="text-muted-foreground">
              Unraveling the mysteries of technology, innovation, and creativity. Join us in building the future.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 glass rounded-xl hover:bg-primary hover:scale-110 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground animated-underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>contact@enigmaclub.org</li>
              <li>+1 (555) 123-4567</li>
              <li>Campus Tech Hub, Room 301</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 text-center text-muted-foreground">
          <p>
            © {currentYear} <span className="gradient-text font-semibold">ENIGMA</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
