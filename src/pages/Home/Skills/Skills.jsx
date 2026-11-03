import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    color: '#38bdf8',
    skills: [
      { name: 'React', level: 90, img: 'https://img.icons8.com/?size=64&id=t4YbEbA834uH&format=png' },
      { name: 'JavaScript', level: 85, img: 'https://img.icons8.com/?size=48&id=21278&format=png' },
      { name: 'HTML5', level: 95, img: 'https://img.icons8.com/?size=48&id=20909&format=png' },
      { name: 'Tailwind CSS', level: 88, img: 'https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png' },
      { name: 'CSS3', level: 90, img: 'https://img.icons8.com/?size=48&id=62452&format=png' },
    ],
  },
  {
    title: 'Backend',
    color: '#a855f7',
    skills: [
      { name: 'Node.js', level: 75, img: 'https://i.ibb.co.com/gHx5TQ5/1-bq-E19-D6-Wk2-Vp-VIEb-Njkyv-A.png' },
      { name: 'Express.js', level: 72, img: 'https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png' },
      { name: 'MongoDB', level: 78, img: 'https://img.icons8.com/?size=48&id=rHpveptSuwDz&format=png' },
      { name: 'Firebase', level: 80, img: 'https://i.ibb.co.com/7NVt1VRh/images.png' },
    ],
  },
  {
    title: 'Tools',
    color: '#34d399',
    skills: [
      { name: 'Git', level: 82, img: 'https://img.icons8.com/?size=50&id=12599&format=png' },
      { name: 'VS Code', level: 90, img: 'https://i.ibb.co.com/LhtW4bQF/download-4.jpg' },
      { name: 'Figma', level: 65, img: 'https://img.icons8.com/?size=50&id=38389&format=png' },
      { name: 'Vercel', level: 80, img: 'https://img.icons8.com/?size=48&id=8gWOBXY72Osj&format=png' },
    ],
  },
];

const marqueeItems = [
  { img: 'https://img.icons8.com/?size=64&id=t4YbEbA834uH&format=png', name: 'React' },
  { img: 'https://img.icons8.com/?size=48&id=21278&format=png', name: 'JavaScript' },
  { img: 'https://img.icons8.com/?size=48&id=20909&format=png', name: 'HTML5' },
  { img: 'https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png', name: 'Tailwind' },
  { img: 'https://i.ibb.co.com/gHx5TQ5/1-bq-E19-D6-Wk2-Vp-VIEb-Njkyv-A.png', name: 'Node.js' },
  { img: 'https://img.icons8.com/?size=48&id=rHpveptSuwDz&format=png', name: 'MongoDB' },
  { img: 'https://i.ibb.co.com/7NVt1VRh/images.png', name: 'Firebase' },
  { img: 'https://img.icons8.com/?size=50&id=12599&format=png', name: 'Git' },
  { img: 'https://img.icons8.com/?size=48&id=62452&format=png', name: 'CSS3' },
  { img: 'https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png', name: 'Express' },
];

const Skills = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden" id="skills">
      {/* bg decorations */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sky-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">What I Know</p>
          <h2 className="section-title">
            My{' '}
            <Typewriter
              words={['Skills', 'Expertise', 'Tech Stack']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded mx-auto mt-3" />
          <p className="section-subtitle mt-4">
            Dedicated developer crafting efficient and visually stunning web experiences
          </p>
        </div>

        {/* Skill groups with progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              className="glow-card p-5 sm:p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.15, duration: 0.6 }}
            >
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 flex items-center gap-2" style={{ color: group.color }}>
                <span className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                {group.title}
              </h3>
              <div className="space-y-3.5 sm:space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <img src={skill.img} alt={skill.name} className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover" />
                        <span className="text-xs sm:text-sm text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ background: `linear-gradient(90deg, ${group.color}, ${group.color}88)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="glow-card p-4 sm:p-6 overflow-hidden">
          <p className="text-center text-gray-400 text-xs sm:text-sm mb-4 uppercase tracking-widest">Tech I Work With</p>
          <Marquee pauseOnHover speed={50} gradient={false}>
            {marqueeItems.map((item) => (
              <div key={item.name} className="mx-4 sm:mx-6 md:mx-8 flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-sky-400/50 transition-all duration-300 group-hover:scale-110">
                  <img src={item.img} alt={item.name} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                </div>
                <span className="text-[11px] sm:text-xs text-gray-500 group-hover:text-sky-400 transition-colors">{item.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
