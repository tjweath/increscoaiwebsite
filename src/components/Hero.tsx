const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 bg-surface">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
          <span className="text-sm text-white/60">Announcing our new AI automation services</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 max-w-[900px] mx-auto leading-[1.1]">
          AI Solutions to Pivot<br />Your Business Forward
        </h1>
        
        <div className="max-w-[600px] mx-auto mb-12">
          <p className="text-lg text-white/60">
            Welcome to Pivot-AI, where we bring the power of artificial intelligence to your business.
            Our mission is to identify and automate repetitive tasks, unlocking efficiency and innovation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-white text-surface rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Book a Demo
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/10"
          >
            View Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;