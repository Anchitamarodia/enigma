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
      {/* Floating Toggle Button - Icon changed to HelpCircle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto fixed bottom-6 right-6 h-16 w-16 rounded-full bg-[#2563eb] text-white shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] z-[9999] flex items-center justify-center transition-all"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-8 w-8" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
              {/* This is the Help/Question icon for the floating button */}
              <HelpCircle className="h-9 w-9" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* FAQ Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
            className="pointer-events-auto fixed bottom-28 right-6 w-[360px] md:w-[420px] max-h-[600px] bg-white/90 backdrop-blur-xl rounded-[28px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col z-[9999] overflow-hidden border border-white/20"
          >
            {/* Header */}
            <div className="p-7 bg-[#2563eb] text-white relative overflow-hidden">
              <div className="absolute top-[-20%] left-[-10%] w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2.5 bg-white/20 rounded-xl border border-white/30 shadow-inner">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-2xl tracking-tight">Club Assistant</h3>
                    <Sparkles className="h-5 w-5 text-blue-200 animate-pulse" />
                  </div>
                  <p className="text-sm text-blue-100/90 font-medium">Quick answers to common questions</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-5 overflow-y-auto bg-[#f8fafc] custom-scrollbar">
              <Accordion 
                type="single" 
                collapsible 
                className="w-full space-y-4"
                onValueChange={(value) => setActiveItem(value)}
              >
                {faqs.map((faq, index) => {
                  const itemValue = `item-${index}`;
                  const isActive = activeItem === itemValue;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <AccordionItem
                        value={itemValue}
                        className="bg-white border-none rounded-[20px] px-2 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(37,99,235,0.08)] transition-all duration-300"
                      >
                        <AccordionTrigger className={`flex gap-4 px-3 text-[15px] font-bold text-left hover:no-underline py-5 transition-all group ${isActive ? 'text-[#2563eb]' : 'text-[#1e293b]'}`}>
                          <div className="flex items-center gap-4 flex-1">
                            <motion.div 
                              animate={{ scale: isActive ? 1.1 : 1 }}
                              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black transition-colors ${isActive ? 'bg-[#2563eb] text-white shadow-lg' : 'bg-[#eff6ff] text-[#2563eb]'}`}
                            >
                              {index + 1}
                            </motion.div>
                            <span className="flex-1 leading-snug">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-[14px] text-slate-500 leading-relaxed px-14 pb-6 pt-0 font-medium">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  );
                })}
              </Accordion>
            </div>

            {/* Footer */}
            <div className="p-5 bg-white border-t border-gray-100 text-center">
              <p className="text-[14px] text-gray-500 font-medium">
                Still have questions? Use the <span className="text-[#2563eb] font-bold cursor-pointer hover:underline decoration-2">Contact section</span> below.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default ChatBot;