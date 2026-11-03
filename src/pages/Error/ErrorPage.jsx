import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#050d1a] flex items-center justify-center px-6 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600 leading-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">Page Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-sm mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="btn-gradient px-8 py-3 text-sm inline-block"
          >
            ← Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
