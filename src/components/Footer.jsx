const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PPI Project</h3>
            <p className="text-gray-300">
              Assessing the impact of public spending across development dimensions using AI.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/simulation" className="text-gray-300 hover:text-white">Simulation Tool</a></li>
              <li><a href="/resources" className="text-gray-300 hover:text-white">Resources</a></li>
            </ul>
          </div>
          <div>
          <h3 className="text-xl font-bold mb-4">
  <a href="/contact">Contact</a>
</h3>
            <p className="text-gray-300">Email: info@ppiproject.org</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PPI Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;