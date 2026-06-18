import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="bg-accent/10 p-4 rounded-xl inline-block mb-4">
              <Logo className="text-light" />
            </div>
            <p className="text-light/60 text-sm mt-4">
              Professional Lawn Care Since 2015. We bring life, beauty, and health back to your outdoor spaces.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-light/60 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-light/60 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-light/60 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-light/60 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Services</h3>
            <ul className="space-y-2">
              <li className="text-light/60 hover:text-accent transition-colors cursor-pointer">Landscape Design</li>
              <li className="text-light/60 hover:text-accent transition-colors cursor-pointer">Lawn Mowing</li>
              <li className="text-light/60 hover:text-accent transition-colors cursor-pointer">Plant Installation</li>
              <li className="text-light/60 hover:text-accent transition-colors cursor-pointer">Irrigation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Info</h3>
            <ul className="space-y-3 text-light/60 text-sm">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Phone:</span> +1 (403) 354-4856
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Email:</span> info@econestcleaning.com
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Address:</span> Cityscape Drive, NE, Calgary, AB
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-light/50">
          <p>&copy; {new Date().getFullYear()} ECONEST CLEANING & LAWN CRAFT. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
