
import { RevealOnScroll } from '../RevealOnScroll';


export const Home = () => {
  return (
    <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
    >
    
        <RevealOnScroll>
        <div className="text-center z-10 px-4"> 
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 gradient-text bg-clip-text text-transparent leading-right">
                Hi, I'm Kristi Rakipllari
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                I'm a software developer with curiosity for 
                creating innovative solutions. I am specialized front-end and full-stack web development, 
                blending technical skill with an eye for usability. <br />
                I’m passionate about continuous learning and eager to take on new challenges 
                that allow me to grow and contribute to meaningful projects.
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded transition relative overflow-hidden 
                    hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    View My Projects
                </a>
                <a href="#contact" className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition duration-200 
                    hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                    Contact Me
                </a>
            </div>

        </div>

        </RevealOnScroll>
    </section>
    
  );
}