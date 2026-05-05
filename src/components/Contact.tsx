import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "8801619184281"; // Using your number with BD country code
    const text = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message:
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 flex flex-col justify-center bg-[#080808] border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-indigo-500 font-bold block mb-4">Connect</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">Let's <span className="text-neutral-500">Collaborate</span></h2>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
            I'm currently open for new opportunities. Whether you have a project in mind or just want to say hi, I'll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <div className="space-y-8 h-full flex flex-col justify-center">
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center shrink-0 group-hover:border-indigo-500 transition-colors">
                  <Mail className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 font-medium">Email Address</h4>
                  <a href="mailto:shimul.cse28@gmail.com" className="text-xl md:text-2xl font-light hover:text-indigo-400 transition-colors">shimul.cse28@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center shrink-0 group-hover:border-indigo-500 transition-colors">
                  <Phone className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 font-medium">Phone Number</h4>
                  <p className="text-xl md:text-2xl font-light">01619184281</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center shrink-0 group-hover:border-indigo-500 transition-colors">
                  <MapPin className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 font-medium">Location</h4>
                  <p className="text-xl md:text-2xl font-light">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#080808] border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-all font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#080808] border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#080808] border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-all font-sans"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#080808] border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-all resize-none font-sans"
                  placeholder="How can we help?"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group uppercase tracking-widest text-[11px]"
              >
                Send Message <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
