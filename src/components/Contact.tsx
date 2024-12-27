const Contact = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100" id="contact">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <div className="space-y-3">
          <a 
            href="mailto:tim@increscoai.com"
            className="flex items-center justify-center gap-2 text-base text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            tim@increscoai.com
          </a>
          <a 
            href="https://www.linkedin.com/in/tim-weatherseed-0b35b14b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-base text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          <div className="mt-4">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // Add CSS
                const link = document.createElement('link');
                link.href = 'https://assets.calendly.com/assets/external/widget.css';
                link.rel = 'stylesheet';
                document.head.appendChild(link);
                
                // Add JS
                const script = document.createElement('script');
                script.src = 'https://assets.calendly.com/assets/external/widget.js';
                script.onload = () => {
                  setTimeout(() => {
                    // @ts-ignore
                    if (window.Calendly) {
                      // @ts-ignore
                      window.Calendly.initPopupWidget({
                        url: 'https://calendly.com/tim-increscoai/30min'
                      });
                    }
                  }, 100);
                };
                document.head.appendChild(script);
              }}
              className="text-base text-gray-600 hover:text-gray-900 transition-colors"
            >
              Schedule time with Tim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;