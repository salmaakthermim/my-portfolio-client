import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const API_BASE = 'https://my-portfolio-server-umber.vercel.app';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/projects`)
      .then(res => res.json())
      .then(data => {
        setProjects(data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Remote fetch error, trying local fallback:', err);
        fetch('http://localhost:5000/projects')
          .then(res => res.json())
          .then(data => setProjects(data || []))
          .catch(() => {})
          .finally(() => setLoading(false));
      });
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden" id="projects">
      {/* bg decorations */}
      <div className="absolute top-20 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sky-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded mx-auto mt-3" />
          <p className="section-subtitle mt-4">
            Explore my latest projects — built with passion and modern tech
          </p>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="glow-card overflow-hidden animate-pulse">
                <div className="h-44 sm:h-48 bg-white/5" />
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="h-4 bg-white/5 rounded w-3/4" />
                  <div className="h-3 bg-white/5 rounded w-full" />
                  <div className="h-8 bg-white/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Array.isArray(projects) && projects.map((project, index) => (
              <motion.div
                key={project?._id}
                className="glow-card overflow-hidden group flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project?.project_image}
                    alt={project?.project_name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Tech tags */}
                  {project?.main_technology_stack && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {project.main_technology_stack.slice(0, 2).map((tech, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/80 text-white font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {project?.project_name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {project?.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Link
                      to={`project_details/${project._id}`}
                      className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-sky-500 to-purple-600 text-white text-sm font-bold hover:opacity-90 transition-opacity"
                    >
                      View Details
                    </Link>
                    {project?.live_project_link && (
                      <a
                        href={project.live_project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-sky-400 hover:border-sky-400/50 transition-all"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                    {project?.github_repository_link && (
                      <a
                        href={project.github_repository_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-sky-400 hover:border-sky-400/50 transition-all"
                        title="GitHub"
                      >
                        <FaGithub size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
