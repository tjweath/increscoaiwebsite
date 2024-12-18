const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-8 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2024 Pivot-AI. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;