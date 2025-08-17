import React from 'react';

const Navigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="bg-black/20 backdrop-blur-sm rounded-full p-4 border border-white/20">
        <ul className="flex flex-col space-y-4">
          {[
            { id: 'hero', label: 'Home', icon: '🏠' },
            { id: 'about', label: 'About', icon: '👤' },
            { id: 'skills', label: 'Skills', icon: '⚡' },
            { id: 'experience', label: 'Experience', icon: '💼' },
            { id: 'contact', label: 'Contact', icon: '📧' }
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group"
                title={item.label}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
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
