import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // The 'magic' for reactivity

function App() {
  const [page, setPage] = useState("home");

  const events = [
    { id: 1, name: "Artistic Odyssey", category: "Design", link: "https://forms.gle/wBs7Syp5187v3Pv28" },
    { id: 2, name: "Virtual Domination", category: "Gaming", link: "https://forms.gle/wBs7Syp5187v3Pv28" },
    { id: 3, name: "Frame Rate", category: "Video", link: "https://forms.gle/bmJMhRhmMhyiuRHg7" },
    { id: 4, name: "Data Dice", category: "AI/ML", link: "https://docs.google.com/forms/d/..." },
    { id: 5, name: "Tech Tales", category: "Quiz", link: "https://forms.gle/TceHLxRvDEdvxQF3A" },
    { id: 6, name: "Cipher Seekers", category: "Cyber", link: "https://docs.google.com/forms/d/..." },
    { id: 7, name: "Algorhythym", category: "Coding", link: "https://forms.gle/ZaHpSbGUUmw62mux5" },
    { id: 8, name: "Bitrate Blitz", category: "Hardware", link: "https://forms.gle/FU9wx22rJTYkcXsA7" },
    { id: 9, name: "Bit Brush", category: "Design", link: "https://docs.google.com/forms/d/..." },
    { id: 10, name: "Pixel Perfect", category: "UI/UX", link: "https://forms.gle/3LsHwE4t6XdnauP29" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      {/* GLOW OVERLAY */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <AnimatePresence mode="wait">
        {/* HOME PAGE */}
        {page === "home" && (
          <motion.div 
            key="home"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="relative min-h-screen flex items-center justify-center px-6"
          >
            <div className="text-center z-10">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full"
              >
                The Future is Now
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
              >
                TECHNITUDE <span className="text-cyan-500">2K26</span>
              </motion.h1>

              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Ignite your digital senses at the premier national-level technical symposium. 
                Innovation meets competition.
              </motion.p>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6,182,212,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage("events")}
                  className="px-10 py-4 bg-cyan-600 rounded-xl font-bold text-lg transition-colors"
                >
                  Explore Events
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  href="/rulebook.pdf"
                  className="px-10 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl font-bold text-lg"
                >
                  Rulebook
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* EVENTS PAGE */}
        {page === "events" && (
          <motion.div 
            key="events"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative min-h-screen px-6 py-20"
          >
            <div className="max-w-7xl mx-auto">
              <header className="flex justify-between items-end mb-16">
                <div>
                  <motion.button 
                    whileHover={{ x: -5 }}
                    onClick={() => setPage("home")}
                    className="text-cyan-500 hover:text-cyan-400 transition mb-4 flex items-center gap-2 font-bold"
                  >
                    {"<<"}
                  </motion.button>
                  <h2 className="text-5xl font-bold">The <span className="text-cyan-500 italic">Arena</span></h2>
                </div>
                <p className="text-gray-400 hidden md:block italic">10 Challenges. One Champion.</p>
              </header>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-white/20 uppercase">
                      #{event.id.toString().padStart(2, '0')}
                    </div>
                    <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-2 block font-mono">
                      {event.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-6 group-hover:text-cyan-400 transition-colors tracking-tight">
                      {event.name}
                    </h3>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center block py-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold"
                    >
                      Register Now
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;