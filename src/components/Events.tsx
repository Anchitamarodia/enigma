import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";

const Events = () => {
  const upcomingEvent = {
    title: "INCEPTRIX 2025",
    description: "INCEPTRIX 2025 is Enigma's flagship event aimed at providing a platform for students to showcase their talent, creativity, and skills in technology and innovation. The event includes technical workshops, coding competitions, and project exhibitions.",
    date: "March 15-17, 2025",
    location: "Main Campus Auditorium",
    participants: "200+ Expected",
    status: "upcoming",
  };

  const pastEvent = {
    title: "Race for Roles 2025",
    description: "A unique competition focused on professional development and career readiness. Students participated in mock interviews, technical challenges, and resume building workshops to prepare for their future careers.",
    date: "January 10-12, 2025",
    location: "Tech Innovation Center",
    participants: "150+ Attended",
    status: "past",
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

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Upcoming Event */}
          <div className="glass p-8 rounded-3xl hover-lift glow-primary">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1 bg-gradient-primary rounded-full text-sm font-semibold animate-pulse-glow">
                Upcoming
              </span>
              <Calendar className="w-5 h-5 text-primary" />
            </div>

            <h3 className="text-3xl font-bold mb-4 font-outfit gradient-text">
              {upcomingEvent.title}
            </h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {upcomingEvent.description}
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-3 glass p-3 rounded-xl">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Date</div>
                  <div className="font-semibold">{upcomingEvent.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 glass p-3 rounded-xl">
                <MapPin className="w-5 h-5 text-secondary" />
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-semibold">{upcomingEvent.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 glass p-3 rounded-xl">
                <Users className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Participants</div>
                  <div className="font-semibold">{upcomingEvent.participants}</div>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full md:w-auto">
              Register Now
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* Past Event */}
          <div className="glass p-8 rounded-3xl hover-lift opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
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

            <div className="grid md:grid-cols-3 gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Events;
