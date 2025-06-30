import { motion } from "framer-motion";
import { Download, TrendingUp, TrendingDown, Clock } from "lucide-react";
import SimulationGraph from "../assets/simulation-graph.png";

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

const indicatorData = [
  // ... (keep your existing indicator data)
];

const timePeriods = [10, 20, 30, 40, 50, 60, 70, 80];
const changeValues = [0.2, 0.1, 0.0, -0.1, -0.0];

const SimulationDemo = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/PPIworkshop_indicators.xlsx'; // File in public folder
    link.download = 'PPIworkshop_indicators.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeVariant}
    >
      {/* ... (keep other sections the same) */}

      <motion.div className="mb-8 space-y-4" variants={fadeVariant} custom={2}>
        <p className="text-gray-700 leading-relaxed">
          This simulation demonstrates how the PPI tool can project trends of development indicators to 2030 based on current budget allocations, using actual Kenyan data from 2016-2023.
        </p>
        <motion.div 
          className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition cursor-pointer"
          onClick={handleDownload}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          variants={fadeVariant}
          custom={2.5}
        >
          <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Dataset Information (Click to Download)
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><span className="font-medium">Budget data:</span> Newly compiled KNBS data (2016-2023)</li>
            <li><span className="font-medium">Indicator data:</span> 71 SDG indicators covering 44 SDG targets (2016-2023)</li>
            <li><span className="font-medium">Simulation period:</span> Projected to 2030</li>
            <li className="text-blue-600 font-medium mt-2">PPIworkshop_indicators.xlsx (Click to download full dataset)</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="border border-gray-200 rounded-xl p-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 shadow-md"
        variants={fadeVariant}
        custom={3}
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-4">SDG Indicator Simulation Results</h3>

        {/* Graph Image Section */}
        <motion.div 
          className="mb-8 bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          variants={fadeVariant}
          custom={4}
        >
          <img 
            src={SimulationGraph} 
            alt="SDG Indicators Simulation Results" 
            className="w-full h-auto rounded-md"
          />
          <p className="text-xs text-gray-500 mt-2 text-center">
            Simulation results showing projected trends of key SDG indicators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {indicatorData.map((indicator, index) => (
            <motion.div
              key={indicator.indicator_label}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border-l-4"
              style={{ borderLeftColor: indicator.color }}
              variants={fadeVariant}
              custom={5 + index}
            >
              <h4 className="text-md font-medium mb-1 text-gray-800">
                {indicator.indicator_name}
              </h4>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <span>Initial: {(indicator.initial_value * 100).toFixed(1)}%</span>
                  <span className="mx-2">→</span>
                  <span>Final: {(indicator.final_value * 100).toFixed(1)}%</span>
                </div>
                <div className={`flex items-center font-medium ${indicator.direction === "up" ? "text-green-600" : "text-red-600"}`}>
                  {indicator.direction === "up" ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {indicator.change}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-8"
          variants={fadeVariant}
          custom={9}
        >
          <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Change from Initial Conditions Over Time
          </h4>
          <div className="flex flex-wrap gap-4">
            {timePeriods.slice(0, 5).map((period, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg text-center min-w-[60px]">
                <div className="text-xs text-gray-500 mb-1">Year {period}</div>
                <div className={`text-sm font-medium ${
                  changeValues[index] > 0 ? "text-green-600" : 
                  changeValues[index] < 0 ? "text-red-600" : "text-gray-600"
                }`}>
                  {changeValues[index] > 0 ? '+' : ''}{changeValues[index]}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="p-5 bg-blue-50/70 rounded-xl shadow-inner"
          variants={fadeVariant}
          custom={10}
        >
          <h4 className="text-lg font-medium text-blue-800 mb-3">Key Simulation Insights</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">1</span>
              Electricity access shows the most significant improvement (+32%) under current budget allocations
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">2</span>
              Poverty reduction trends are positive but may need accelerated investment to meet SDG targets
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">3</span>
              Health indicators like TB incidence show concerning trends that may require policy intervention
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">4</span>
              The model allows testing different budget scenarios to optimize SDG progress
            </li>
          </ul>
        </motion.div>
      </motion.div>    </motion.div>
  );
};

export default SimulationDemo;