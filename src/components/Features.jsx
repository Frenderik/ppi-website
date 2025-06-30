import { Player } from "@lottiefiles/react-lottie-player";
import aiAnimation from "../assets/features/ai.json";
import transparencyAnimation from "../assets/features/transparency.json";
import impactAnimation from "../assets/features/impact.json";
import userFriendlyAnimation from "../assets/features/user_friendly.json";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Analysis",
      description:
        "Uses agent computing to model socioeconomic agents and their decision-making processes.",
      animation: aiAnimation,
    },
    {
      title: "Transparent Methodology",
      description:
        "Provides clear counterfactual scenarios, unlike black-box machine learning approaches.",
      animation: transparencyAnimation,
    },
    {
      title: "Multidimensional Impact",
      description:
        "Assesses impact across a broad range of development dimensions simultaneously.",
      animation: impactAnimation,
    },
    {
      title: "User-Friendly Tool",
      description:
        "No programming knowledge required to run policy experiments in the web browser.",
      animation: userFriendlyAnimation,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-14">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="mb-5 flex justify-center">
                <Player
                  autoplay
                  loop
                  src={feature.animation}
                  style={{ height: "120px", width: "120px" }}
                />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
