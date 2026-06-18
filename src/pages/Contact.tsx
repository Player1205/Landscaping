import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {

  return (
    <div className="pt-24 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">Get in Touch</h1>
            <p className="text-xl text-primary/70 max-w-2xl mx-auto font-light">
              Ready to transform your outdoor space? Contact us today for a free estimate.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] shadow-2xl overflow-hidden border border-secondary">
          
          {/* Contact Info */}
          <AnimatedSection className="text-light p-10 md:p-16 relative overflow-hidden text-center flex flex-col items-center">
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-50"></div>
            <div className="absolute top-12 -right-12 w-48 h-48 bg-accent rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10 w-full max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <p className="text-light/70 mb-12 text-lg">
                Reach out to us through any of the channels below. We look forward to hearing from you!
              </p>

              <div className="space-y-8 flex flex-col items-center text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Phone</h3>
                    <p className="text-light/70">+1 (403) 354-4856</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Email</h3>
                    <p className="text-light/70">info@econestcleaning.com</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Location</h3>
                    <p className="text-light/70">Cityscape Drive, NE, Calgary, AB</p>
                    <p className="text-light/50 text-sm mt-1">Serving Calgary, Airdrie, Crossfield, Chestermere, Okotoks, and Cochrane</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Business Hours</h3>
                    <p className="text-light/70">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-light/70">Saturday: 9:00 AM - 4:00 PM</p>
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
