const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 mb-6 max-w-[1000px] mx-auto leading-tight">
            Transformation with AI
          </h1>
          
          <div className="max-w-[600px] mx-auto mb-8">
            <p className="text-lg text-gray-600">
              Welcome to Incresco AI, where we bring the power of artificial intelligence to your business. Inspired by the Latin 'incresco,' meaning growth and progress, we craft solutions that enhance efficiency, streamline interactions, and unlock innovation.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#services" 
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="space-y-8 max-w-[1000px] mx-auto">
          {/* First Row - Keeping the original image */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 h-[350px] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Person working efficiently on a laptop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-5 rounded-xl bg-white/80 backdrop-blur border border-emerald-100 shadow-sm">
              <h3 className="text-2xl font-medium text-gray-900 mb-3">Increased Efficiency</h3>
              <p className="text-gray-600">Unlock new levels of productivity through AI-driven solutions aligned to your existing workflows</p>
            </div>
          </div>

          {/* Second Row - Updated image */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2 h-[350px] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="Business analytics and cost optimization"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-5 rounded-xl bg-white/80 backdrop-blur border border-emerald-100 shadow-sm">
              <h3 className="text-2xl font-medium text-gray-900 mb-3">Cost Savings</h3>
              <p className="text-gray-600">Reduce operational costs by identifying the most impactful areas for intelligent process optimisation</p>
            </div>
          </div>

          {/* Third Row - Updated image */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 h-[350px] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Team collaboration and enhanced user experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-5 rounded-xl bg-white/80 backdrop-blur border border-emerald-100 shadow-sm">
              <h3 className="text-2xl font-medium text-gray-900 mb-3">Enhanced Experience</h3>
              <p className="text-gray-600">Boost customer satisfaction through the right mix of AI-powered interactions—whether chatbots, voice agents, or data-driven insights</p>
            </div>
          </div>

          {/* Fourth Row - Updated image */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2 h-[350px] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Data visualization and business insights"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-5 rounded-xl bg-white/80 backdrop-blur border border-emerald-100 shadow-sm">
              <h3 className="text-2xl font-medium text-gray-900 mb-3">Better Insights</h3>
              <p className="text-gray-600">Make confident, data-driven decisions by leveraging advanced analytics customised to your business needs</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 mb-16">
          <p className="text-gray-600 text-lg">
            We help clients achieve one or all of these core benefits, depending on their unique goals and processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
