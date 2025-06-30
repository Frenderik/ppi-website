import { useState } from 'react';
import { Book, Link2, Video, Download, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const [openCleanIndex, setOpenCleanIndex] = useState(null);
  const [openRawIndex, setOpenRawIndex] = useState(null);
  const [downloadFile, setDownloadFile] = useState(null);
  const navigate = useNavigate();

  const documents = [
    {
      title: "Tutorial Based on:",
      cleanData: [
        "data_expenditure.csv",
        "data_indicators.csv",
        "data_network.csv",
        "data_relational_table.csv"
      ],
      rawData: [
        "01a - data preparation (indicators).ipynb",
        "01b - data preparation (interdependency network).ipynb",
        "01c - data preparation (expenditure).ipynb",
        "02 - model calibration.ipynb"
      ]
    },
    {
      title: "Kenya Case Study Presentation",
      description: "Presentation slides detailing the PPI implementation in Kenya, including key findings and insights. View Kenyan implementation in: ",
      link: "UKKEAI_PPI_workshop.pptx",
      linkText: "PPI for Kenya"
    },
    {
      title: "Simulation Tool User Manual",
      description: "Step-by-step instructions for using the online PPI application with practical examples.",
      buttonText: "Go to Simulation Tool",
      buttonAction: () => navigate('/simulation')
    },
  ];

  const links = [
    {
      title: "Policy Priority Institute",
      url: "https://policypriority.org",
      description: "Home organization for the PPI project"
    },
    {
      title: "PPI Application",
      url: "https://policypriority.org/ppiapp",
      description: "Direct link to the simulation tool"
    },
    {
      title: "Kenya National Bureau of Statistics",
      url: "https://www.knbs.or.ke",
      description: "Key data source for Kenyan statistics"
    }
  ];

  const handleDownloadClick = (file) => {
    setDownloadFile(file);
  };

  const confirmDownload = () => {
    const link = document.createElement("a");
    link.href = `/${downloadFile}`;
    link.download = downloadFile;
    link.click();
    setDownloadFile(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white text-gray-900 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900">
            Resources
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access documentation for Kenyan Research, training materials, and useful links for the PPI simulation tool
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Documentation Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Book className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Documentation</h2>
            </div>
            <ul className="space-y-6">
              {documents.map((doc, index) => (
                <li key={index} className="border-l-2 border-blue-500 pl-4 py-1">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">{doc.title}</h3>
                  {doc.description && (
                    <p className="text-sm text-gray-600 mb-3">
                      {doc.description}
                      {doc.linkText && (
                        <button
                          onClick={() => handleDownloadClick(doc.link)}
                          className="text-blue-600 hover:text-blue-800 underline ml-1"
                        >
                          {doc.linkText}
                        </button>
                      )}
                    </p>
                  )}

                  {doc.buttonText && (
                    <button
                      onClick={doc.buttonAction}
                      className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 font-medium transition-colors mb-3 text-sm px-4 py-2 rounded-md"
                    >
                      {doc.buttonText}
                    </button>
                  )}

                  {doc.link && !doc.linkText && !doc.buttonText && (
                    <a
                      href={doc.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors mb-3 text-sm px-3 py-1.5 rounded-md bg-blue-50 hover:bg-blue-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2" size={14} />
                      Download PDF
                    </a>
                  )}

                  {doc.cleanData && (
                    <div className="mb-3">
                      <button
                        onClick={() =>
                          setOpenCleanIndex(openCleanIndex === index ? null : index)
                        }
                        className="text-blue-600 font-medium flex items-center gap-2 hover:text-blue-800 text-sm px-3 py-1.5 rounded-md hover:bg-blue-50"
                      >
                        {openCleanIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        Clean Data Files
                      </button>
                      {openCleanIndex === index && (
                        <ul className="mt-2 ml-2 space-y-2">
                          {doc.cleanData.map((file, i) => (
                            <li key={i}>
                              <button
                                onClick={() => handleDownloadClick(file)}
                                className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-2 w-full px-3 py-1.5 rounded-md hover:bg-blue-50"
                              >
                                <Download size={14} />
                                <span className="text-left truncate">{file}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {doc.rawData && (
                    <div className="mb-3">
                      <button
                        onClick={() =>
                          setOpenRawIndex(openRawIndex === index ? null : index)
                        }
                        className="text-blue-600 font-medium flex items-center gap-2 hover:text-blue-800 text-sm px-3 py-1.5 rounded-md hover:bg-blue-50"
                      >
                        {openRawIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        Raw Data Files
                      </button>
                      {openRawIndex === index && (
                        <ul className="mt-2 ml-2 space-y-2">
                          {doc.rawData.map((file, i) => (
                            <li key={i}>
                              <button
                                onClick={() => handleDownloadClick(file)}
                                className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-2 w-full px-3 py-1.5 rounded-md hover:bg-blue-50"
                              >
                                <Download size={14} />
                                <span className="text-left truncate">{file}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Link2 className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Useful Links</h2>
            </div>
            <ul className="space-y-6">
              {links.map((link, index) => (
                <li key={index} className="border-l-2 border-blue-500 pl-4 py-1">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">{link.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                  <a
                    href={link.url}
                    className="inline-block text-blue-600 hover:text-blue-800 text-sm break-all px-3 py-1.5 rounded-md bg-blue-50 hover:bg-blue-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Training Materials Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Video className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Training Materials</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Video Tutorials</h3>
              <div className="rounded-xl overflow-hidden mb-3 aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/V4dUUt2KmJI"
                  title="PPI Simulation Tool Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600">
                Step-by-step video guide for using the PPI simulation tool.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Sample Datasets</h3>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex items-center justify-between mb-3 hover:bg-gray-100 transition-colors">
                <span className="text-sm font-medium text-gray-700 truncate pr-2">development_indicators_template.xlsx</span>
                <button
                  onClick={() => handleDownloadClick("development_indicators_template.xlsx")}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 shrink-0"
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Sample data files to practice with the simulation tool.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Confirmation Modal */}
      {downloadFile && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center relative border border-gray-100">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setDownloadFile(null)}
            >
              <X size={20} />
            </button>
            <div className="p-4">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                <Download className="text-blue-600" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Download File</h3>
              <p className="mb-6 text-gray-600 text-sm">
                Are you sure you want to download <strong className="text-gray-800">{downloadFile}</strong>?
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={confirmDownload}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Download
                </button>
                <button
                  onClick={() => setDownloadFile(null)}
                  className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resources;