const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 dot-pattern opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h1 className="text-[80px] leading-[1] font-medium tracking-[-0.02em] text-white mb-8">
          AI Solutions to Pivot<br />Your Business Forward
        </h1>
        
        <div className="max-w-[800px] mx-auto mb-12">
          <p className="text-xl text-white/80">
            Welcome to Pivot-AI, where we bring the power of artificial intelligence to your business.
            Our mission is to identify and automate repetitive, time-consuming tasks, unlocking efficiency and innovation.
            Let us show you how AI can transform your operations, helping you pivot to a smarter, more streamlined future.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto space-y-4 bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-white">Benefits of AI Automation</h2>
          <ul className="text-left space-y-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent"></span>
              <div className="text-white/90">
                <span className="font-semibold">Increased Efficiency and Productivity: </span>
                AI automation streamlines workflows, handles repetitive tasks, and allows businesses to accomplish more in less time.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent"></span>
              <div className="text-white/90">
                <span className="font-semibold">Cost Savings: </span>
                By automating tasks, businesses can reduce operational expenses, minimize errors, and save on labor costs.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent"></span>
              <div className="text-white/90">
                <span className="font-semibold">Enhanced Customer Experience: </span>
                AI solutions ensure faster response times, personalized interactions, and 24/7 availability.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent"></span>
              <div className="text-white/90">
                <span className="font-semibold">Better Decision-Making Through Data Insights: </span>
                AI leverages data to provide actionable insights, helping businesses make smarter, data-driven decisions.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent"></span>
              <div className="text-white/90">
                <span className="font-semibold">Error Reduction: </span>
                Automation eliminates human error in routine and repetitive processes, leading to greater accuracy and reliability.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;