import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior AI Engineer",
      company: "TechNova Solutions",
      period: "2024 - Present",
      description: "Leading the development of generative AI features across multiple enterprise SaaS platforms. Architected scalable RAG pipelines reducing customer support tickets by 40%."
    },
    {
      role: "Full Stack Developer",
      company: "Digital Edge Inc.",
      period: "2021 - 2024",
      description: "Developed and maintained full-stack React and Node.js applications. Implemented real-time collaboration features using WebSockets and optimized database queries."
    },
    {
      role: "Frontend Engineer",
      company: "Creative Web Agency",
      period: "2019 - 2021",
      description: "Created responsive, pixel-perfect user interfaces based on Figma designs. Worked closely with the design team to ensure high-quality interactive experiences."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-16 flex flex-col justify-center gap-16 relative border-t border-neutral-900 bg-[#080808]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-indigo-500 font-bold block mb-4">Journey</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">Work<br/><span className="text-neutral-500">Experience</span></h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-neutral-800">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#080808] border border-neutral-700 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-neutral-800">
                <Briefcase className="w-3 h-3 text-neutral-400 group-hover:text-white transition-colors" />
              </div>

              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 relative z-10">
                  <h3 className="font-bold text-xl">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500 font-medium whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>
                <div className="text-indigo-400 font-medium text-[11px] uppercase tracking-widest mb-4 relative z-10">{exp.company}</div>
                <p className="text-neutral-400 text-sm leading-relaxed relative z-10">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
