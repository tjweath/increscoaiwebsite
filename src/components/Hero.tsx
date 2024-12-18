const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-gray-50 rounded-full border border-gray-200">
          <span className="text-sm text-gray-600">Announcing our new AI automation services</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 mb-8 max-w-[900px] mx-auto leading-[1.1]">
          AI Solutions to Pivot<br />Your Business Forward
        </h1>
        
        <div className="max-w-[600px] mx-auto mb-12">
          <p className="text-lg text-gray-600">
            Welcome to Pivot-AI, where we bring the power of artificial intelligence to your business.
            Our mission is to identify and automate repetitive tasks, unlocking efficiency and innovation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Book a Demo
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            View Services
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1000px] mx-auto">
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Increased Efficiency</h3>
            <p className="text-gray-600 text-sm">Streamline operations and boost productivity through AI automation</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Cost Savings</h3>
            <p className="text-gray-600 text-sm">Reduce operational costs through intelligent process optimization</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Enhanced Experience</h3>
            <p className="text-gray-600 text-sm">Deliver superior customer service through AI-powered solutions</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Better Insights</h3>
            <p className="text-gray-600 text-sm">Make data-driven decisions with advanced analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;