import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.7, ease: "easeOut" }
  }
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-28 px-4 sm:px-6 lg:px-8">
      {/* Decorative background flare */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-8 tracking-tight drop-shadow-xl"
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
        >
          Policy Priority Inference
        </motion.h1>

        <motion.div
          className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-white/90 space-y-6 mb-12"
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <p>
            <span className="font-semibold text-white">Policy Priority Inference (PPI)</span> is an advanced AI framework developed by the Alan Turing Institute. It uses causal modeling to align policy ambitions with actual government capacity—enabling more effective, resource-aware decision-making across complex development scenarios.
          </p>

          <div className="text-center">
            <a 
              href="https://policypriority.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-blue-200 hover:text-white underline font-medium mb-2"
            >
              Click here to know more about the PPI project
            </a>
            <p className="text-xs text-blue-100/80">
              Policy Priority Institute. "PPI App." Accessed May 6, 2025. https://policypriority.org/ppiapp/.
            </p>
          </div>

          <p>
            In <span className="font-semibold text-white">Kenya</span>, we are tailoring PPI to reflect Kenya's distinct policy landscape by embedding localized economic data, political realities, and social feedback mechanisms. Our work empowers national and county-level planners with actionable insights that drive equitable and sustainable development.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <Link 
            to="/simulation"
            className="bg-white text-blue-800 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:bg-blue-100 hover:scale-105 transition-transform duration-200 transform"
          >
            Try Simulation Tool
          </Link>
          <Link 
            to="/methodology"
            className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-800 hover:scale-105 transition-transform duration-200 transform"
          >
            Learn Methodology
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;