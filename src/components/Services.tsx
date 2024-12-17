const Services = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl font-medium text-center mb-4 text-white">
          Unlock the Power of AI for Your Business
        </h2>
        <p className="text-xl text-center text-white/80 mb-16 max-w-[800px] mx-auto">
          Discover innovative solutions to enhance customer engagement, optimise operations, and streamline processes with our AI services tailored to your unique needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl glass">
            <h3 className="text-2xl font-medium mb-4 text-white">Chatbots</h3>
            <p className="text-white/80">
              Elevate your customer experience with our AI-powered chatbot development service. We design and implement intelligent chatbots that automate conversations, reduce response times, and improve customer satisfaction—tailored precisely to your business needs.
            </p>
          </div>

          <div className="p-8 rounded-xl glass">
            <h3 className="text-2xl font-medium mb-4 text-white">Voice Agents</h3>
            <p className="text-white/80">
              Streamline your customer service with our voice agent setup. We deploy AI-powered voice agents to handle repetitive queries and tasks with precision, ensuring your customers always receive accurate, consistent support - the way you want.
            </p>
          </div>

          <div className="p-8 rounded-xl glass">
            <h3 className="text-2xl font-medium mb-4 text-white">Automation by AI</h3>
            <p className="text-white/80">
              Revolutionise your business operations with our tailored AI automation strategies. Through in-depth consultation and analysis, we develop AI-driven solutions to optimise productivity, reduce costs, and streamline performance for lasting success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;