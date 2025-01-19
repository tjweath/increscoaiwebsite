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
            <h3 className="text-2xl font-medium mb-2 text-white">Chatbots</h3>
            <h4 className="text-lg font-medium mb-4 text-white/80">Streamlined Customer Interactions.</h4>
            <p className="text-white/60">
              Enhance your customer engagement with AI-powered chatbots that handle inquiries, reduce wait times, and free your team to focus on higher-value tasks. From design to implementation, we tailor chatbots to your specific goals and platforms.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-medium mb-2 text-white">Voice Agents</h3>
            <h4 className="text-lg font-medium mb-4 text-white/80">Personalised, Hands-Free Support.</h4>
            <p className="text-white/60">
              Elevate your customer service with AI-driven voice agents. We configure, train, and deploy solutions that handle repetitive queries, schedule appointments, and assist customers—allowing your agents to focus on complex or high-impact requests.
            </p>
          </div>
        </div>

        {/* Centered Cal.com button */}
        <div className="flex justify-center mb-8">
          <button
            data-cal-link="increscoai/incresco-ai-consultation"
            data-cal-namespace="incresco-ai-consultation"
            data-cal-config='{"layout":"month_view"}'
            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
          >
            Transformation Call
          </button>
        </div>

        {/* Second row of service boxes */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-medium mb-2 text-white">AI Implementation & Integration</h3>
            <h4 className="text-lg font-medium mb-4 text-white/80">Transformative AI for Your Unique Needs.</h4>
            <p className="text-white/60">
              Accelerate efficiency and innovation with AI solutions tailored to your needs—whether that's automating tasks, building custom GPT models, or enhancing analytics. We'll pinpoint high-impact opportunities and integrate AI seamlessly into your workflows for measurable ROI.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-medium mb-2 text-white">Ongoing AI Partnership</h3>
            <h4 className="text-lg font-medium mb-4 text-white/80">Long-Term Optimisation & Support.</h4>
            <p className="text-white/60">
              Ensure your AI initiatives stay ahead of the curve with our continuous partnership plan. From performance monitoring and model retraining to feature expansions, we'll keep your AI solutions running at peak efficiency—so you can focus on growth without worrying about technical upkeep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
