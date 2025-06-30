import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Methodology = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h1
          className="text-4xl font-extrabold text-center text-blue-900 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          PPI Methodology
        </motion.h1>

        {/* Agent-Based Modeling */}
        <motion.div
          className="bg-gradient-to-br from-white via-slate-50 to-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Agent-Based Modeling Approach</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PPI relies on agent computing, a specific type of Artificial Intelligence that enables modeling socioeconomic agents and their decision-making processes in great detail. This approach provides several advantages:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li>Transparent modeling of complex systems (no black box)</li>
            <li>Ability to capture heterogeneous agent behaviors</li>
            <li>Flexibility to incorporate institutional and contextual factors</li>
            <li>Generation of clear counterfactual scenarios for impact assessment</li>
          </ul>
        </motion.div>

        {/* Key Components */}
        <motion.div
          className="bg-gradient-to-br from-white via-blue-100/10 to-white/80 backdrop-blur p-8 rounded-2xl shadow-lg mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Key Components</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Agent Representation",
                description:
                  "Detailed modeling of households, firms, government entities, and other relevant socioeconomic actors with their specific decision rules and constraints."
              },
              {
                title: "Institutional Context",
                description:
                  "Explicit representation of policy rules, budgetary processes, and implementation mechanisms that shape how public spending affects development outcomes."
              },
              {
                title: "Impact Pathways",
                description:
                  "Mapping of how budgetary allocations translate into service delivery and ultimately affect development indicators through various transmission channels."
              },
              {
                title: "Validation Framework",
                description:
                  "Systematic comparison of model outputs with empirical data to ensure the simulation produces realistic results."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white/90 rounded-xl p-6 shadow-md"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 3}
              >
                <h3 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advantages */}
        <motion.div
          className="bg-gradient-to-br from-white via-slate-50 to-white/90 backdrop-blur p-8 rounded-2xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={7}
        >
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Advantages Over Traditional Methods</h2>
          <div className="space-y-6">
            {[
              {
                title: "Multidimensional Impact Assessment",
                description:
                  "Unlike econometric models that typically focus on one outcome at a time, PPI can simultaneously assess impacts across multiple development dimensions (health, education, poverty, etc.)."
              },
              {
                title: "Disaggregated Analysis",
                description:
                  "PPI can provide insights at subnational levels and for specific population groups that are often too granular for traditional statistical analysis."
              },
              {
                title: "Policy Experimentation",
                description:
                  "The framework allows testing alternative budgetary configurations before implementation, reducing risks of unintended consequences."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 8}
              >
                <h3 className="text-lg font-bold text-blue-700 mb-1">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
