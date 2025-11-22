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
                      // Inline WhatsApp SVG icon (keeps sizing/classes)
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                        role="img"
                        aria-label="WhatsApp"
                      >
                        <path d="M20.52 3.48A11.86 11.86 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 1.95.51 3.87 1.47 5.54L.5 23l6.71-2.1A11.9 11.9 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-1.98-.52-3.84-1.48-5.52zM12 20.5c-1.36 0-2.69-.34-3.86-.98l-.28-.16-3.99 1.25 1.3-3.86-.18-.31A8.01 8.01 0 014 11c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z" />
                        <path d="M17.56 14.3c-.3-.15-1.78-.88-2.05-.98-.27-.1-.46-.15-.65.15-.19.31-.74.98-.9 1.18-.16.2-.32.22-.61.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.31-.02-.48.13-.63.13-.13.3-.33.45-.5.15-.17.2-.28.3-.47.1-.19.05-.36-.02-.5-.07-.15-.65-1.56-.89-2.15-.23-.56-.47-.48-.65-.49l-.55-.01c-.19 0-.5.07-.76.36-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.2 2.08 3.18 5.04 4.45 2.96 1.27 3.19.9 3.77.84.58-.06 1.78-.72 2.03-1.41.25-.7.25-1.3.18-1.41-.07-.12-.27-.19-.58-.34z" />
                      </svg>
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
                    className="text-muted-foreground hover:text-white transition-colors"
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