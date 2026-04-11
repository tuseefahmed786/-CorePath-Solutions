import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
  }, [location]);

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
    { name: 'Cybersecurity', path: '/services/cybersecurity' },
    { name: 'AI & Data Solutions', path: '/services/ai-data-solutions' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CorePath Solutions
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
                  >
                    {services.map((service, i) => (
                      <Link
                        key={i}
                        to={service.path}
                        className="block px-4 py-3 hover:bg-muted transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link to="/industries" className="text-foreground hover:text-primary transition-colors">
              Industries
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="px-4 py-4 space-y-4">
              <Link to="/" className="block py-2 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block py-2 hover:text-primary transition-colors">
                About
              </Link>
              <div>
                <button
                  onClick={() => setShowServices(!showServices)}
                  className="flex items-center justify-between w-full py-2 hover:text-primary transition-colors"
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${showServices ? 'rotate-180' : ''}`} />
                </button>
                {showServices && (
                  <div className="pl-4 space-y-2 mt-2">
                    {services.map((service, i) => (
                      <Link
                        key={i}
                        to={service.path}
                        className="block py-2 text-sm hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/portfolio" className="block py-2 hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/industries" className="block py-2 hover:text-primary transition-colors">
                Industries
              </Link>
              <Link to="/blog" className="block py-2 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block py-2 hover:text-primary transition-colors">
                Contact
              </Link>
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
