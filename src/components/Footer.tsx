export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center border-t border-neutral-900 gap-6 md:gap-0 bg-[#080808]">
      <div className="flex items-center gap-6">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-[10px] uppercase tracking-widest text-neutral-500">Available for hire — Dhaka, Bangladesh</span>
      </div>
      <div className="flex gap-8 text-[10px] uppercase tracking-widest text-neutral-400 font-medium flex-wrap justify-center">
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
      </div>
    </footer>
  );
}
