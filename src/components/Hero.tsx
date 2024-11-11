const Hero = () => {
  return (
    <section className="hero relative pt-24 md:pt-32 z-10 px-6 md:px-20">
      <div className="hero-background max-w-[1152px] -z-10 absolute left-1/2 -translate-x-1/2 top-0 w-[calc(100%-120px)] hidden md:block">
        {/* Left vertical lines */}
        <div className="absolute top-0 left-0 w-[1px] h-[102px] bg-neutral-opaque-10 rounded-sm" />
        <div className="absolute top-[122px] left-0 w-[1px] h-[172px] bg-neutral-opaque-10 rounded-sm overflow-hidden">
          <div className="absolute w-full h-40 bg-gradient-to-b from-white/20 to-transparent animate-dots" style={{ animationDelay: "0.6s" }} />
        </div>
        <div className="absolute top-[314px] left-0 w-[1px] h-[162px] bg-neutral-opaque-10 rounded-sm overflow-hidden">
          <div className="absolute w-full h-40 bg-gradient-to-b from-white/20 to-transparent animate-dots" style={{ animationDelay: "2.4s" }} />
        </div>
        
        {/* Left dots */}
        <div className="absolute top-[109.5px] left-[-6px] w-4 h-4 bg-neutral-opaque-8 rounded-full" />
        <div className="absolute top-[301.5px] left-[-6px] w-4 h-4 bg-neutral-opaque-8 rounded-full" />
        <div className="absolute top-[483px] left-[-52px] w-26 h-26 bg-neutral-opaque-10 rounded-full">
          <div className="absolute inset-0 m-auto w-4 h-4 bg-neutral-opaque-8 rounded-full" />
          <div className="absolute inset-1 rounded-full bg-[#ffffffc2] backdrop-blur-sm" style={{ animationDelay: "0.6s" }} />
        </div>

        {/* Right vertical lines - mirror of left side */}
        <div className="absolute top-0 right-0 w-[1px] h-[102px] bg-neutral-opaque-10 rounded-sm" />
        <div className="absolute top-[122px] right-0 w-[1px] h-[172px] bg-neutral-opaque-10 rounded-sm overflow-hidden">
          <div className="absolute w-full h-40 bg-gradient-to-b from-white/20 to-transparent animate-dots" style={{ animationDelay: "1.8s" }} />
        </div>
        <div className="absolute top-[314px] right-0 w-[1px] h-[162px] bg-neutral-opaque-10 rounded-sm overflow-hidden">
          <div className="absolute w-full h-40 bg-gradient-to-b from-white/20 to-transparent animate-dots" style={{ animationDelay: "3.6s" }} />
        </div>

        {/* Horizontal connecting lines */}
        <div className="absolute top-[111px] w-full h-[1px] bg-neutral-opaque-10" />
        <div className="absolute top-[303px] w-full h-[1px] bg-neutral-opaque-10" />
        <div className="absolute top-[495px] w-full h-[1px] bg-neutral-opaque-10" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h1 className="text-[80px] leading-[1] font-medium tracking-[-0.02em] text-[#141413] mb-8">
          Save time &<br />money on AWS
        </h1>
        
        <div className="max-w-[600px] mx-auto mb-12">
          <p className="text-xl text-[#141413]/80">
            Savings, visibility, and infrastructure guardrails.
            <br />
            One automated platform.
          </p>
        </div>

        <a 
          href="#demo"
          className="inline-flex items-center gap-2 bg-[#141413] text-white px-16 py-10 rounded-lg font-medium hover:bg-[#141413]/90 transition-all relative group mb-12"
        >
          <span className="relative z-10 transition-transform group-hover:-translate-x-12">Book a demo</span>
          <div className="absolute inset-2 bg-white/5 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <div className="max-w-[1200px] mx-auto p-10">
          <div className="relative rounded-3xl overflow-hidden bg-neutral-opaque-4 p-8 backdrop-blur-sm">
            <div className="absolute inset-0 border border-neutral-opaque-10 rounded-3xl pointer-events-none" />
            <img 
              src="https://antimetal.com/images/hero/preview.png" 
              alt="Antimetal Demo Preview" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;