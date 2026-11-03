import { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const serverUrl = 'https://my-portfolio-server-umber.vercel.app/userClient';
      let response;
      try {
        response = await fetch(serverUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch {
        // Fallback to localhost if local
        response = await fetch("http://localhost:5000/userClient", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      const data = await response.json();
      if (data.insertedId) {
        Swal.fire({ icon: "success", title: "Message Sent! 🎉", text: "I'll get back to you soon.", background: '#0a1628', color: '#e2e8f0' });
        setFormData({ name: "", phone: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      Swal.fire({ icon: "error", title: "Oops!", text: "Failed to send message. Try again.", background: '#0a1628', color: '#e2e8f0' });
    } finally {
      setSending(false);
    }
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-[#030b17]" id="contact">
      {/* bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-64 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Contact section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sky-400 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded mx-auto mt-3" />
          <p className="section-subtitle mt-4">Have a project in mind? Let's work together!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's build something great together</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="text-white text-sm">salmaakthermim112@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-white text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="mailto:salmaakthermim112@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-400/50 transition-all"
              >
                <FaEnvelope size={16} />
              </a>
              <a
                href="https://github.com/salmaakthermim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-400/50 transition-all"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="glow-card p-5 sm:p-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sky-400/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+880 1234 567890"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sky-400/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sky-400/60 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full btn-gradient py-3 text-sm font-bold disabled:opacity-60"
              >
                {sending ? 'Sending...' : 'Send Message 🚀'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-full border border-sky-500/40 object-cover object-top"
              src="/Mim.png"
              alt="logo"
            />
            <span className="text-white font-bold">Salma<span className="text-sky-400"> Akther Mim</span></span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Salma Akther Mim — Front-End Developer. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 hover:bg-sky-500/20 transition-all"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
