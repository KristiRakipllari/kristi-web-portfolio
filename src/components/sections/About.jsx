import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
  const frontendSkills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];
  const backendSkills = ['Node.js', 'Python', 'MongoDB', 'SQL'];

  const [openIndex, setOpenIndex] = useState(null);

  const workExperience = [
    {
      title: 'Freelance Developer',
      date: 'March 2024 - Present',
      location: 'Remote',
      description:
        'Experienced in web development, having designed, developed, and maintained specialized websites like autograndrental.com, a WordPress-based car rental platform. Created interactive UI components and custom JavaScript features to boost user engagement and functionality. Built fully responsive layouts to ensure an optimal user experience across devices. Worked with payment plugins and planned to integrate third-party payment gateways for secure transactions. Enhanced website visibility by integrating and optimizing Google Ads alongside basic Google SEO practices, resulting in a 60% increase in traffic.',
    },

    {
      title: 'Product Management - Working Student',
      date: 'Dec 2023 - Present',
      location: 'Frankfurt, Germany',
      description:
        'Skilled in creating and managing detailed product documentation in Confluence to improve team collaboration and efficiency. Developed an internal web application using Ibexa DXP’s low-code features, enhancing client interactions through better UI/UX and performance. Contributed to Jira ticket management by prioritizing and resolving issues efficiently, with a focus on web support for Ibexa. Implemented Jira automations to optimize workflows, boosting team productivity and reducing errors by 30% through task automation and process standardization. Supported CoreData database cleanup by eliminating duplicates, improving data accuracy and application performance.',
    },

    {
      title: 'Service Desk Specialist',
      date: 'Jul 2021 - Dec 2021',
      location: 'Raiffeisen Bank, Albania',
      description:
        'Delivered thorough user support for critical bank programs on Jira, resolving all related issues. Handled physical installation and maintenance of coworkers’ equipment, both on-site and remotely. Demonstrated strong skills in identifying problems and proposing effective solutions. Produced periodic reports for management review. Performed hardware system maintenance to ensure smooth and uninterrupted operation.',
    },

  ];

  const toggleAccordion = (index) => {
  if (openIndex === index) {

    setOpenIndex(null);

  } else {
    
    setOpenIndex(index);
  }
  
};
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-2"
    >
        <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with experience in creating dynamic web
            applications. I have a strong foundation in JavaScript and React,
            and I'm always eager to expand my skill set.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Accordion for Work Experience */}
        <div className="mt-8 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
          {workExperience.map((job, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left bg-blue-500/10 p-4 rounded-lg focus:outline-none flex justify-between items-center text-gray-300 hover:bg-blue-500/20 transition duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold">{job.title}</span>
                <span className="text-gray-400">
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </button>
              <div
                className={`bg-blue-500/5 p-4 rounded-b-lg transition-all duration-300 text-gray-300 
                    ${openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <div className="flex justify-between mb-2">
                  <span>{job.location}</span>
                  <span>{job.date}</span>
                </div>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};