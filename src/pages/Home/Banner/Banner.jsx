import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const count = 120;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6,
        color: `hsl(${Math.random() * 60 + 190}, 100%, 70%)`,
      });
    }

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      // draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(100, 200, 255, ${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050d1a]">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Radial glow bg */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500 opacity-10 blur-[120px]" />
        <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-600 opacity-10 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-6 max-w-6xl mx-auto w-full">

        {/* Left text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sky-400 font-semibold tracking-widest text-sm uppercase mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            👋 Welcome to my portfolio
          </motion.p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
              Salma Akther Mim
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-bold mt-4 text-gray-300">
            <Typewriter
              words={['Front-End Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-5 text-gray-400 max-w-md leading-relaxed">
            I'm Salma Akther Mim — a passionate Front-End Developer who crafts beautiful,
            responsive web experiences with React, Tailwind CSS & modern animations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="https://drive.google.com/file/d/1QwBDxYmxG-LZRr8oy7w6khI58Wtust_K/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-sky-500 to-purple-600 shadow-lg shadow-sky-500/30 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              📄 Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-full font-bold text-sky-400 border-2 border-sky-400 hover:bg-sky-400 hover:text-white transition-all"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              🚀 View Projects
            </motion.a>
          </div>

          {/* Stats */}
          <motion.div
            className="mt-10 flex gap-8 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Technologies', value: '12+' },
              { label: 'Experience', value: '1+ yr' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-sky-400">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {/* Outer rotating gradient ring */}
          <motion.div
            className="absolute rounded-2xl z-0"
            style={{
              inset: '-4px',
              background: 'linear-gradient(135deg, #38bdf8, #a855f7, #38bdf8)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
              rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Spinning dashed border */}
          <motion.div
            className="absolute rounded-2xl border-2 border-dashed border-sky-400/30 z-0"
            style={{ inset: '-14px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />

          {/* Corner glow dots */}
          {[
            { top: '-8px', left: '-8px' },
            { top: '-8px', right: '-8px' },
            { bottom: '-8px', left: '-8px' },
            { bottom: '-8px', right: '-8px' },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-sky-400 z-20"
              style={pos}
              animate={{ scale: [1, 1.6, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}

          {/* Glow behind */}
          <motion.div
            className="absolute inset-0 rounded-2xl z-0"
            animate={{
              boxShadow: [
                '0 0 30px #38bdf850, 0 0 60px #a855f730',
                '0 0 50px #38bdf870, 0 0 80px #a855f750',
                '0 0 30px #38bdf850, 0 0 60px #a855f730',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* Floating image */}
          <motion.img
            src="/Mim.png"
            alt="Salma Akther Mim"
            className="relative z-10 rounded-2xl object-cover object-top border-2 border-sky-500/40 shadow-2xl"
            style={{ width: '300px', height: '380px' }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Shimmer overlay */}
          <motion.div
            className="absolute inset-0 z-10 rounded-2xl overflow-hidden pointer-events-none"
            style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)' }}
            animate={{ backgroundPosition: ['-200% 0', '200% 0'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          {/* Top badge */}
          <motion.div
            className="absolute -top-4 left-4 z-20 bg-[#0a1628] border border-sky-500/50 rounded-full px-3 py-1.5 text-xs text-white flex items-center gap-2 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, -4, 0] }}
            transition={{ opacity: { delay: 1 }, y: { duration: 3, repeat: Infinity } }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </motion.div>

          {/* Bottom badge */}
          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-sky-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -5, 0] }}
            transition={{ opacity: { delay: 1.2 }, y: { duration: 3.5, repeat: Infinity } }}
          >
            💻 Front-End Developer
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gray-400 text-xs"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll Down</span>
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Banner;
