import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-light pt-8 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-6 md:mb-12 text-center sm:text-left">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center sm:items-start">
            <div className="bg-accent/10 p-3 md:p-4 rounded-xl inline-block mb-4">
              <Logo className="text-light" />
            </div>
            <p className="text-light/60 text-xs sm:text-sm mt-1 sm:mt-2 md:mt-4 max-w-xs sm:max-w-none">
              Professional Lawn Care Since 2015. We bring life, beauty, and health back to your outdoor spaces.
            </p>
          </div>
          
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="text-sm"><Link to="/" className="text-light/60 hover:text-accent transition-colors">Home</Link></li>
              <li className="text-sm"><Link to="/about" className="text-light/60 hover:text-accent transition-colors">About Us</Link></li>
              <li className="text-sm"><Link to="/services" className="text-light/60 hover:text-accent transition-colors">Services</Link></li>
              <li className="text-sm"><Link to="/contact" className="text-light/60 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 text-accent">Services</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="text-sm"><Link to="/services" className="text-light/60 hover:text-accent transition-colors">Lawn Mowing & Edging</Link></li>
              <li className="text-sm"><Link to="/services" className="text-light/60 hover:text-accent transition-colors">Yard & Snow Cleanup</Link></li>
              <li className="text-sm"><Link to="/services" className="text-light/60 hover:text-accent transition-colors">Residential Cleaning</Link></li>
              <li className="text-sm"><Link to="/services" className="text-light/60 hover:text-accent transition-colors">Commercial Cleaning</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 text-accent">Contact Info</h3>
            <ul className="space-y-2 sm:space-y-3 text-light/60 text-xs sm:text-sm flex flex-col items-center sm:items-start">
              <li className="flex flex-col sm:flex-row items-center sm:items-start">
                <span className="font-semibold sm:mr-2 mb-1 sm:mb-0">Phone:</span> +1 (403) 354-4856
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start">
                <span className="font-semibold sm:mr-2 mb-1 sm:mb-0">Email:</span> 
                <a href="mailto:econestcleaninglawncraft@gmail.com?subject=Free%20Quote%20Request&body=Hi!%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20my%20property." className="hover:text-accent transition-colors">econestcleaninglawncraft@gmail.com</a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <span className="font-semibold sm:mr-2 mb-1 sm:mb-0">Address:</span> Cityscape Drive, NE, Calgary, AB
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent/20 pt-4 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-light/50 text-center md:text-left">
          <p className="mb-3 md:mb-0">&copy; {new Date().getFullYear()} ECONEST CLEANING & LAWN CRAFT. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 items-center">
            <span className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
