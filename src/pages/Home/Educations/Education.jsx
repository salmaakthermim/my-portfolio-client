import React from 'react';
import { motion } from 'framer-motion';
import { Novatrix } from "uvcanvas";

const Education = () => {
    return (
        <div className="p-6 my-10 max-w-4xl mx-auto shadow-lg rounded-lg text-black relative" id="education">
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
        {/* <h1 className="text-3xl font-bold mb-6 text-sky-500">Educations</h1> */}

        <div className="mb-8 relative p-4 bg-sky-300">
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
            {/* <h2 className="text-2xl font-semibold mb-2">Bachelor of Business Administration in Management</h2> */}
            <p className='flex gap-1 items-center'><img src="https://i.ibb.co.com/4wBdzmKd/download-3.jpg" className='w-12 h-12 rounded-full' alt="Moulvibazar Government College" /><strong>Institution:</strong> Moulvibazar Government College, Moulvibazar</p>
            <p><strong>Passed:</strong> 2024</p>
            <p><strong>CGPA:</strong> 3.02</p>
        </div>

        <div className="mb-8 relative p-4 bg-sky-300">
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
            <h2 className="text-2xl font-semibold mb-2">Higher Secondary Certificate (HSC)</h2>
            <p className='flex gap-1 items-center'><img src="https://i.ibb.co.com/wZckNDzx/download-2.jpg" className='w-12 h-12 rounded-full' alt="Moulvibazar Govt. Women's College" /><strong>Institution:</strong> Moulvibazar Govt. Women's College, Moulvibazar</p>
            <p><strong>Passed:</strong> 2018</p>
            <p><strong>GPA:</strong> 4.08</p>
        </div>

        <div className="mb-8 relative p-4 bg-sky-300">
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
            <h2 className="text-2xl font-semibold mb-2">Secondary School Certificate (SSC)</h2>
            <p className='flex gap-1 items-center'><img src="https://i.ibb.co.com/rKHtMH6B/59.jpg" className='w-12 h-12 rounded-full' alt="Hafiza Khatun Girls High School" /><strong>Institution:</strong> Hafiza Khatun Girls High School, Moulvibazar</p>
            <p><strong>Passed:</strong> 2016</p>
            <p><strong>GPA:</strong> 4.39</p>
        </div>
    </div>
    );
};

export default Education;