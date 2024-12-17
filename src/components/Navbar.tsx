const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-surface/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-medium text-2xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">PIVOT AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white/60 hover:text-white transition-colors text-sm">HOME</a>
          <a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">SERVICES</a>
          <a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">ABOUT</a>
          <a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">CONTACT</a>
          <a 
            href="#contact" 
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-colors border border-white/10"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;