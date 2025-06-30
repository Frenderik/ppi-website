const TutorialSteps = () => {
  const steps = [
    {
      step: 1,
      title: "Upload Indicator Data",
      description: "Upload your dataset containing development indicators you want to analyze."
    },
    {
      step: 2,
      title: "Upload Expenditure Data",
      description: "Provide data on government expenditure allocations across sectors."
    },
    {
      step: 3,
      title: "Define Dependencies (Optional)",
      description: "Upload a network of interdependencies between indicators if available."
    },
    {
      step: 4,
      title: "Calibrate Parameters",
      description: "Adjust model parameters to match your specific context and assumptions."
    },
    {
      step: 5,
      title: "Run Simulations",
      description: "Execute prospective simulations to see the impact of different policy scenarios."
    }
  ];

  return (
    <div className="bg-gradient-to-tr from-white via-blue-50 to-white p-8 rounded-2xl shadow-xl mb-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
        Five Simple Steps to Run a Simulation
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((item) => (
          <div
            key={item.step}
            className="bg-white border-l-4 border-blue-600 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
            </div>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialSteps;
