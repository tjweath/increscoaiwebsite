const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openCalendar = () => {
    // @ts-ignore - Cal is added by the script
    if (window.Cal) {
      window.Cal("init", "incresco-ai-transformation");
      window.Cal("showModal", {
        calLink: "increscoai/incresco-ai-transformation",
        config: {
          hideEventTypeDetails: false,
          layout: "month_view"
        }
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-medium text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">INCRESCO AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={scrollToTop} className="text-foreground/70 hover:text-foreground transition-colors text-sm">HOME</button>
          <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors text-sm">SERVICES</a>
          <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors text-sm">ABOUT</a>
          <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors text-sm">CONTACT</a>
          <button 
            onClick={openCalendar}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition-opacity"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;