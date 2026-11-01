import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

const DetailsProject = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/project_details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050d1a] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-sky-500/30 border-t-sky-500 rounded-full animate-spin" />
          <p className="text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050d1a] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">Project not found.</p>
          <Link to="/" className="btn-gradient px-6 py-3 text-sm">Go Home</Link>
        </div>
      </div>
    );
  }

  const { project_name, project_image, main_technology_stack, description, live_project_link, github_repository_link } = data;

  return (
    <div className="min-h-screen bg-[#050d1a] py-12 px-6 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors text-sm mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            {project_name}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded" />
        </motion.div>

        {/* Image */}
        <motion.div
          className="glow-card overflow-hidden mb-8"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src={project_image}
            alt={project_name}
            className="w-full h-64 md:h-80 object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Description */}
          <motion.div
            className="glow-card p-6 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg font-bold text-sky-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" /> About This Project
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">{description}</p>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-6">
              {live_project_link && (
                <a
                  href={live_project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 btn-gradient px-5 py-2.5 text-sm"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
              )}
              {github_repository_link && (
                <a
                  href={github_repository_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-gray-300 hover:border-sky-400/50 hover:text-sky-400 transition-all text-sm font-semibold"
                >
                  <FaGithub size={14} /> View Code
                </a>
              )}
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            className="glow-card p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" /> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(main_technology_stack) && main_technology_stack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-500/20 text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProject;
