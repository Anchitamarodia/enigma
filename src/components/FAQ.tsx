import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can join ENIGMA?",
      answer:
        "ENIGMA is open to all students regardless of their major or technical background. We welcome anyone passionate about technology, innovation, and learning.",
    },
    {
      question: "Do I need programming experience to join?",
      answer:
        "No prior programming experience is required! We offer workshops and mentorship programs for beginners, as well as advanced projects for experienced members.",
    },
    {
      question: "What kind of events does ENIGMA organize?",
      answer:
        "We organize a variety of events including technical workshops, hackathons, coding competitions, guest lectures, project showcases, and social networking events.",
    },
    {
      question: "How can I stay updated about ENIGMA activities?",
      answer:
        "You can follow us on our social media channels, join our Discord server, or subscribe to our newsletter to stay informed about all upcoming events and opportunities.",
    },
    {
      question: "Are there leadership opportunities in ENIGMA?",
      answer:
        "Yes! We regularly recruit new team members for various roles including event coordinators, technical leads, and marketing positions. Leadership applications open each semester.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ENIGMA
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
