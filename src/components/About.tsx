import { motion } from "motion/react";
import { Code2, Cpu, Globe2, Layout, Database, Zap } from "lucide-react";

export default function About() {
  const skills = [
    { icon: <Layout />, name: "Frontend Development", desc: "React, Vue, Next.js, Tailwind CSS", color: "text-blue-400", bg: "bg-blue-400/10" },
    { icon: <Database />, name: "Backend Development", desc: "Node.js, Express, Python, PostgreSQL", color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { icon: <Cpu />, name: "AI Integration", desc: "OpenAI API, Gemini, LangChain, RAG", color: "text-purple-400", bg: "bg-purple-400/10" },
    { icon: <Globe2 />, name: "Cloud & DevOps", desc: "AWS, Vercel, Docker, CI/CD", color: "text-orange-400", bg: "bg-orange-400/10" },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-16 relative bg-[#080808] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:w-1/3 sticky top-32"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-indigo-500 font-bold block mb-4">Competencies</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Expertise &<br/><span className="text-neutral-500">Skills</span></h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-sm">
            I love turning ideas into interactive digital products, specializing in the modern web stack, performance, and intelligent AI features.
          </p>
        </motion.div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center mb-6 bg-[#080808]">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 relative z-10">{skill.name}</h3>
              <p className="text-[11px] uppercase tracking-wider text-neutral-500 relative z-10 leading-relaxed font-medium mt-4">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
