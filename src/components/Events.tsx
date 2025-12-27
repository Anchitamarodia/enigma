import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import event_2025 from "@/assets/event_2025.jpg";
import raceForRolesImage from "@/assets/race-for-roles-2025.jpg";

const Events = () => {
  // Updated to reflect a past event
  const innovationDuel = {
    title: "INNOVATION DUEL 2025",
    description:
      "🚀 ENIGMA Presented INNOVATION DUEL 2025 🚀\n\n" +
      "Students identified problems around campus and turned them into powerful, real solutions. This event showcased incredible prototypes and smart innovations aimed at improving everyday campus life.\n\n" +
      "💡 Outcomes:\n" +
      "• Hands-on prototype building\n" +
      "• Direct mentoring from industry experts\n" +
      "• Successful project expo and judging\n" +
      "• Recognition and Certificates awarded\n\n" +
      "~ TEAM ENIGMA",
    date: "27/11/2025",
    location: "LH 113 & 127",
    participants: "Max 3 members per team",
    status: "past",
    prizePool: "₹9,000 + Certificates",
    time: "9:00 AM – 3:30 PM",
    image: event_2025,
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
            A look back at our journey of innovation and learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* INNOVATION DUEL 2025 - Now Past Event */}
          <div className="glass p-8 rounded-3xl hover-lift opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 overflow-hidden">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Image - Order 2 on mobile, Order 1 on Desktop */}
              <div className="order-2 md:order-1 md:col-span-7">
                <img
                  src={innovationDuel.image}
                  alt={innovationDuel.title}
                  className="w-full h-[32rem] md:h-[42rem] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Content - Order 1 on mobile, Order 2 on Desktop */}
              <div className="order-1 md:order-2 md:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  {/* Updated Status Tag */}
                  <span className="px-4 py-1 bg-muted rounded-full text-sm font-semibold text-muted-foreground">
                    Past Event
                  </span>
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </div>

                <h3 className="text-3xl font-bold mb-4 font-outfit">
                  {innovationDuel.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {innovationDuel.description}
                </p>

                <div className="grid gap-3 mb-6">
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
            </div>
          </div>

          {/* Race for Roles 2025 - Past Event */}
          <div className="glass p-8 rounded-3xl hover-lift opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 overflow-hidden">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1 bg-muted rounded-full text-sm font-semibold text-muted-foreground">
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