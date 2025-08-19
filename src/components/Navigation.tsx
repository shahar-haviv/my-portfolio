import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close navigation after clicking
    }
  };

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      {/* Toggle Button */}
      <button
        onClick={toggleNavigation}
        className="bg-black/20 backdrop-blur-sm rounded-full p-3 border border-white/20 text-white hover:bg-black/40 transition-colors duration-300 mb-4"
        aria-label="Toggle navigation"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation Menu */}
      <div className={`bg-black/20 backdrop-blur-sm rounded-full p-4 border border-white/20 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <ul className="flex flex-col space-y-4">
          {[
            { id: 'hero', label: 'Home', icon: '🏠' },
            { id: 'about', label: 'About', icon: '👤' },
            { id: 'experience', label: 'Experience', icon: '💼' },
            { id: 'tech-stack', label: 'Tech', icon: '⚡' },
            { id: 'contact', label: 'Contact', icon: '📧' }
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="flex items-center justify-center w-12 h-12 text-white/80 hover:text-white transition-colors duration-300 group relative"
                title={item.label}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
