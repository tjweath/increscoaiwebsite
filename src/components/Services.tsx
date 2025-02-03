const Services = () => {
  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-4 text-white">
          Unlock the Power of AI for Your Business
        </h2>
        <p className="text-xl text-center text-white/60 mb-16 max-w-[800px] mx-auto">
          Discover innovative solutions to enhance customer engagement, optimise operations, and streamline processes with our AI services.
        </p>

        {/* First row of service boxes */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            <img 
              src="/lovable-uploads/76a88cb8-6178-44e3-a414-7cdde24391af.png" 
              alt="Chatbot Icon" 
              className="w-6 h-6 mb-4 filter brightness-0 invert object-contain"
            />
            <h3 className="text-2xl font-medium mb-2 text-white">Chatbots</h3>
            <h4 className="text-lg font-medium mb-4 text-white/80">Streamlined Customer Interactions</h4>
            <p className="text-white/60">
              Enhance your customer engagement with AI-powered chatbots that handle inquiries, reduce wait times, and free your team to focus on higher-value tasks. From design to implementation, we tailor chatbots to your specific goals and platforms.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            <img 
              src="/lovable-uploads/ef7a6962-6684-4e6d-b178-fa5f2c840c21.png" 
              alt="Voice Agent Icon" 
              className="w-6 h-6 mb-4 filter brightness-0 invert object-contain"
            />
            <h3 className="text-2xl font-medium mb-2 text-white">Voice Agents</h3>
            <h4 className="text-lg font-medium mb-4 text-white/80">Personalised, Hands-Free Support</h4>
            <p className="text-white/60">
              Elevate your customer service with AI-driven voice agents. We configure, train, and deploy solutions that handle repetitive queries, schedule appointments, and assist customers—allowing your agents to focus on complex or high-impact requests.
            </p>
          </div>
        </div>

        {/* Second row of service boxes */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            <img 
              src="/lovable-uploads/bf14c70e-5f2d-474b-bcc7-943f8561df9d.png" 
              alt="Integration Icon" 
              className="w-6 h-6 mb-4 filter brightness-0 invert object-contain"
            />
            <h3 className="text-2xl font-medium mb-2 text-white">AI Implementation & Integration</h3>
            <h4 className="text-lg font-medium mb-4 text-white/80">Transformative AI for Your Unique Needs</h4>
            <p className="text-white/60">
              Accelerate efficiency and innovation with AI solutions tailored to your needs—whether that's automating tasks, building custom GPT models, or enhancing analytics. We'll pinpoint high-impact opportunities and integrate AI seamlessly into your workflows for measurable ROI.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            <img 
              src="/lovable-uploads/36c13563-d175-4c17-b2f8-59485e3378a0.png" 
              alt="Partnership Icon" 
              className="w-6 h-6 mb-4 filter brightness-0 invert object-contain"
            />
            <h3 className="text-2xl font-medium mb-2 text-white">Ongoing AI Partnership</h3>
            <h4 className="text-lg font-medium mb-4 text-white/80">Long-Term AI Support</h4>
            <p className="text-white/60">
              For businesses seeking a reliable AI ally beyond initial deployment, we offer flexible, ongoing support that adapts to your evolving goals. From routine performance checks to exploring new opportunities, our role is defined by your needs—so you can focus on growth and stay ahead in a rapidly changing AI landscape.
            </p>
          </div>
        </div>

        {/* Centered Cal.com button */}
        <div className="flex justify-center">
          <button
            data-cal-link="increscoai/incresco-ai-transformation"
            data-cal-namespace="incresco-ai-transformation"
            data-cal-config='{"layout":"month_view"}'
            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
          >
            Transformation Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;