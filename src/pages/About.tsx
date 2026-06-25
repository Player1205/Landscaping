import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Target, Users, Award, ShieldCheck } from 'lucide-react';
import ownerImg from '../assets/real_owner.png';

const About: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-20 bg-light min-h-screen">
      {/* Header */}
      <section className="py-10 md:py-20 bg-primary text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iIzIyMiIvPjwvc3ZnPg==')] opacity-10"></div>
        <AnimatedSection>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-light mb-3 sm:mb-4 md:mb-6">About ECONEST CLEANING & LAWN CRAFT</h1>
          <p className="text-sm sm:text-base md:text-xl text-light/70 max-w-2xl mx-auto font-light">
            Dedicated to cultivating beautiful, sustainable outdoor spaces in Calgary since 2015.
          </p>
        </AnimatedSection>
      </section>

      {/* Story Section */}
      <section className="py-10 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <AnimatedSection direction="right" className="order-2 md:order-1">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-primary font-bold text-sm tracking-widest uppercase">Our Story</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark leading-tight">Rooted in Passion. Growing through Trust.</h3>
              <p className="text-primary/70 text-sm sm:text-base md:text-lg leading-relaxed">
                Founded in 2015, ECONEST CLEANING & LAWN CRAFT began with a simple mission: to provide a level of landscape care that goes beyond just cutting grass. We wanted to elevate outdoor spaces into functional, beautiful retreats for families and businesses.
              </p>
              <p className="text-primary/70 text-sm sm:text-base md:text-lg leading-relaxed">
                Over the years, we've expanded our services from basic maintenance to comprehensive landscape design and installation, but our core philosophy remains unchanged. We treat every property as if it were our own, utilizing the best tools, eco-friendly practices, and a team that genuinely cares about the details.
              </p>
              <div className="pt-2 md:pt-4 flex items-center gap-4">
                <div className="w-12 md:w-16 h-1 bg-accent rounded-full flex-shrink-0"></div>
                <p className="font-bold text-primary italic text-xs sm:text-sm md:text-base">"Quality is never an accident; it is always the result of high intention."</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left" className="relative order-1 md:order-2">
             <div className="absolute inset-0 bg-primary transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 rounded-3xl -z-10"></div>
             <img src={ownerImg} alt="ECONEST Team" className="rounded-3xl shadow-2xl object-cover object-top w-full h-[220px] sm:h-[320px] md:h-[600px] border-4 border-accent" />
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 md:py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark">Our Core Values</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-accent/30 p-5 sm:p-6 md:p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300 border border-accent/50 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/40 flex items-center justify-center rounded-full mx-auto mb-3 md:mb-6 text-primary">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">Reliability</h4>
                <p className="text-primary/70 text-sm md:text-base">We show up on time, every time. You can count on our consistent schedules and dependable service.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-accent/30 p-5 sm:p-6 md:p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300 border border-accent/50 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-3 md:mb-6 text-primary">
                  <Target size={24} />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">Precision</h4>
                <p className="text-primary/70 text-sm md:text-base">From perfectly straight mowing lines to meticulous planting, our attention to detail is unmatched.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-accent/30 p-5 sm:p-6 md:p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300 border border-accent/50 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/20 flex items-center justify-center rounded-full mx-auto mb-3 md:mb-6 text-secondary">
                  <Users size={24} />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">Community</h4>
                <p className="text-primary/70 text-sm md:text-base">We are locally owned and proud to serve Calgary, Airdrie, Chestermere, and surrounding areas.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-accent/30 p-5 sm:p-6 md:p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300 border border-accent/50 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/40 flex items-center justify-center rounded-full mx-auto mb-3 md:mb-6 text-primary">
                  <Award size={24} />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">Excellence</h4>
                <p className="text-primary/70 text-sm md:text-base">Using top-tier equipment and best practices, we ensure your landscape thrives year-round.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
