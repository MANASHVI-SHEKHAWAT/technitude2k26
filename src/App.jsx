import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [page, setPage] = useState("home");
  const canvasRef = useRef(null);

  /* ===============================
     PARTICLE CANVAS BACKGROUND
  =============================== */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 90;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = 2;
      }
      move() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x <= 0 || this.x >= window.innerWidth) this.vx *= -1;
        if (this.y <= 0 || this.y >= window.innerHeight) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "oklch(0.656 0.241 354.308)";
        ctx.fill();
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = "oklch(0.656 0.241 354.308 / 0.2)";
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.move();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    };

    particles = Array.from({ length: particleCount }, () => new Particle());
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  /* ===============================
     EVENTS DATA
  =============================== */
  const events = [
  { id: 1, name: "Artistic Odyssey", category: "Model Making", link: "https://forms.gle/wBs7Syp5187v3Pv28" },
  { id: 2, name: "Virtual Domination", category: "Mobile Gaming", link: "https://forms.gle/apimpzM7WxeHBFXe8" },
  { id: 3, name: "Frame Rate", category: "Reel", link: "https://forms.gle/cm9EYY9Hru6ueB2s6" },
  { id: 4, name: "Data Dice", category: "Campus Quest", link: "https://docs.google.com/forms/d/e/1FAIpQLSdwGYuGqLZtFTXOIgT-uNOV-YB2tFBjhTiVAr6oEEdXqbVbgA/viewform?usp=header" },
  { id: 5, name: "Tech Tales", category: "Short Film", link: "https://forms.gle/TceHLxRvDEdvxQF3A" },
  { id: 6, name: "Cipher Seekers", category: "Treasure Hunt", link: "https://docs.google.com/forms/d/e/1FAIpQLScqMP3znfsWFZmxMUY5Y0F9r4vmHY32V84DryZXVx7B7mIBaA/viewform?usp=header" },
  { id: 7, name: "AlgoRhythm", category: "Dance", link: "https://forms.gle/nk867DP5vSmKMHe46" },
  { id: 8, name: "Bitrate Blitz", category: "LAN Gaming", link: "https://forms.gle/FU9wx22rJTYkcXsA7" },
  { id: 9, name: "Bit Brush", category: "Face Painting", link: "https://docs.google.com/forms/d/e/1FAIpQLSckAl52tmlB6jHf7DTv2bfoPHYr7Wkdc7nLlxFrx7frqQXphA/viewform?usp=header" },
  { id: 10, name: "Code Canvas", category: "Poster Making", link: "https://docs.google.com/forms/d/e/1FAIpQLSc8QBhdmG7sE6dhcgsIcQjCHn2_GZgZ9FPa6N3se9oa-4Dy3Q/viewform?usp=header" },
];

return (
  <div className="relative min-h-screen overflow-hidden text-slate-100">
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "#050a14" }}
    />

    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full animate-pulse" />
    </div>

    <div className="relative z-10">
      <AnimatePresence mode="wait">
        {page === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center px-4 max-w-7xl mx-auto"
          >
            <div className="text-center max-w-3xl">
              <div className="inline-block mb-6 px-4 py-1 text-xs tracking-widest text-pink-400 border border-pink-400/30 rounded-full">
                THE FUTURE IS NOW
              </div>

              <h1 className="text-4xl md:text-8xl font-black mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                TECHNITUDE <span className="text-pink-500">2K26</span>
              </h1>

              <p className="text-gray-400 text-lg mb-10">
                Ignite your digital senses at the premier national-level
                technical symposium. Innovation meets competition.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => setPage("events")}
                  className="px-10 py-4 bg-pink-600 rounded-xl font-bold hover:scale-105 transition"
                >
                  Explore Events
                </button>
<a
  href="/rulebook.pdf"
  download="Technitude_2K26_Rulebook.pdf"
  className="px-10 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition"
>
  Download Rulebook
</a>
              </div>
            </div>
          </motion.div>
        )}

        {page === "events" && (
          <motion.div
            key="events"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="min-h-screen px-4 py-20"
          >
            <div className="max-w-7xl mx-auto">
              <button
                onClick={() => setPage("home")}
                className="text-pink-500 font-bold mb-6"
              >
                {"<<"} 
              </button>

              <h2 className="text-5xl font-bold mb-12">
                The <span className="text-pink-500 italic">Arena</span>
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {events.map((e, i) => (
                  <motion.div
                    key={e.id}
                    whileHover={{ y: -8 }}
                    className="relative bg-white/[0.03] border border-white/10 p-6 rounded-2xl"
                  >
                    <span className="text-[10px] absolute top-4 right-4 text-white/30">
                      #{String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs uppercase text-pink-400 font-mono">
                      {e.category}
                    </span>

                    <h3 className="text-2xl font-bold mt-2 mb-6">
                      {e.name}
                    </h3>

                    {/* ✅ NEW TAB OPEN */}
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-3 rounded-lg bg-pink-600 font-bold hover:bg-pink-500 transition"
                    >
                      Register Now
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);
}

export default App;
