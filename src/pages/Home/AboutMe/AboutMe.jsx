import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Crafting beautiful, intuitive interfaces with attention to detail and pixel-perfect implementation.',
    color: '#38bdf8',
  },
  {
    icon: '⚛️',
    title: 'React Development',
    desc: 'Building fast, scalable front-end applications with React and modern state management.',
    color: '#a855f7',
  },
  {
    icon: '🛠️',
    title: 'Full Stack Solutions',
    desc: 'End-to-end development with Node.js, Express, and MongoDB for robust backend systems.',
    color: '#34d399',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    desc: 'Ensuring flawless experience across all devices with mobile-first design principles.',
    color: '#f59e0b',
  },
];

const AboutMe = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden" id="services">
      {/* bg decorations */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sky-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">What I Offer</p>
          <h2 className="section-title">My Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded mx-auto mt-3" />
          <p className="section-subtitle mt-4">
            I help businesses and individuals build their digital presence
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="glow-card p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className="text-2xl sm:text-3xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
              >
                {s.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{s.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey */}
        <motion.div
          className="glow-card p-5 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-sky-400">💡</span> My Programming Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
                I started my programming journey with a passion for solving problems and creating dynamic web applications.
                Over time, I honed my skills in React, Node.js, and MongoDB to build scalable, user-friendly projects.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                I particularly enjoy building interactive features and optimizing performance in web apps,
                always striving to deliver clean, maintainable code.
              </p>
            </div>
            <div className="space-y-3.5 sm:space-y-4">
              {[
                { skill: 'Problem Solving', val: 85 },
                { skill: 'Clean Code', val: 88 },
                { skill: 'Team Collaboration', val: 90 },
                { skill: 'Continuous Learning', val: 95 },
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{item.skill}</span>
                    <span className="text-sky-400">{item.val}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
