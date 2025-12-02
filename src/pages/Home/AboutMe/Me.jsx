import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Novatrix } from "uvcanvas";
import { motion } from 'framer-motion';

export default function Me() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleDownloadCV = () => {
        // Logic to handle CV download
        window.open('/path/to/your/cv.pdf'); // adjust with the actual CV link
    };

    return (
        <div>
           
            <section className="   py-16 px-6 md:px-12">
                 {/* 🔵 Novatrix Animated Background */}
            <Novatrix
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -2
                }}
            />

            {/* 🔵 Glowing Animation Layer */}
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

                <div className=" w-1/3 mx-auto">
                    <h2 class="text-4xl md:text-5xl font-bold text-transparent ml-16 bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] aos-init aos-animate" data-aos="zoom-in-up" data-aos-duration="600">About Me</h2>
                    <p
                        className="text-center md:text-left text-gray-300 mt-2 flex items-center justify-center md:justify-start gap-2"
                        data-aos="fade-up" data-aos-duration="130"
                    >
                        <span>✨</span>
                        <span className=" px-3 py-1 rounded-lg text-sm">
                            Transforming ideas into digital experiences
                        </span>
                        <span>✨</span>
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div data-aos="fade-right">


                        <h1
                            className="mt-6 text-3xl md:text-4xl font-bold text-center md:text-left text-white"
                            data-aos="fade-up"
                        >
                            Hello, I'm <br />
                            <span className=" text-purple-500">Salma Akther Mim</span>
                        </h1>

                        <p
                            className="mt-4  text-lg leading-relaxed text-center md:text-left"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            A Computer Network and Telecommunications student passionate about
                            Front-End development. I specialize in crafting engaging digital
                            experiences and consistently strive to deliver the best solutions
                            in every project.
                        </p>

                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center" data-aos="zoom-in">
                        <div className="relative">
                            <img
                                src="https://avatars.githubusercontent.com/u/160014837?s=400&u=ae238005fd653d2f2ed44f20b50fa244a4614091&v=4"
                                alt="Abdul Jabbar Al Nahid"
                                className="w-60 h-60 md:w-72 md:h-72 rounded-full shadow-lg border-4 border-gray-700"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}