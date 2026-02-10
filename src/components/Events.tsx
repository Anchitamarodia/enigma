import { Calendar, MapPin, Users, ChevronLeft, ChevronRight, ExternalLink, Clock } from "lucide-react";
import { useState } from "react";

const Events = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of 7 images for Innovation Duel carousel
  const innovationImages = [
    "/events/event_2025.jpg",
    "/events/p1.jpg",
    "/events/p2.jpg",
    "/events/p3.jpg",
    "/events/p4.jpg",
    "/events/p5.jpg",
    "/events/p6.jpg",
  ];

  // Content for each (description only on slide 0)
  const slideContent = [
    {
      showDescription: true,
      description:
        "🚀 ENIGMA Presented INNOVATION DUEL 2025 🚀\n\n" +
        "Students identified problems around campus and turned them into powerful, real solutions. This event showcased incredible prototypes and smart innovations aimed at improving everyday campus life.\n\n" +
        "💡 Outcomes:\n" +
        "• Hands-on prototype building\n" +
        "• Direct mentoring from industry experts\n" +
        "• Successful project expo and judging\n" +
        "• Recognition and Certificates awarded\n\n" +
        "~ TEAM ENIGMA",
    },
    { showDescription: false },
    { showDescription: false },
    { showDescription: false },
    { showDescription: false },
    { showDescription: false },
    { showDescription: false },
  ];

  const innovationDuel = {
    title: "INNOVATION DUEL 2025",
    date: "27/11/2025",
    location: "LH 113 & 127",
    participants: "60+ Team Members Participated",
    status: "completed",
    prizePool: "₹9,000 + Certificates",
    time: "9:00 AM – 3:30 PM",
  };

  const currentSlide = slideContent[currentImageIndex];
  const showDescription = currentSlide.showDescription;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % innovationImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? innovationImages.length - 1 : prev - 1
    );
  };

  // --- NEW EVENT DATA ---
  const raceForRoles = {
    title: "ENIGMA Presents RACE FOR ROLES 2026",
    date: "11/02/2026",
    time: "To be announced",
    location: "To be announced",
    image: "/events/raceforroles.jpg", 
    link: "https://forms.gle/6m6HsK5HKkAMZqDD8",
    description: 
      "Looking to be more than just a participant?\nHere’s your chance to become a part of Team Enigma and contribute to the growth of a dynamic student club.\n\n" +
      "What is Race for Roles?\n" +
      "A structured recruitment event where students can showcase their skills and join one of Enigma’s core teams.\n\n" +
      "Teams Open for Recruitment:\n" +
      "• Technical Team\n" +
      "• Social Media Team\n" +
      "• Resource & Management Team\n" +
      "• Design & Photography Team\n\n" +
      "Why Join Enigma?\n" +
      "• Hands-on experience\n" +
      "• Work on real events & initiatives\n" +
      "• Learn from peers, seniors, and faculty\n" +
      "• Certificates & recognition\n\n" +
      "If you’re passionate about technology, content creation, design, or management and want to grow while contributing to a vibrant student community — this is your opportunity.\n\n" +
      "~ TEAM ENIGMA"
  };

  return (
    <section id="events" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* ================= COMPLETED EVENTS ================= */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Completed <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Successfully completed events showcasing innovation and learning
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12 mb-24">
          {/* INNOVATION DUEL 2025 */}
          <div className="glass p-8 rounded-3xl hover-lift opacity-90 hover:opacity-100 transition-opacity overflow-hidden">
            <div className={`grid gap-8 items-center ${showDescription ? 'md:grid-cols-12' : 'md:grid-cols-1'}`}>
              
              {/* Image Carousel */}
              <div className={`relative group ${showDescription ? 'order-2 md:order-1 md:col-span-7' : 'w-full'}`}>
                <img
                  src={innovationImages[currentImageIndex]}
                  alt={innovationDuel.title}
                  /* MODIFIED: Increased height classes here */
                  className={`w-full object-cover rounded-2xl shadow-lg transition-opacity duration-300 ${
                    showDescription ? 'h-[36rem] md:h-[48rem]' : 'h-[32rem] md:h-[42rem]'
                  }`}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {innovationImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>

                {/* Overlay if description is hidden */}
                {!showDescription && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 rounded-b-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                        Event Completed
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 font-outfit text-white">
                      {innovationDuel.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-white">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{innovationDuel.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{innovationDuel.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{innovationDuel.participants}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Description Content */}
              {showDescription && (
                <div className="order-1 md:order-2 md:col-span-5">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      Event Completed
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 font-outfit">
                    {innovationDuel.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed whitespace-pre-line text-sm">
                    {currentSlide.description}
                  </p>

                  <div className="grid gap-3">
                    <div className="flex items-center gap-3 glass p-3 rounded-xl">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm text-muted-foreground">Date</div>
                        <div className="font-semibold">{innovationDuel.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 glass p-3 rounded-xl">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm text-muted-foreground">Location</div>
                        <div className="font-semibold">{innovationDuel.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 glass p-3 rounded-xl">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm text-muted-foreground">Participants</div>
                        <div className="font-semibold">{innovationDuel.participants}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= UPCOMING EVENTS ================= */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stay tuned for exciting events coming soon
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* RACE FOR ROLES 2026 */}
          <div className="glass p-8 rounded-3xl hover-lift opacity-90 hover:opacity-100 transition-opacity overflow-hidden">
            <div className="grid gap-8 items-center md:grid-cols-12">
              
              {/* Image Side - Made taller for better poster visibility */}
              <div className="order-2 md:order-1 md:col-span-7 relative group">
                <img
                  src={raceForRoles.image}
                  alt={raceForRoles.title}
                  /* MODIFIED: Increased height from h-[32rem]/md:h-[42rem] to h-[36rem]/md:h-[48rem] */
                  className="w-full object-cover rounded-2xl shadow-lg h-[55rem] md:h-[55rem]"
                />
              </div>

              {/* Content Side */}
              <div className="order-1 md:order-2 md:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold animate-pulse">
                    Registrations Open
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4 font-outfit">
                  {raceForRoles.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed whitespace-pre-line text-sm max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {raceForRoles.description}
                </p>

                <div className="grid gap-3 mb-6">
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Date</div>
                      <div className="font-semibold">{raceForRoles.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Time</div>
                      <div className="font-semibold">{raceForRoles.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Venue</div>
                      <div className="font-semibold">{raceForRoles.location}</div>
                    </div>
                  </div>
                </div>

                <a
                  href={raceForRoles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:opacity-90 transition-all hover:scale-[1.02]"
                >
                  Register Now
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;