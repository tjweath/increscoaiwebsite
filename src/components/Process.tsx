const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Our Process</h2>
        
        <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          At Incresco AI, we are committed to guiding our clients through a transparent and transformative journey with AI.
        </p>

        <div className="relative">
          {/* Diagonal line */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform -rotate-12 hidden md:block" />

          {/* Timeline items */}
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              {
                title: "Discovery",
                description: "Understand your business challenges and explore how AI can help.",
                delay: "0"
              },
              {
                title: "Proposal",
                description: "Present a tailored AI solution and actionable roadmap to achieve your goals.",
                delay: "100"
              },
              {
                title: "Implementation",
                description: "Build, test, and launch your AI solution with accuracy and care.",
                delay: "200"
              },
              {
                title: "On-going Support",
                description: "Optimise, update, and support your solution as your business grows.",
                delay: "300"
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg shadow-lg relative z-10 transform hover:-translate-y-2 transition-transform duration-300"
                style={{
                  animation: `fade-in 0.5s ease-out ${item.delay}ms forwards`,
                  opacity: 0
                }}
              >
                <div className="h-12 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;