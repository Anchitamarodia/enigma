import { Mail, Phone, MapPin, Send } from "lucide-react";
// Removed Button import as it's no longer used
// import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "enigmaclub5@gmail.com",
      href: "mailto:info@enigmaclub.edu",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 96967 24664",
      href: "tel:+919696724664",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "JAIN (Deemed-to-be-University), Faculty of Engineering and Technology (FET)",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden text-white" style={{ backgroundColor: '#0c142c' }}>
      {/* Background Glows (adjusting to dark theme) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Reverted max-width to allow space for three cards */}
        <div className="max-w-5xl mx-auto">
          {/* Header Section (Adjusted colors for dark background) */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-white">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-white/80">
              Have questions? We'd love to hear from you
            </p>
          </div>

          {/* Contact Info Grid - Styled to match the light-bordered, dark-background cards from the image */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  // Styling to match the dark card with rounded corners and subtle border/glow
                  className="flex flex-col items-center text-center p-8 rounded-xl bg-blue-900/40 border border-white/10 backdrop-blur-sm transition-transform hover:scale-[1.03] cursor-pointer"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.01)' // Subtle, darker shadow
                  }}
                >
                  {/* Icon Wrapper: Solid rounded square with bright cyan gradient and glow */}
                  <div 
                    className={`inline-flex p-4 rounded-xl mb-6 text-white`} 
                    style={{
                      background: 'linear-gradient(to right, #00c6ff, #0072ff)', // Bright Cyan/Blue Gradient
                      boxShadow: '0 0 15px rgba(0, 198, 255, 0.6)', // Cyan Glow Effect
                    }}
                  >
                    <IconComponent className={`w-6 h-6`} /> 
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {info.title}
                  </h3>
                  <p className="text-white/70">{info.value}</p>
                </a>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;