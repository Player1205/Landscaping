import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, Clock, MapPin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import heroImg from '../assets/hero_bg.png';
import ownerImg from '../assets/real_owner.png';
import mowingImg from '../assets/service_lawn_mowing.png';
import residentialCleaningImg from '../assets/residential_cleaning.png';
import snowYardImg from '../assets/snow_yard.png';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '../context/QuoteModalContext';

const Home: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const miniServices = [
    { title: 'Lawn Mowing', img: mowingImg, desc: 'Professional cutting and precise edge-trimming.' },
    { title: 'Residential Cleaning', img: residentialCleaningImg, desc: 'Thorough cleaning for houses and apartments.' },
    { title: 'Snow Transitions', img: snowYardImg, desc: 'Seasonal property care for spring, fall, and winter.' }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[75vh] sm:h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Beautiful Landscaping Hero" className="w-full h-full object-cover scale-105 animate-slow-pan" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary/80" />
        </div>
        <div className="relative z-10 text-center px-6 sm:px-8 md:px-4 max-w-4xl mx-auto mt-10 sm:mt-16 md:mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-7xl font-bold text-light mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-xl"
          >
            Crafting the Perfect <span className="text-accent italic">Outdoor</span> Oasis
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm sm:text-base md:text-2xl text-light/80 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto drop-shadow-md font-light"
          >
            Premium landscaping services in Calgary and surrounding areas. We bring your vision to life.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          >
              <button onClick={openQuoteModal} className="bg-accent text-dark font-bold text-sm px-5 py-2.5 sm:text-base sm:px-6 sm:py-3 md:text-lg md:px-8 md:py-4 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,176,133,0.5)] transition-all duration-300">
                Get a Free Quote
              </button>
            <Link to="/services">
              <button className="bg-light/10 backdrop-blur-md border border-light/30 text-light font-semibold text-sm px-5 py-2.5 sm:text-base sm:px-6 sm:py-3 md:text-lg md:px-8 md:py-4 rounded-full hover:bg-light/20 transition-all duration-300 flex items-center justify-center gap-2">
                Our Services <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary py-4 md:py-8 shadow-xl relative z-20 -mt-8 rounded-t-3xl mx-0 md:mx-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-16 text-light text-center">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-accent flex-shrink-0" size={24} />
            <span className="font-semibold text-xs sm:text-sm md:text-lg">Professional Lawn Care Since 2015</span>
          </div>
          <div className="flex items-center gap-3">
            <Leaf className="text-accent flex-shrink-0" size={24} />
            <span className="font-semibold text-xs sm:text-sm md:text-lg">Eco-Friendly Solutions</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-accent flex-shrink-0" size={24} />
            <span className="font-semibold text-xs sm:text-sm md:text-lg">Reliable & Timely</span>
          </div>
        </div>
      </section>

      {/* About the Owner */}
      <section className="py-10 md:py-24 bg-light px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <AnimatedSection direction="right" className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent/30 rounded-3xl blur-xl opacity-50"></div>
            <img 
              src={ownerImg} 
              alt="ECONEST Owner" 
              className="relative z-10 rounded-3xl shadow-2xl object-cover object-top w-full h-[220px] sm:h-[320px] md:h-[500px]"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-accent p-3 md:p-6 rounded-2xl shadow-xl z-20 right-4 sm:-right-6">
              <p className="font-bold text-base md:text-2xl text-primary">8+ Years</p>
              <p className="text-primary/70 font-medium text-xs md:text-base">Of Local Experience</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left" className="order-1 md:order-2">
            <h2 className="text-primary font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">About The Owner</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-dark mb-3 sm:mb-4 md:mb-6 leading-tight">
              Passionate About Every Detail.
            </h3>
            <p className="text-primary/70 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              Hello! I'm the founder of ECONEST CLEANING & LAWN CRAFT. Since 2015, my team and I have been dedicated to transforming ordinary yards into extraordinary outdoor living spaces across the Calgary region. 
            </p>
            <p className="text-primary/70 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              We believe in quality over quantity. Whether it's a complete landscape redesign or routine maintenance, we bring the same level of precision, care, and passion to every single project. Your trust is our foundation.
            </p>
            <Link to="/about">
              <button className="text-primary font-bold border-b-2 border-accent pb-1 hover:text-secondary transition-colors inline-flex items-center gap-2">
                Read Our Full Story <ArrowRight size={18} />
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Area Banner */}
      <section className="py-10 md:py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]"></div>
        <AnimatedSection className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <MapPin size={28} className="text-accent mx-auto mb-4 md:mb-6 md:w-12 md:h-12 w-7 h-7" />
          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-light mb-4 md:mb-6">Proudly Serving Your Community</h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs sm:text-sm md:text-xl text-light/90 font-medium">
            <span className="bg-light/10 px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full backdrop-blur-sm">Calgary</span>
            <span className="bg-light/10 px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full backdrop-blur-sm">Airdrie</span>
            <span className="bg-light/10 px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full backdrop-blur-sm">Crossfield</span>
            <span className="bg-light/10 px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full backdrop-blur-sm">Chestermere</span>
            <span className="bg-light/10 px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full backdrop-blur-sm">Okotoks</span>
            <span className="bg-light/10 px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full backdrop-blur-sm">Cochrane</span>
          </div>
        </AnimatedSection>
      </section>

      {/* Mini Services Grid */}
      <section className="py-10 md:py-24 bg-light px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-primary font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">Our Expertise</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-dark">Premium Services</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {miniServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="group relative bg-accent/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent/50">
                  <div className="h-36 md:h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5 md:p-8 relative bg-accent/30 transform group-hover:-translate-y-4 transition-transform duration-500 rounded-t-3xl -mt-4 z-20">
                    <h4 className="text-lg md:text-2xl font-bold text-primary mb-3">{service.title}</h4>
                    <p className="text-primary/70 mb-3 md:mb-6">{service.desc}</p>
                    <Link to="/services" className="inline-flex items-center text-accent font-semibold group-hover:text-primary transition-colors">
                      Learn More <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12">
            <Link to="/services">
              <button className="bg-primary text-light font-bold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
