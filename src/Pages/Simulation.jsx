import TutorialSteps from '../components/TutorialSteps';
import SimulationDemo from '../components/SimulationDemo';
import animationData from '../assets/features/application.png';

const Simulation = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-12 text-center drop-shadow">
          PPI Simulation Tool
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600 mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Online PPI Application</h2>
          <p className="text-gray-700 mb-3">
            The PPI online app allows for calibrating model parameters and running policy experiments
            using real-world data directly in your browser. All computations are performed locally on
            your machine for full data privacy.
          </p>
          <p className="text-gray-700">
            No coding required. The interface is built to empower policy analysts and decision-makers
            through an intuitive simulation environment.
          </p>
        </div>

        {/* Step-by-step and demo sections */}
        <TutorialSteps />
        <SimulationDemo />

        <div className="bg-blue-100 p-8 rounded-2xl border border-blue-300 mt-14 text-center shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Launch the Simulation Tool</h2>
          <p className="text-gray-700 mb-6">
            Click below to access the interactive PPI simulation platform:
          </p>
          <a
            href="https://policypriority.org/ppiapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transform transition-transform hover:scale-105"
          >
            <img
              src={animationData}
              alt="Launch Simulation"
              className="mx-auto rounded-xl shadow-md border border-blue-200"
              style={{
                height: '160px',
                width: '320px',
                animation: 'float 1.5s ease-in-out infinite',
              }}
            />
          </a>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Simulation;
