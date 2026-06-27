import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Mail, ArrowLeft } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal } = useQuoteModal();
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  if (!isQuoteModalOpen) return null;

  const handleClose = () => {
    setShowEmailOptions(false);
    closeQuoteModal();
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/14033544856?text=Hi!%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20my%20property.', '_blank');
    handleClose();
  };

  const email = 'econestcleaninglawncraft@gmail.com';
  const subject = 'Free Quote Request';
  const body = 'Hi! I would like to request a free quote for my property.';

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const yahooUrl = `https://compose.mail.yahoo.com/?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const defaultUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <AnimatePresence>
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-light rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 max-w-md w-[95%] sm:w-full z-10 border border-primary/10 overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-primary/60 hover:text-primary transition-colors bg-white/50 rounded-full p-1"
            >
              <X size={20} />
            </button>
            
            {!showEmailOptions ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Get a Free Quote</h3>
                  <p className="text-primary/70 text-sm md:text-base">Choose how you'd like to reach us</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* WhatsApp Option */}
                  <div
                    onClick={handleWhatsApp}
                    className="bg-[#25D366] rounded-xl p-5 cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-95 shadow-md flex flex-col items-center text-center group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-1">WhatsApp</h4>
                    <p className="text-white/90 text-xs md:text-sm">Chat with us instantly</p>
                  </div>

                  {/* Email Option Selection Trigger */}
                  <div
                    onClick={() => {
                      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                      if (isMobile) {
                        window.location.href = defaultUrl;
                        setTimeout(handleClose, 100);
                      } else {
                        setShowEmailOptions(true);
                      }
                    }}
                    className="bg-primary rounded-xl p-5 cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-95 shadow-md flex flex-col items-center text-center group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors">
                      <Mail className="text-white" size={24} />
                    </div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-1">Email</h4>
                    <p className="text-white/80 text-xs md:text-sm">Send us a message</p>
                  </div>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Select Provider</h3>
                  <p className="text-primary/70 text-sm md:text-base">Choose your email service</p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <a href={gmailUrl} target="_blank" rel="noopener noreferrer" onClick={handleClose} className="bg-white border border-gray-200 rounded-xl p-4 cursor-pointer hover:bg-gray-50 hover:shadow-md transition-all flex items-center">
                    <span className="font-semibold text-gray-800 ml-2">Gmail</span>
                  </a>
                  
                  <a href={outlookUrl} target="_blank" rel="noopener noreferrer" onClick={handleClose} className="bg-white border border-gray-200 rounded-xl p-4 cursor-pointer hover:bg-gray-50 hover:shadow-md transition-all flex items-center">
                    <span className="font-semibold text-gray-800 ml-2">Outlook</span>
                  </a>

                  <a href={yahooUrl} target="_blank" rel="noopener noreferrer" onClick={handleClose} className="bg-white border border-gray-200 rounded-xl p-4 cursor-pointer hover:bg-gray-50 hover:shadow-md transition-all flex items-center">
                    <span className="font-semibold text-gray-800 ml-2">Yahoo Mail</span>
                  </a>

                  <a href={defaultUrl} onClick={(e) => setTimeout(handleClose, 100)} className="bg-primary/5 border border-primary/10 rounded-xl p-4 cursor-pointer hover:bg-primary/10 hover:shadow-md transition-all flex items-center mt-2">
                    <span className="font-semibold text-primary ml-2">Default Mail App</span>
                  </a>
                </div>

                <button 
                  onClick={() => setShowEmailOptions(false)} 
                  className="mt-6 flex items-center justify-center w-full text-primary/70 hover:text-primary transition-colors font-medium py-2"
                >
                  <ArrowLeft size={16} className="mr-2" /> Back to options
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
