import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com"; 
import { useState } from "react";


export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    // Initialize EmailJS
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            alert("Email sent successfully!");  
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        })
        .catch((error) => alert ("Oops! Something went wrong. Please try again." ));

     };



  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-4"
    >
      <RevealOnScroll>
        <div className="px-4">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto p-6 bg-black text-white">
                <div className="md:w-2/5 space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-white">Let's Talk</h2>
                        <p className="mt-2 text-gray-400">
                        Got an idea or project where I can contribute? I’m a junior developer excited to learn, grow, and help bring your vision to life! 
                        <br></br>Feel free to reach out through the form below or email me directly—I’d love to chat about how I can assist.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Email</h3>
                        <div className="mt-2">
                            <a
                            href="mailto:kristi.rakipllari@gmail.com"
                            className="text-blue-400 hover:underline"
                            >
                            kristi.rakipllari@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/5">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                        <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500"
                                required
                                placeholder="Your Name"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })} // Update state on change
                        />
                        </div>

                        <div className="relative">
                        <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500"
                                required
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        </div>

                        <div className="relative">
                        <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                rows={5} 
                                className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500"
                                required
                                placeholder="Your message here..."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded transition font-medium relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                        Submit
                        </button>
                    </form>
                </div>
                
            </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};