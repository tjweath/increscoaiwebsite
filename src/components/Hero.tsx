const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-transparent"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-float">
          Save time & money on AWS
        </h1>
        <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-12">
          Savings, visibility, and infrastructure guardrails.
          <br />
          One automated platform.
        </p>
        <button className="bg-highlight px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg">
          Book a demo
        </button>

        <div className="mt-24 glass rounded-3xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary rounded-lg"></div>
              <span className="text-lg">All Accounts</span>
              <span className="text-lg">Dashboard</span>
            </div>
            <div className="flex space-x-4 text-sm text-secondary">
              <span>1M</span>
              <span>3M</span>
              <span>6M</span>
              <span>1Y</span>
              <span>ALL</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">$50,104</h3>
              <p className="text-secondary">Net spend</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">$20,062</h3>
              <p className="text-secondary">Saved</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">$5,910</h3>
              <p className="text-secondary">Pending savings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;