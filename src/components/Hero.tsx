const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 mb-8 max-w-[1000px] mx-auto leading-tight">
          Transformation with AI
        </h1>
        
        <div className="max-w-[600px] mx-auto mb-12">
          <p className="text-lg text-gray-600">
            Welcome to Incresco AI, where we bring the power of artificial intelligence to your business. Inspired by the Latin 'incresco,' meaning growth and progress, we craft solutions that enhance efficiency, streamline interactions, and unlock innovation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#services" 
            className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View Services
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1000px] mx-auto mb-8">
          <div className="p-6 rounded-xl bg-white/80 backdrop-blur border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Increased Efficiency</h3>
            <p className="text-gray-600 text-sm">Unlock new levels of productivity through AI-driven solutions aligned to your existing workflows</p>
          </div>
          
          <div className="p-6 rounded-xl bg-white/80 backdrop-blur border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Cost Savings</h3>
            <p className="text-gray-600 text-sm">Reduce operational costs by identifying the most impactful areas for intelligent process optimisation</p>
          </div>
          
          <div className="p-6 rounded-xl bg-white/80 backdrop-blur border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Enhanced Experience</h3>
            <p className="text-gray-600 text-sm">Boost customer satisfaction through the right mix of AI-powered interactions—whether chatbots, voice agents, or data-driven insights</p>
          </div>
          
          <div className="p-6 rounded-xl bg-white/80 backdrop-blur border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Better Insights</h3>
            <p className="text-gray-600 text-sm">Make confident, data-driven decisions by leveraging advanced analytics customised to your business needs</p>
          </div>
        </div>

        <p className="text-gray-600 text-lg mb-24">
          We help clients achieve one or all of these core benefits, depending on their unique goals and processes.
        </p>
      </div>
    </div>
  );
};

export default Hero;