import TuringLogo from '../assets/turing-logo.png';

import KNBSLogo from '../assets/knbs-logo.png';
import KICTANETLogo from '../assets/kictanet-logo.png';
import UKDevLogo from '../assets/uk-devlogo.png';
import JKUATLogo from '../assets/jkuat_logo.png';
import IDSLogo from '../assets/ids-logo.png';
import ACTSLogo from '../assets/acts-logo.png';
import Researcher1 from '../assets/researcher1.jpeg';
import Researcher2 from '../assets/researcher2.png';
import Researcher3 from '../assets/researcher3.png';
import Researcher4 from '../assets/researcher4.png';
import Researcher5 from '../assets/researcher5.png';
import Researcher6 from '../assets/researcher6.png';
import Researcher7 from '../assets/researcher7.png';
import Researcher8 from '../assets/researcher8.png';
import Researcher9 from '../assets/researcher9.png';
import Researcher10 from '../assets/researcher10.png';
import Researcher11 from '../assets/researcher11.png';
import Researcher12 from '../assets/researcher12.png';
import Researcher13 from '../assets/researcher13.png';
import Researcher14 from '../assets/researcher14.png';
import Researcher15 from '../assets/researcher15.png';


const About = () => {
  const teamMembers = [
    {
      name: "Dr Daniele Guariso",
      institution: "The Alan Turing Institute",
      photo: Researcher6
    },
    {
      name: "Dr Omar A. Guerrero",
      institution: "The Alan Turing Institute",
      photo: Researcher5
    },
    {
      name: "Mr Rajab Mbaruk ",
      institution: "Kenya National Bureau of Statistics",
      photo: Researcher13
    },
    {
      name: "Dr. Lawrence Nderu",
     
      institution: "Jomo Kenyatta University of Agriculture and Technology",
      photo: Researcher1
    },
    {
      name: "Mr Geofrey Kagombe",
      institution: "Jomo Kenyatta University of Agriculture and Technology",
      photo: Researcher2
    },
    {
      name: "Ms Deepika Ravikrishnan ",
      institution: "Institute of Development Studies",
      photo: Researcher3
    },
    {
      name: "Dr Marco Carreras",
      institution: "Institute of Development Studies",
      photo: Researcher4
    },
    
    
    {
      name: "Dr Patrick Gikunda",
      institution: "Dedan Kimathi University of Technology",
      photo: Researcher7
    },
    {
      name: "Ms Leah Wambugu ",
      institution: "Kenya National Bureau of Statistics",
      photo: Researcher8
    },
    {
      name: "Ms Linah Ngumba ",
      institution: "Kenya National Bureau of Statistics",
      photo: Researcher9
    },
    {
      name: "Dr Macdonald Obudho ",
      institution: "Kenya National Bureau of Statistics",
      photo: Researcher10
    },
    {
      name: "Mr Benjamin Muchiri ",
      institution: "Kenya National Bureau of Statistics",
      photo: Researcher11
    },
    {
      name: "Mr Hiram Mbatia ",
      institution: "Kenya National Bureau of Statistics",
      photo: Researcher12
    },
    
    {
      name: "Mr Samuel Wanjau ",
      institution: "African Centre for Technology Studies",
      photo: Researcher14
    },
    {
      name: "Mr Ben Jackson",
      institution: "Institute of Development Studies",
      photo: Researcher15
    }


  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
          About the PPI Project
        </h1>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Project Overview</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The Policy Priority Inference (PPI) is a methodology that assists decision-makers in assessing the impact of public spending across a broad range of development dimensions, at a disaggregation level that is difficult to study with existing quantitative tools.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PPI supports evidence-based policymaking while considering real-world features of the institutional environment analyzed. It relies upon a specific type of Artificial Intelligence (AI) called agent computing, which allows modelling–in great detail–socioeconomic agents and their decision-making processes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This provides a transparent alternative to black-box approaches such as machine learning.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Kenya Implementation</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            In the project, we explored the quality and suitability of existing data sources for building a PPI prototype for Kenya. We undertook a deep assessment of the available information on Government expenditure and development outcomes, compiling novel datasets with broader implications for public financial management and sustainable development.
          </p>
          
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2 inline-block relative">
              Our Valued Collaboration
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full transform translate-y-1"></span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading institutions to deliver impactful policy analysis
            </p>
          </div>
          
          {/* Partner Organizations Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
{/* JKUAT */}
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-all p-3">
        <img src={JKUATLogo} alt="JKUAT Logo" className="max-h-full max-w-full object-contain" />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">JKUAT</h4>
      <p className="text-gray-600 text-sm mb-3">
        Technical expertise in data science
      </p>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-2"></div>
      <p className="text-gray-700 text-sm">
        Model validation and government analyst training
      </p>
      <p className="text-gray-700 text-sm mt-2">
        For inquiries, email us at: 
        <a href="mailto:info.jhub@jkuat.ac.ke" className="text-blue-600 hover:text-blue-800">info.jhub@jkuat.ac.ke</a>
      </p>
      <a href="https://www.jkuat.ac.ke/" target="_blank" rel="noopener noreferrer" className="mt-3 text-blue-600 hover:text-blue-800 text-xs font-medium inline-flex items-center">
        Visit website <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>

  {/* Alan Turing Institute - NEW ADDITION */}
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-all p-3">
      <img src={TuringLogo} alt="Turing Logo" className="max-h-full max-w-full object-contain" />
        
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">The Alan Turing Institute</h4>
      <p className="text-gray-600 text-sm mb-3">
        PPI methodology development
      </p>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-2"></div>
      <p className="text-gray-700 text-sm">
        UK's national institute for AI and data science
      </p>
      <a href="https://www.turing.ac.uk/" target="_blank" rel="noopener noreferrer" className="mt-3 text-blue-600 hover:text-blue-800 text-xs font-medium inline-flex items-center">
        Visit website <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>

  
  {/* KNBS */}
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-all p-3">
        <img src={KNBSLogo} alt="KNBS Logo" className="max-h-full max-w-full object-contain" />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">Kenya National Bureau of Statistics</h4>
      <p className="text-gray-600 text-sm mb-3">
        Provided critical datasets for model calibration
      </p>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-2"></div>
      <p className="text-gray-700 text-sm">
        Kenya's principal agency for statistical data collection and analysis
      </p>
      <a href="https://acts-net.org/" target="_blank" rel="noopener noreferrer" className="mt-3 text-blue-600 hover:text-blue-800 text-xs font-medium inline-flex items-center">
        Visit website <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
  
  {/* KICTANET */}
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-all p-3">
        <img src={KICTANETLogo} alt="KICTANET Logo" className="max-h-full max-w-full object-contain" />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">Kenya ICT Action Network</h4>
      <p className="text-gray-600 text-sm mb-3">
        Digital policy and technology governance expertise
      </p>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-2"></div>
      <p className="text-gray-700 text-sm">
        Ensuring ICT considerations in policy impact assessment
      </p>
      <a href="https://www.kictanet.or.ke/" target="_blank" rel="noopener noreferrer" className="mt-3 text-blue-600 hover:text-blue-800 text-xs font-medium inline-flex items-center">
        Visit website <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
  
  
  
  
  
  {/* Institute of Development Studies */}
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-all p-3">
        <img src={IDSLogo} alt="IDS Logo" className="max-h-full max-w-full object-contain" />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">Institute of Development Studies</h4>
      <p className="text-gray-600 text-sm mb-3">
        Global development expertise
      </p>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-2"></div>
      <p className="text-gray-700 text-sm">
        Shaping impact assessment frameworks
      </p>
      <a href="https://www.jkuat.ac.ke/" target="_blank" rel="noopener noreferrer" className="mt-3 text-blue-600 hover:text-blue-800 text-xs font-medium inline-flex items-center">
        Visit website <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
  
  {/* African Center for Technology Studies */}
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-all p-3">
        <img src={ACTSLogo} alt="ACTS Logo" className="max-h-full max-w-full object-contain" />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">African Center for Technology Studies</h4>
      <p className="text-gray-600 text-sm mb-3">
        Science and innovation policy expertise
      </p>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-2"></div>
      <p className="text-gray-700 text-sm">
        Integrating technology change considerations
      </p>
      <a href="https://acts-net.org/" target="_blank" rel="noopener noreferrer" className="mt-3 text-blue-600 hover:text-blue-800 text-xs font-medium inline-flex items-center">
        Visit website <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
</div>
          
          {/* Collaborative Achievements */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-blue-200 opacity-20"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-blue-300 opacity-20"></div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Collaborative Achievements
              </h4>
              <p className="text-gray-700 mb-6">
                Through our partnership network, we've delivered significant outcomes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/80 p-4 rounded-lg backdrop-blur-sm border border-white">
                  <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Data & Modeling
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mt-1 mr-1 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Integrated expenditure and outcome datasets
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mt-1 mr-1 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Validated agent-based models for Kenya
                    </li>
                  </ul>
                </div>
                <div className="bg-white/80 p-4 rounded-lg backdrop-blur-sm border border-white">
                  <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Capacity Building
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mt-1 mr-1 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Training programs for government analysts
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mt-1 mr-1 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Practical policy briefs and frameworks
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Members Section */}
        {/* Team Members Section */}
<div className="mt-12 p-8 bg-white rounded-2xl border border-gray-200">
  <h4 className="text-2xl font-bold text-blue-800 mb-6 text-center">
    Project Collaborators
  </h4>
  <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
    Meet the dedicated team of researchers and experts who contributed to the Kenyan implementation of the PPI project
  </p>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {teamMembers.map((member, index) => (
      <div key={index} className="flex flex-col items-center p-2">
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center w-full">
          <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-blue-100">
            <img 
              src={member.photo} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h5 className="text-md font-semibold text-gray-800 line-clamp-2 h-12 flex items-center justify-center">
            {member.name}
          </h5>
          <p className="text-black text-xs font-medium mt-1 line-clamp-2 h-10 flex items-center justify-center">
            {member.institution}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Long-Term Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our objective is to provide Kenya with a fully integrated AI analytical tool that can assist domain experts, practitioners and decision-makers. By embedding PPI into existing monitoring and evaluation processes with our partner institutions, we aim to support evidence-based policymaking and foster inclusive growth and sustainable futures, positioning Kenya at the frontier of AI-informed impact evaluation practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;