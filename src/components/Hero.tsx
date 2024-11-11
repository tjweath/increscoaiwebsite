const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-transparent"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-float">
          Simplify Your Digital Experience
        </h1>
        <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-12">
          Streamline your workflow with our intuitive platform designed for modern teams
        </p>
        <button className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-20 transition-all duration-300 shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;