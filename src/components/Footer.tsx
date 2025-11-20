import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
// Assuming enigmaLogo is available in your assets/ directory
import enigmaLogo from "@/assets/enigma-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Data from your original footer structure
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  // Data from your original footer (excluding the custom image icon for WhatsApp)
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/ju_enigma/?hl=en",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/enigma-club-ju/posts/?feedView=all",
      label: "LinkedIn",
    },
    // Using a custom object for the WhatsApp link to handle the external image
    {
      customIcon: true, 
      href: "https://chat.whatsapp.com/KUe221OJGsd63Hs5grwUMS",
      label: "WhatsApp",
      imageSrc: "/w.webp"
    }
    // Added a placeholder for Twitter/Github, if you want them later:
    // { icon: Github, href: "https://github.com/enigmaclub", label: "GitHub" },
  ];
  
  // Custom scroll-to-top function for the button (re-added outside the main footer)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative pt-20 pb-10 border-t border-border/50">
      {/* Glow Line Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-50" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand/About Section - Now spanning 1 column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Assuming enigmaLogo is your rounded square logo */}
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src={enigmaLogo} alt="ENIGMA Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold font-outfit gradient-text">ENIGMA</span>
            </div>
            <p className="text-muted-foreground">
              A student-led club dedicated to fostering innovation,
              collaboration, and technical excellence among passionate students.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
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
                    {social.customIcon ? (
                      // Custom handling for the WhatsApp image
                      <img
                        src={social.imageSrc}
                        height={20}
                        width={20}
                        className="w-5 h-5 text-white"
                        alt={social.label}
                      />
                    ) : (
                      // Standard Lucide Icon
                      <Icon className="w-5 h-5" />
                    )}
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

          {/* Contact Info - Content from your original list */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Contact Info</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>JAIN (Deemed-to-be-University)</li>
              <li>Faculty of Engineering and Technology (FET)</li>
              <li>enigmaclub5@gmail.com</li>
              <li>+91 96967 24664</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Scroll to Top Button */}
        <div className="pt-8 border-t border-border/30 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>
            &copy; {currentYear}{" "}
            <span className="gradient-text font-semibold">Enigma Student Club</span>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-full glass hover:bg-primary hover:scale-110 transition-all text-foreground"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;