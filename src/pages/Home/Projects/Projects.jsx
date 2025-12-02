import React, {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
   
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data || []))  // 👈 Ensure default array instead of null
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-8 md:p-24" id="projects">
            <h2 className="text-3xl font-bold mb-8 flex justify-center items-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-500 from-45% via-pink-500 to-teal">Projects</h2>
            <p className='my-10 w-9/12 mx-auto text-center'>Explore options, detailed requirements, and insider insights to simplify your journey and make project a reality.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 relative group">
                {Array.isArray(projects) && projects.map((project) => (
                    <div key={project?._id} className="card border-4 border-base-900 w-full group-hover:scale-110">
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
                        <figure>
                            <img src={project?.project_image} alt={project?.project_name} className="h-48 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h3 className="text-xl font-bold">{project?.project_name}</h3>
                            <Link to={`project_details/${project._id}`} className="btn bg-teal-300 mt-4 text-black">See Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;