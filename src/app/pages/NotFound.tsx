import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="text-9xl font-bold mb-4"
          >
            404
          </motion.h1>
          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl opacity-90 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
