const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="relative z-10 mx-auto px-4">
        <div className="text-center mb-12 max-w-[1200px] mx-auto pt-16">
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

        <div>
          {/* Increased Efficiency Section */}
          <div className="w-full bg-white">
            <div className="max-w-[1920px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="p-12 md:p-24 space-y-4">
                  <h3 className="text-2xl font-medium text-gray-900">Increased Efficiency</h3>
                  <p className="text-gray-600 leading-relaxed max-w-[400px]">
                    Unlock new levels of productivity through AI-driven solutions aligned to your existing workflows.
                  </p>
                </div>
                <div className="h-[600px]">
                  <img 
                    src="/lovable-uploads/a167f41b-12f7-4227-93fa-beee92d4a022.png"
                    alt="Multimodal AI model visualization showing interconnected nodes and patterns"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cost Savings Section */}
          <div className="w-full bg-gray-50">
            <div className="max-w-[1920px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1 h-[600px]">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                    alt="Abstract data visualization representing AI processing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 md:order-2 p-12 md:p-24 space-y-4">
                  <h3 className="text-2xl font-medium text-gray-900">Cost Savings</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reduce operational costs by identifying the most impactful areas for intelligent process optimisation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Experience Section */}
          <div className="w-full bg-white">
            <div className="max-w-[1920px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="p-12 md:p-24 space-y-4">
                  <h3 className="text-2xl font-medium text-gray-900">Enhanced Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Boost customer satisfaction through the right mix of AI-powered interactions—whether chatbots, voice agents, or data-driven insights.
                  </p>
                </div>
                <div className="h-[600px]">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                    alt="Digital network visualization showing AI connections"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Better Insights Section */}
          <div className="w-full bg-gray-50">
            <div className="max-w-[1920px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1 h-[600px]">
                  <img 
                    src="/lovable-uploads/8491f4e7-e18d-4776-82da-afcba3d99319.png"
                    alt="Data analysis visualization showing charts and graphs with magnifying glass"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 md:order-2 p-12 md:p-24 space-y-4">
                  <h3 className="text-2xl font-medium text-gray-900">Better Insights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Make confident, data-driven decisions by leveraging advanced analytics customised to your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-24 mb-16 max-w-[1200px] mx-auto">
          <p className="text-gray-600 text-lg">
            We help clients achieve one or all of these core benefits, depending on their unique goals and processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
