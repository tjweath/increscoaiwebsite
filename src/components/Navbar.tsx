const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-lg border-b border-emerald-100">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-medium text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">INCRESCO AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={scrollToTop} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">HOME</button>
          <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">SERVICES</a>
          <a href="#process" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">PROCESS</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">ABOUT</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;