import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 md:px-16 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <span className="md:absolute -top-10 left-1 text-[11px] uppercase tracking-[0.4em] text-indigo-500 font-bold block mb-4 md:mb-0">AI-Powered Web Developer</span>
          <h1 className="text-6xl md:text-[110px] font-bold leading-[0.85] tracking-tighter uppercase">
            BUILDING<br/>AI <span className="text-neutral-500">EXPERIENCES</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start mt-10 gap-10 md:gap-0"
        >
          <p className="max-w-md text-lg text-neutral-400 leading-relaxed">
            I'm a passionate developer focused on creating intelligent, scalable, and efficient web apps that stand out.
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col items-end">
              <span className="text-3xl font-light italic text-white">10+</span>
              <span className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1">AI Projects</span>
            </div>
            <div className="w-px h-10 bg-neutral-800 mx-4"></div>
            <div className="flex flex-col items-end">
              <span className="text-3xl font-light italic text-white">05</span>
              <span className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1">Awards won</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex items-center gap-6"
        >
          <a href="#" className="text-neutral-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-neutral-500 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-neutral-500 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="mailto:shimul.cse28@gmail.com" className="text-neutral-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
