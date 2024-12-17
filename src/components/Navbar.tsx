const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-lg">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-medium text-[#141413]">PIVOT AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-[#141413] hover:text-[#141413]/80 transition-colors">HOME</a>
          <a href="#services" className="text-[#141413] hover:text-[#141413]/80 transition-colors">SERVICES</a>
          <a href="#about" className="text-[#141413] hover:text-[#141413]/80 transition-colors">ABOUT</a>
          <a href="#contact" className="text-[#141413] hover:text-[#141413]/80 transition-colors">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;