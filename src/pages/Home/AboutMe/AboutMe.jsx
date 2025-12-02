import React from 'react';
import { motion } from 'framer-motion';
import { Novatrix } from "uvcanvas"

const AboutMe = () => {
    return (
        <div className="p-6 w-11/12 mx-auto shadow-lg rounded-lg relative mb-10 text-black" id="about-me">
            <Novatrix style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: -1 }} />
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
           

            <div className="mb-6 p-1">
                <h2 className="text-2xl font-semibold mb-2">My Programming Journey</h2>
                <p>
                    I started my programming journey with a passion for solving problems and creating dynamic web applications.
                    Over time, I honed my skills in technologies like React, Node.js, and MongoDB, which helped me build scalable,
                    user-friendly projects. I particularly enjoy building interactive features and optimizing performance in web apps.
                </p>
            </div>

            <div className="mb-6 p-1">
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <ul className="list-disc pl-6">
                    <li>React - Building dynamic and responsive UI components.</li>
                    <li>Node.js - Creating backend APIs and handling server-side logic.</li>
                    <li>MongoDB - Managing databases and structuring data efficiently.</li>
                    <li>Tailwind CSS - Crafting modern, responsive designs with utility-first CSS.</li>
                    <li>DaisyUI - Enhancing UI with pre-built, customizable components.</li>
                    <li>Firebase - Implementing authentication and real-time database features.</li>
                    <li>GitHub - Managing code repositories and collaborating on projects.</li>
                </ul>
            </div>

          
        </div>
    );
};

export default AboutMe;