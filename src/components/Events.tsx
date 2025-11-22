import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import raceForRolesImage from "@/assets/race-for-roles-2025.jpg";

const Events = () => {
  // MODIFIED: Status changed to 'current' and date is in the future
  const currentEvent = {
    title: "Race for Roles 2026",
    description: "A unique competition focused on professional development and career readiness. Students participated in mock interviews, technical challenges, and resume building workshops to prepare for their future careers. Register now to secure your spot!",
    date: "January 10-12, 2026",
    location: "Tech Innovation Center",
    participants: "Registering Now!", // Changed participants text
    status: "current", // Changed status
    image: raceForRolesImage,
  };

  return (
    <section id="events" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Our <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join us for exciting events, workshops, and competitions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Current Event (Race for Roles 2026) */}
          {/* REMOVED: grayscale/opacity classes for current event styling */}
          <div className="glass p-8 rounded-3xl hover-lift overflow-hidden">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Content - Still col-span-5 */}
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  {/* MODIFIED: Changed label to Current Event */}
                  <span className="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary">
                    Current Event
                  </span>
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </div>

                <h3 className="text-3xl font-bold mb-4 font-outfit">
                  {currentEvent.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {currentEvent.description}
                </p>

                <div className="grid gap-3 mb-6">
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Date</div>
                      <div className="font-semibold">{currentEvent.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-semibold">{currentEvent.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Participants</div>
                      <div className="font-semibold">{currentEvent.participants}</div>
                    </div>
                  </div>
                </div>
                
                {/* ADDED: Register Now button for the current event */}
                <Button variant="hero" size="lg" className="w-full md:w-auto">
                  Register Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Image - Still col-span-7 */}
              <div className="md:col-span-7">
                <img 
                  src={currentEvent.image} 
                  alt={currentEvent.title}
                  // REMOVED: grayscale class
                  className="w-full h-[32rem] md:h-[42rem] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;