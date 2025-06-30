import ContactForm from '../components/ContactForm';
import { Mail, Globe, Landmark } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Have questions about the PPI methodology or the simulation tool? Interested in implementing PPI in your country or organization? We’d love to hear from you.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <Mail className="text-blue-700 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a 
                    href="mailto:info@ppiproject.org" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    info@ppiproject.org
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Landmark className="text-blue-700 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Institution</h3>
                  <p></p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Globe className="text-blue-700 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Project Website</h3>
                  <a
                    href="https://policypriority.org"
                    className="text-blue-600 hover:text-blue-800 break-all transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://policypriority.org
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
