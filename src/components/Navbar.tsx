const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-primary/80 backdrop-blur-lg">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-medium text-white">PIVOT AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white/80 hover:text-white transition-colors">HOME</a>
          <a href="#services" className="text-white/80 hover:text-white transition-colors">SERVICES</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">ABOUT</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;