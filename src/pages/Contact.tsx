import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {

  return (
    <div className="pt-16 md:pt-24 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-20">
        <AnimatedSection>
          <div className="text-center mb-6 md:mb-16">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-primary mb-4">Get in Touch</h1>
            <p className="text-sm sm:text-base md:text-xl text-primary/70 max-w-2xl mx-auto font-light">
              Ready to transform your outdoor space? Contact us today for a free estimate.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto bg-primary rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden border border-secondary">
          
          {/* Contact Info */}
          <AnimatedSection className="text-light p-5 sm:p-8 md:p-16 relative overflow-hidden text-center flex flex-col items-center">
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-50"></div>
            <div className="absolute top-12 -right-12 w-48 h-48 bg-accent rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10 w-full max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">Contact Information</h2>
              <p className="text-light/70 mb-6 md:mb-12 text-sm sm:text-base md:text-lg">
                Reach out to us through any of the channels below. We look forward to hearing from you!
              </p>

              <div className="space-y-5 sm:space-y-6 md:space-y-8 flex flex-col w-full max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 md:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm sm:text-base md:text-xl mb-1">Phone</h3>
                    <p className="text-light/70 text-sm md:text-base">+1 (403) 354-4856</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 md:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm sm:text-base md:text-xl mb-1">Email</h3>
                    <a href="mailto:econestcleaninglawncraft@gmail.com?subject=Free%20Quote%20Request&body=Hi!%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20my%20property." className="text-light/70 hover:text-accent transition-colors break-all text-sm md:text-base inline-block">econestcleaninglawncraft@gmail.com</a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 md:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm sm:text-base md:text-xl mb-1">Location</h3>
                    <p className="text-light/70 text-sm md:text-base">Cityscape Drive, NE, Calgary, AB</p>
                    <p className="text-light/50 text-xs sm:text-sm mt-1">Serving Calgary, Airdrie, Crossfield, Chestermere, Okotoks, and Cochrane</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 md:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm sm:text-base md:text-xl mb-1">Business Hours</h3>
                    <p className="text-light/70 text-sm md:text-base">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-light/70 text-sm md:text-base">Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
