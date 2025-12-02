
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Novatrix } from "uvcanvas";
import { Snowfall } from 'react-snowfall';

const DetailsProject = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/project_details/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    if (!data) return <div>Loading...</div>

    const {
        project_name,
        project_image,
        main_technology_stack,
        description,
        live_project_link,
        github_repository_link,
    } = data;

    return (
        <div>
            {/* Snow effect */}
            <Snowfall
                snowflakeCount={150}
                style={{ position: "fixed", width: "100vw", height: "100vh", zIndex: 1 }}
            />
            <div className="p-6 my-10 max-w-4xl mx-auto shadow-lg rounded-lg text-black relative overflow-hidden">

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

                {/* ------------------------ CONTENT --------------------------- */}
                <h1 className="text-3xl font-bold mb-4">{project_name} Details</h1>

                <div className="mb-6">
                    <img
                        src={project_image}
                        alt={project_name}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                <h2 className="text-2xl font-semibold mb-2">Main Technology Stack</h2>
                <ul className="list-disc pl-6 mb-4">
                    {main_technology_stack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold mb-2">Project Description</h2>
                <p className="mb-4">{description}</p>

                <h2 className="text-2xl font-semibold mb-2">Live Project Link</h2>
                <a
                    href={live_project_link}
                    className="text-blue-600 font-semibold underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {live_project_link}
                </a>

                <h2 className="text-2xl font-semibold mt-4 mb-2">GitHub Repository</h2>
                <a
                    href={github_repository_link}
                    className="text-blue-600 font-semibold underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {github_repository_link}
                </a>

                <Link className="btn btn-info mt-8 ml-12" to="/">GO BACK</Link>
            </div>
        </div>
    );
};

export default DetailsProject;
