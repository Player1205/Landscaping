import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Mail } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal } = useQuoteModal();

  if (!isQuoteModalOpen) return null;

  const handleWhatsApp = () => {
    window.open('https://wa.me/14033544856?text=Hi!%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20my%20property.', '_blank');
    closeQuoteModal();
  };

  const handleEmail = () => {
    window.open('mailto:info@econestcleaning.com?subject=Free%20Quote%20Request&body=Hi!%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20my%20property.', '_self');
    closeQuoteModal();
  };

  return (
    <AnimatePresence>
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeQuoteModal}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-light rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 max-w-md w-[95%] sm:w-full z-10 border border-primary/10 overflow-hidden"
          >
            <button
              onClick={closeQuoteModal}
              className="absolute top-4 right-4 text-primary/60 hover:text-primary transition-colors bg-white/50 rounded-full p-1"
            >
              <X size={20} />
            </button>
            
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

              {/* Email Option */}
              <div
                onClick={handleEmail}
                className="bg-primary rounded-xl p-5 cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-95 shadow-md flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors">
                  <Mail className="text-white" size={24} />
                </div>
                <h4 className="text-white font-bold text-base md:text-lg mb-1">Email</h4>
                <p className="text-white/80 text-xs md:text-sm">Send us a message</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
