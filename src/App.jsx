import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // The 'magic' for reactivity

function App() {
  const [page, setPage] = useState("home");

  const events = [
    { id: 1, name: "Artistic Odyssey", category: "model Making ", link: "https://forms.gle/wBs7Syp5187v3Pv28" },
    { id: 2, name: "Virtual Domination", category: "Mobile Gaming", link: "https://forms.gle/apimpzM7WxeHBFXe8" },
    { id: 3, name: "Frame Rate", category: "Reel", link: "https://forms.gle/cm9EYY9Hru6ueB2s6" },
    { id: 4, name: "Data Dice", category: "Campus Quest ", link: "https://docs.google.com/forms/d/e/1FAIpQLSdwGYuGqLZtFTXOIgT-uNOV-YB2tFBjhTiVAr6oEEdXqbVbgA/viewform?usp=header" },
    { id: 5, name: "Tech Tales", category: "short Film", link: "https://forms.gle/TceHLxRvDEdvxQF3A" },
    { id: 6, name: "Cipher Seekers", category: "Treasure Hunt ", link: "https://docs.google.com/forms/d/e/1FAIpQLScqMP3znfsWFZmxMUY5Y0F9r4vmHY32V84DryZXVx7B7mIBaA/viewform?usp=header" },
    { id: 7, name: "AlgoRhythm", category: "Dance", link: "https://forms.gle/CnbYq81Ho9wkFDC7A" },
    { id: 8, name: "Bitrate Blitz", category: "LAN Gaming", link: "https://forms.gle/FU9wx22rJTYkcXsA7" },
    { id: 9, name: "Bit Brush", category: "Face Painting ", link: "https://docs.google.com/forms/d/e/1FAIpQLSckAl52tmlB6jHf7DTv2bfoPHYr7Wkdc7nLlxFrx7frqQXphA/viewform?usp=header" },
    { id: 10, name: "Code Canvas", category: "Poster Making ", link: "https://docs.google.com/forms/d/e/1FAIpQLSc8QBhdmG7sE6dhcgsIcQjCHn2_GZgZ9FPa6N3se9oa-4Dy3Q/viewform?usp=header" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
      {/* GLOW OVERLAY */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-pink-500/10 blur-[120px] rounded-full animate-pulse"></div>
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
                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-pink-400 uppercase bg-pink-400/10 border border-pink-400/20 rounded-full"
              >
                The Future is Now
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
              >
                TECHNITUDE <span className="text-pink-500">2K26</span>
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
                  className="px-10 py-4 bg-pink-600 rounded-xl font-bold text-lg transition-colors"
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
                    className="text-pink-500 hover:text-pink-400 transition mb-4 flex items-center gap-2 font-bold"
                  >
                    {"<<"}
                  </motion.button>
                  <h2 className="text-5xl font-bold">The <span className="text-pink-500 italic">Arena</span></h2>
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
                    <span className="text-xs font-semibold text-pink-400 tracking-widest uppercase mb-2 block font-mono">
                      {event.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-6 group-hover:text-pink-400 transition-colors tracking-tight">
                      {event.name}
                    </h3>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center block py-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-pink-500/50 group-hover:bg-pink-500 group-hover:text-white transition-all font-bold"
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