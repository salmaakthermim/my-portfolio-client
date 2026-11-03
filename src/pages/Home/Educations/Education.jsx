import React from 'react';
import { motion } from 'framer-motion';

const educations = [
  {
    degree: 'Bachelor of Business Administration (Management)',
    institution: 'Moulvibazar Government College, Moulvibazar',
    passed: '2024',
    result: 'CGPA: 3.02',
    logo: 'https://i.ibb.co.com/4wBdzmKd/download-3.jpg',
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: "Moulvibazar Govt. Women's College, Moulvibazar",
    passed: '2018',
    result: 'GPA: 4.08',
    logo: 'https://i.ibb.co.com/wZckNDzx/download-2.jpg',
    icon: '📚',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Hafiza Khatun Girls High School, Moulvibazar',
    passed: '2016',
    result: 'GPA: 4.39',
    logo: 'https://i.ibb.co.com/rKHtMH6B/59.jpg',
    icon: '🏫',
  },
];

const Education = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden" id="education">
      {/* bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-64 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sky-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">My Journey</p>
          <h2 className="section-title">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded mx-auto mt-3" />
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10 timeline-line space-y-6 sm:space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[1.95rem] sm:-left-[2.85rem] top-5 w-5 h-5 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 border-4 border-[#050d1a] z-10 flex items-center justify-center">
                <span className="text-[8px]">{edu.icon}</span>
              </div>

              <div className="glow-card p-4 sm:p-6 hover:border-sky-400/40">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  {/* Logo */}
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border border-white/10 flex-shrink-0"
                  />
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <h3 className="text-white font-bold text-base sm:text-lg leading-tight">{edu.degree}</h3>
                        <p className="text-sky-400 text-xs sm:text-sm mt-1">{edu.institution}</p>
                      </div>
                      <div className="sm:text-right flex-shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-2 mt-2 sm:mt-0">
                        <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[11px] sm:text-xs font-semibold">
                          Passed: {edu.passed}
                        </span>
                        <p className="text-purple-400 text-xs sm:text-sm font-bold">{edu.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
