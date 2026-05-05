import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Content Generator",
      description: "A SaaS platform utilizing Gemini and OpenAI APIs to automatically generate marketing copy, blog posts, and social media content based on user prompts.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      tags: ["Next.js", "Tailwind CSS", "Gemini API", "Supabase"],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Analytics Dashboard",
      description: "An intelligent dashboard for e-commerce businesses that predicts trends and visually represents real-time sales data using D3.js and machine learning models.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Python", "FastAPI", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "DevFlow - Developer Tooling",
      description: "A developer workflow automation planner built with Node.js and React, offering visual node-based connections for orchestrating CI/CD tasks.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
      tags: ["TypeScript", "Node.js", "React Flow", "Docker"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-16 flex flex-col justify-center gap-16 relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">Selected<br/><span className="text-neutral-500">Works</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const gradients = [
              "from-indigo-500/20",
              "from-purple-500/20",
              "from-orange-500/20"
            ];
            const gradient = gradients[index % gradients.length];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none`}></div>
                
                {/* Background image behind gradient */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity grayscale duration-500">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">{project.tags[0]}</p>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-neutral-400 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                </div>

                <a href={project.demo} className="absolute top-8 right-8 w-10 h-10 rounded-full border border-neutral-700 bg-black/50 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all z-20 hover:bg-neutral-800 hover:border-neutral-600">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
                
                <a href={project.github} className="absolute top-8 right-20 w-10 h-10 rounded-full border border-neutral-700 bg-black/50 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all z-20 hover:bg-neutral-800 hover:border-neutral-600">
                  <Github className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
