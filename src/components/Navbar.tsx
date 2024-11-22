import { useState, useEffect } from 'react';
import { Menu, X, Code2, Home, Briefcase, Brain, Mail, Moon, Sun } from 'lucide-react';

// Define the type for Navbar props
interface NavbarProps {
  toggleDarkMode: () => void; // The function to toggle dark mode
  isDarkMode: boolean; // The current dark mode state
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === 'home') {
        window.dispatchEvent(new Event('navigateToHome'));
      } else {
        // Dispatch a custom event for section navigation
        window.dispatchEvent(new CustomEvent('navigateToSection', { 
          detail: { section: id } 
        }));
      }
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without jumping
      window.history.pushState({}, '', `#${id}`);
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <a href="#home">
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                MbengueDev
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { icon: Home, text: 'Accueil', id: 'home' },
                { icon: Briefcase, text: 'Projets', id: 'projects' },
                { icon: Brain, text: 'Compétences', id: 'skills' },
                { icon: Mail, text: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                >
                  <item.icon className="h-4 w-4 mr-1" />
                  {item.text}
                </button>
              ))}
            </div>
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg">
          {[
            { icon: Home, text: 'Accueil', id: 'home' },
            { icon: Briefcase, text: 'Projets', id: 'projects' },
            { icon: Brain, text: 'Compétences', id: 'skills' },
            { icon: Mail, text: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              <item.icon className="h-4 w-4 mr-2" />
              {item.text}
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="space-y-1 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
