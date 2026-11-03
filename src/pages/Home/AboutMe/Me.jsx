import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';

const techBadges = [
  { icon: <FaReact />, label: 'React', color: '#61dafb' },
  { icon: <FaNodeJs />, label: 'Node.js', color: '#68a063' },
  { icon: <SiMongodb />, label: 'MongoDB', color: '#47a248' },
  { icon: <SiTailwindcss />, label: 'Tailwind', color: '#38bdf8' },
  { icon: <SiFirebase />, label: 'Firebase', color: '#ffca28' },
  { icon: <FaGithub />, label: 'GitHub', color: '#ffffff' },
];

export default function Me() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden" id="about-me">
      {/* bg glow */}
      <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div data-aos="fade-up" className="text-center mb-12 sm:mb-16">
          <p className="text-sky-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image side */}
          <motion.div
            className="flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative w-[230px] h-[290px] sm:w-[270px] sm:h-[340px] md:w-[300px] md:h-[380px] my-4 md:my-0">
              {/* Spinning dashed outer ring */}
              <motion.div
                className="absolute rounded-2xl border-2 border-dashed border-sky-400/30 z-0 pointer-events-none"
                style={{ inset: '-10px' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              {/* Counter-spin inner ring */}
              <motion.div
                className="absolute rounded-2xl border border-purple-500/30 z-0 pointer-events-none"
                style={{ inset: '-5px' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              {/* Gradient animated border */}
              <motion.div
                className="absolute rounded-2xl z-0 pointer-events-none"
                style={{ inset: '-2px', background: 'linear-gradient(135deg, #38bdf8, #a855f7, #38bdf8)', backgroundSize: '200% 200%' }}
                animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              {/* Corner glow dots */}
              {[
                { top: '-6px', left: '-6px' },
                { top: '-6px', right: '-6px' },
                { bottom: '-6px', left: '-6px' },
                { bottom: '-6px', right: '-6px' },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-sky-400 z-20 pointer-events-none"
                  style={pos}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}

              {/* Glow pulse */}
              <motion.div
                className="absolute inset-0 rounded-2xl z-0 pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 25px #38bdf850, 0 0 50px #a855f730',
                    '0 0 50px #38bdf870, 0 0 75px #a855f750',
                    '0 0 25px #38bdf850, 0 0 50px #a855f730',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />

              {/* Floating image */}
              <motion.img
                src="/Mim.png"
                alt="Salma Akther Mim"
                className="relative z-10 w-full h-full rounded-2xl object-cover object-top shadow-2xl border-2 border-sky-500/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 z-10 rounded-2xl overflow-hidden pointer-events-none"
                style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)', backgroundSize: '200% 100%' }}
                animate={{ backgroundPosition: ['-200% 0', '200% 0'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              {/* Status badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs text-white font-bold flex items-center gap-1.5 sm:gap-2 shadow-lg whitespace-nowrap"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                Available for work
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <div data-aos="fade-left" className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 sm:mb-3">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">Salma Akther Mim</span>
            </h3>
            <p className="text-sky-400 font-semibold mb-4 text-xs sm:text-sm tracking-wide uppercase">
              Front-End Developer
            </p>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
              I'm Salma Akther Mim, a passionate Front-End Developer with expertise in building
              modern, responsive web applications using React, Tailwind CSS, and more.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
              I love turning complex problems into simple, beautiful, and intuitive designs —
              always striving to deliver clean code and pixel-perfect UI in every project.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
              {[
                { label: 'Name', value: 'Salma Akther Mim' },
                { label: 'Location', value: 'Dhaka, Bangladesh' },
                { label: 'Email', value: 'salmaakthermim112@gmail.com' },
                { label: 'Status', value: 'Open to Work ✅' },
              ].map((info) => (
                <div key={info.label} className="glow-card p-3">
                  <p className="text-xs text-sky-400 uppercase tracking-wider">{info.label}</p>
                  <p className="text-white text-sm font-medium mt-1 break-all sm:break-normal truncate">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {techBadges.map((t) => (
                <span
                  key={t.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 bg-white/5 text-white"
                  style={{ color: t.color, borderColor: `${t.color}40` }}
                >
                  {t.icon} {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
