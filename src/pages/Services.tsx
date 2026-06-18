import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

import lawnMowingImg from '../assets/service_lawn_mowing.png';
import hedgeTrimmingImg from '../assets/hedge_trimming.png';
import weedControlImg from '../assets/weed_control.png';
import yardCleanupImg from '../assets/yard_cleanup.png';
import snowYardImg from '../assets/snow_yard.png';

import residentialCleaningImg from '../assets/residential_cleaning.png';
import commercialCleaningImg from '../assets/commercial_cleaning.png';
import moveInCleaningImg from '../assets/move_in_cleaning.png';
import deepCleaningImg from '../assets/deep_cleaning.png';

const lawnServices = [
  { img: lawnMowingImg, title: 'Lawn Mowing & Edging', desc: 'Professional cutting and precise edge-trimming for a perfect finish.' },
  { img: hedgeTrimmingImg, title: 'Hedge Trimming', desc: 'Expert shaping and pruning to keep your hedges healthy and neat.' },
  { img: weedControlImg, title: 'Weed Control', desc: 'Targeted treatments to eliminate weeds and protect your lawn.' },
  { img: yardCleanupImg, title: 'Spring/Fall Yard Cleanup', desc: 'Comprehensive debris removal and seasonal preparation.' },
  { img: snowYardImg, title: 'Snow + Seasonal Transitions', desc: 'Seamless management of your property as seasons change.' },
];

const cleaningServices = [
  { img: residentialCleaningImg, title: 'Residential Cleaning', desc: 'Thorough cleaning for houses and apartments, tailored to your needs.' },
  { img: commercialCleaningImg, title: 'Commercial Cleaning', desc: 'Reliable cleaning services for offices, shops, and workspaces.' },
  { img: moveInCleaningImg, title: 'Move-in / Move-out Cleaning', desc: 'Deep cleaning to ensure a fresh start in your new space.' },
  { img: deepCleaningImg, title: 'Deep Cleaning & Add-ons', desc: 'Intensive cleaning targeting buildup, with optional add-ons like windows, ovens, and carpets.' },
];

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-light min-h-screen">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6">Our Services</h1>
          <p className="text-xl text-primary/70 max-w-2xl mx-auto font-light">
            Comprehensive solutions for both your outdoor landscapes and indoor spaces.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <AnimatedSection>
          <h2 className="text-4xl font-extrabold text-dark mb-10 text-center">Lawn & Yard Services</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawnServices.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group relative bg-accent/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent/50 flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 relative bg-accent/30 flex-grow rounded-t-3xl -mt-4 z-20 flex flex-col">
                  <h4 className="text-2xl font-bold text-primary mb-3">{service.title}</h4>
                  <p className="text-primary/70 flex-grow">{service.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-24">
        <AnimatedSection>
          <h2 className="text-4xl font-extrabold text-dark mb-10 text-center">Cleaning Services</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cleaningServices.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group relative bg-accent/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent/50 flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 relative bg-accent/30 flex-grow rounded-t-3xl -mt-4 z-20 flex flex-col">
                  <h4 className="text-2xl font-bold text-primary mb-3">{service.title}</h4>
                  <p className="text-primary/70 flex-grow">{service.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact">
            <button className="bg-primary text-light font-bold px-10 py-4 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300">
              Request a Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
