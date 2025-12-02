import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const Skills = () => {
    const handleType = (count) => {
        // console.log(`Word typed: ${count}`);
    };
    
      const handleDone = () => {
        // console.log(`Done after 5 loops!`)
      }
    return (
        <div className='my-20'>
            <div>
                <h1 className="text-3xl font-extrabold mb-8 flex justify-center items-center mx-auto">
                My {' '}
                    <span style={{ color: 'indigo', fontWeight: 'bold', paddingLeft: '10px' }}>
                        <Typewriter
                            words={['Qualities!', 'Skills!']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h1>
            </div>
            
            <p className='my-10 w-9/12 mx-auto text-center'>A dedicated developer skilled in React, Tailwind CSS, MongoDB, and dynamic animations, crafting efficient and visually appealing web apps!</p>
            <div>
            <h2 className="text-2xl font-extrabold mb-8 flex justify-center items-center mx-auto">
                Backend Development
            </h2>
            <div className='w-6/12 mx-auto flex gap-2 relative'>
            <motion.div
                                    className="absolute inset-0 -z-10"
                                    animate={{
                                        boxShadow: [
                                            '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB',
                                            '0 0 20px #87CEEB, 0 0 30px #87CEEB, 0 0 40px #87CEEB',
                                            '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB',
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                    }}
                                />
                <Marquee pauseOnHover={true} speed={100}>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://i.ibb.co.com/gHx5TQ5/1-bq-E19-D6-Wk2-Vp-VIEb-Njkyv-A.png" alt="Logo icon!" /></div>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png" alt="Logo icon!" /></div>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://img.icons8.com/?size=48&id=rHpveptSuwDz&format=png" alt="Logo icon!" /></div>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://i.ibb.co.com/7NVt1VRh/images.png" alt="Logo icon!" /></div>
                </Marquee>
                </div>
                <h2 className="mt-5 text-2xl font-extrabold mb-8 flex justify-center items-center mx-auto">
                Frontend Development
            </h2>
            <div className='w-8/12 mx-auto flex gap-2 relative'>
            <motion.div
                                    className="absolute inset-0 -z-10"
                                    animate={{
                                        boxShadow: [
                                            '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB',
                                            '0 0 20px #87CEEB, 0 0 30px #87CEEB, 0 0 40px #87CEEB',
                                            '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB',
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                    }}
                                />
                <Marquee pauseOnHover={true} speed={100}>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://img.icons8.com/?size=64&id=t4YbEbA834uH&format=png" alt="Logo icon!" /></div>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://img.icons8.com/?size=48&id=21278&format=png" alt="Logo icon!" /></div>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://img.icons8.com/?size=48&id=20909&format=png" alt="Logo icon!" /></div>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png" alt="Logo icon!" /></div>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://img.icons8.com/?size=48&id=62452&format=png" alt="Logo icon!" /></div>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://i.ibb.co.com/Mxt4D1wt/download-4.png" alt="Logo icon!" /></div>
                </Marquee>
                </div>
                <h2 className="mt-5 text-2xl font-extrabold mb-8 flex justify-center items-center mx-auto">
                Tools
            </h2>
            <div className='w-4/12 mx-auto flex gap-2 relative'>
            <motion.div
                                    className="absolute inset-0 -z-10"
                                    animate={{
                                        boxShadow: [
                                            '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB',
                                            '0 0 20px #87CEEB, 0 0 30px #87CEEB, 0 0 40px #87CEEB',
                                            '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB',
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                    }}
                                />
                <Marquee pauseOnHover={true} speed={100}>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://img.icons8.com/?size=50&id=12599&format=png" alt="Logo icon!" /></div>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://i.ibb.co.com/LhtW4bQF/download-4.jpg" alt="Logo icon!" /></div>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://img.icons8.com/?size=50&id=38389&format=png" alt="Logo icon!" /></div>
                    <div className='h-[100px] mx-10'><img className='h-full w-full object-cover rounded-full' src="https://img.icons8.com/?size=48&id=8gWOBXY72Osj&format=png" alt="Logo icon!" /></div>
                </Marquee>
                </div>

            </div>
        </div>
    );
};


export default Skills;