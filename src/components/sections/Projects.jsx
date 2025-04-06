import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';


export const Projects = () => {

    const firstprojectSkills = [ "Python", "Jupyter Notebooks", "Pandas", "NumPy", "Scikit-learn", "NLTK / SpaCy" ];
    const secondprojectSkills = [ "Python", "Jupyter Notebooks", "Pandas", "NumPy", "Scikit-learn", "NLTK / SpaCy" ];
    const thirdprojectSkills = [ "WordPress", "Elementor", "HTML", "CSS", "JavaScript", "Google Ads", "Vik Rent Car (Plugin)" ];
    const fourthprojectSkills = [ "Javascript", "React", "Node.js", "Email.js", "HTML", "CSS", "Tailwind CSS" ];

    return (
        <section
              id="projects"
              className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                  Projects
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">Email spam/ham </h3>
                        <p className="text-gray-300 mb-4">Group project. Built a model to classify emails as either spam or ham (non-spam). The dataset was sourced from Kaggle, containing labeled email messages, which were used to train and evaluate a classification model.</p>
                        <div className="flex flex-wrap gap-2">
                            {firstprojectSkills.map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,1)] transition"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                            <div className="flex items-center justify-between mt-4">
                                <a href="#" target='blank' className="text-blue-400 hover:underline">View Project →</a>
                            </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">
                            Twitter Climate Change - Sentiment Analysis
                        </h3>
                        <p className="text-gray-300 text-bold mb-4">This project leverages Twitter data to analyze public sentiment surrounding the topic of climate change.</p>
                        <div className="flex flex-wrap gap-3">
                            {secondprojectSkills.map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,1)] transition"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                            <div className="flex items-center justify-between mt-4">
                                <a href="https://github.com/KristiRakipllari/Twitter-Climate-Change-Sentiment-Analysis" target='blank' className="text-blue-400 hover:underline">View Project →</a>
                            </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">Car Rental Website</h3>
                        <p className="text-gray-300 mb-4">Designed, developed, and maintained Auto Grand's car rental website.</p>
                        <div className="flex flex-wrap gap-2">
                            {thirdprojectSkills.map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,1)] transition"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                            <div className="flex items-center justify-between mt-4">
                                  <a href="https://autograndrental.com/" target='blank'  className=" text-blue-400 hover:underline">View Project →</a>
                            </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">Web portolio</h3>
                        <p className="text-gray-300 mb-4">This is my personal web portfolio, designed to showcase my skills, projects, and professional journey as a developer. </p>
                        <div className="flex flex-wrap gap-2">
                            {fourthprojectSkills.map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,1)] transition"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                            <div className="flex items-center justify-between mt-4">
                                <a href="https://kristirakipllari.github.io/kristi-web-portfolio/" target='blank' className="text-blue-400 hover:underline">View Project →</a>
                            </div>
                    </div>

                </div>

            </div>
            </RevealOnScroll>               
        </section>
        
    );
};

