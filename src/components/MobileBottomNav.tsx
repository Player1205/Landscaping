import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Users, Phone } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Services', path: '/services', icon: Briefcase },
  { name: 'About', path: '/about', icon: Users },
  { name: 'Contact', path: '/contact', icon: Phone },
];

const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-lg border-t border-accent/20 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex justify-around items-center h-14 px-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-accent'
                  : 'text-light/50 active:text-light/80'
              }`}
            >
              <div className={`relative flex items-center justify-center transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                {isActive && (
                  <div className="absolute inset-0 -m-1.5 bg-accent/15 rounded-full blur-sm" />
                )}
                <Icon size={18} strokeWidth={isActive ? 2.5 : 1.8} className="relative z-10" />
              </div>
              <span className={`text-[0.6rem] leading-none font-medium ${isActive ? 'font-semibold' : ''}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
      {/* Safe area spacer for phones with home indicator */}
      <div className="h-[env(safe-area-inset-bottom,0px)] bg-primary/95" />
    </nav>
  );
};

export default MobileBottomNav;
