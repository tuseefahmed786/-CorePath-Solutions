import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-20 right-0 w-64 bg-card rounded-2xl shadow-2xl border border-border p-6 mb-2"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 p-1 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <h3 className="font-semibold mb-3">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get in touch with our team for a free consultation.
                </p>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Contact Us
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
