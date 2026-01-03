import { Calendar, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
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

  // Content for each slide (description only on slide 0)
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
    // Slides 1-6: No description
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

  return (
    <section id="events" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Completed Events Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Completed <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Successfully completed events showcasing innovation and learning
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12 mb-24">
          {/* INNOVATION DUEL 2025 - Completed Event with Image Carousel */}
          <div className="glass p-8 rounded-3xl hover-lift opacity-90 hover:opacity-100 transition-opacity overflow-hidden">
            <div className={`grid gap-8 items-center ${showDescription ? 'md:grid-cols-12' : 'md:grid-cols-1'}`}>
              {/* Image Carousel */}
              <div className={`relative group ${showDescription ? 'order-2 md:order-1 md:col-span-7' : 'w-full'}`}>
                <img
                  src={innovationImages[currentImageIndex]}
                  alt={innovationDuel.title}
                  className={`w-full object-cover rounded-2xl shadow-lg transition-opacity duration-300 ${
                    showDescription ? 'h-[32rem] md:h-[42rem]' : 'h-[28rem] md:h-[38rem]'
                  }`}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {innovationImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Event Info Overlay at Bottom */}
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

              {/* Content - Only show when description is visible (slide 0) */}
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stay tuned for exciting events coming soon
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass p-16 rounded-3xl text-center">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center">
                <Calendar className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold font-outfit text-muted-foreground">
                No Upcoming Events
              </h3>
              <p className="text-muted-foreground max-w-md">
                We're currently planning exciting new events. Check back soon for updates on our upcoming activities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;