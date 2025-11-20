import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import inceptrixImage from "@/assets/inceptrix-2025.jpg";
import raceForRolesImage from "@/assets/race-for-roles-2025.jpg";

const Events = () => {
  // MODIFIED: Content updated to reflect a past event
  const upcomingEvent = {
    title: "INCEPTRIX 2025",
    description: "INCEPTRIX 2025 was Enigma's flagship event aimed at providing a platform for students to showcase their talent, creativity, and skills in technology and innovation. The event included technical workshops, coding competitions, and project exhibitions.",
    date: "March 15-17, 2025",
    location: "Main Campus Auditorium",
    participants: "200+ Attended",
    status: "past",
    image: inceptrixImage,
  };

  const pastEvent = {
    title: "Race for Roles 2025",
    description: "A unique competition focused on professional development and career readiness. Students participated in mock interviews, technical challenges, and resume building workshops to prepare for their future careers.",
    date: "January 10-12, 2025",
    location: "Tech Innovation Center",
    participants: "150+ Attended",
    status: "past",
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
          {/* INCEPTRIX 2025 - Now marked as a Past Event (Kept original formatting) */}
          {/* MODIFIED: Added past event visual classes */}
          <div className="glass p-8 rounded-3xl hover-lift opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 overflow-hidden">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              {/* Image - Still Order 2 on md screens, taking 7/12 width */}
              <div className="order-2 md:order-1 md:col-span-7">
                <img 
                  src={upcomingEvent.image} 
                  alt={upcomingEvent.title}
                  className="w-full h-[32rem] md:h-[42rem] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Content - Still Order 1 on md screens, taking 5/12 width */}
              <div className="order-1 md:order-2 md:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  {/* MODIFIED: Status tag styling updated */}
                  <span className="px-4 py-1 bg-muted rounded-full text-sm font-semibold">
                    Past Event
                  </span>
                  {/* MODIFIED: Icon color updated */}
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </div>

                <h3 className="text-3xl font-bold mb-4 font-outfit">
                  {upcomingEvent.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {upcomingEvent.description}
                </p>

                <div className="grid gap-3 mb-6">
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Date</div>
                      <div className="font-semibold">{upcomingEvent.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-semibold">{upcomingEvent.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Participants</div>
                      <div className="font-semibold">{upcomingEvent.participants}</div>
                    </div>
                  </div>
                </div>

                {/* REMOVED: Register Now button to signify past event */}
                {/* <Button variant="hero" size="lg" className="w-full md:w-auto">
                  Register Now
                  <ExternalLink className="w-4 h-4" />
                </Button> */}
              </div>
            </div>
          </div>

          {/* Past Event (Race for Roles 2025) - Kept as is */}
          <div className="glass p-8 rounded-3xl hover-lift opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 overflow-hidden">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Content - Still col-span-5 */}
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1 bg-muted rounded-full text-sm font-semibold">
                    Past Event
                  </span>
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </div>

                <h3 className="text-3xl font-bold mb-4 font-outfit">
                  {pastEvent.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pastEvent.description}
                </p>

                <div className="grid gap-3">
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Date</div>
                      <div className="font-semibold">{pastEvent.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-semibold">{pastEvent.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 glass p-3 rounded-xl">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Participants</div>
                      <div className="font-semibold">{pastEvent.participants}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image - Still col-span-7 */}
              <div className="md:col-span-7">
                <img 
                  src={pastEvent.image} 
                  alt={pastEvent.title}
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