import { useState } from "react";
// Changed Bot to HelpCircle
import { HelpCircle, X, MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ENIGMA?",
    answer: "ENIGMA is a student-led club at Jain University (FET) dedicated to fostering innovation, collaboration, and technical excellence through workshops, competitions, and projects."
  },
  {
    question: "How can I join the club?",
    answer: "Registrations for our flagship event 'Race for Roles' will be starting soon! To ensure you don't miss out, follow us on Instagram and stay updated for the official registration announcement and membership links."
  },
  {
    question: "What kind of events do you host?",
    answer: "We host technical hackathons (like Innovation Duel), hands-on coding sessions, and creative design challenges."
  },
  {
    question: "Where is the club located?",
    answer: "We are primarily active at the Faculty of Engineering and Technology (FET) campus, Jain University."
  },
  {
    question: "Who can I contact for collaboration?",
    answer: "You can reach out to our Lead, Yamuna Sharma, or email us directly at enigmaclub5@gmail.com for any queries or partnership opportunities."
  }
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Floating Toggle Button - Radical Block */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto fixed bottom-8 right-8 h-16 w-16 bg-primary text-black z-[9999] flex items-center justify-center transition-all border-none"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-8 w-8" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
              <HelpCircle className="h-9 w-9" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* FAQ Window - Radical Terminal Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="pointer-events-auto fixed bottom-32 right-8 w-[360px] md:w-[420px] max-h-[600px] bg-background border-2 border-primary flex flex-col z-[9999] overflow-hidden"
          >
            {/* Header - Technical Header */}
            <div className="p-6 bg-primary text-black relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-black/20">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl font-poppins tracking-tighter uppercase leading-none">AUTO_INTEL</h3>
                    <p className="text-[9px] font-code font-bold uppercase tracking-widest mt-1 opacity-60">System.Assistant [v2.0]</p>
                  </div>
                </div>
                <Sparkles className="h-5 w-5 animate-pulse" />
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-background custom-scrollbar">
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-2"
                onValueChange={(value) => setActiveItem(value)}
              >
                {faqs.map((faq, index) => {
                  const itemValue = `item-${index}`;
                  const isActive = activeItem === itemValue;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <AccordionItem
                        value={itemValue}
                        className={`border border-white/10 px-4 transition-all duration-300 ${isActive ? 'bg-primary/5 border-primary/50' : 'bg-transparent'}`}
                      >
                        <AccordionTrigger className={`flex gap-4 text-sm font-black text-left hover:no-underline py-5 transition-all group tracking-tight uppercase ${isActive ? 'text-primary' : 'text-white'}`}>
                          <div className="flex items-center gap-4 flex-1">
                            <span className="font-code text-[10px] opacity-30">0{index + 1}</span>
                            <span className="flex-1 leading-tight font-poppins">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-[12px] text-muted-foreground leading-relaxed pl-8 pb-6 pt-0 font-code uppercase">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  );
                })}
              </Accordion>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="flex items-center justify-between font-code text-[9px] text-white/40 uppercase tracking-widest">
                <span>SECURE_SESSION: ACTIVE</span>
                <span>DATA.LOG: OK</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #080808;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D5FF4022;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D5FF4044;
        }
      `}</style>
    </div>
  );
};

export default ChatBot;