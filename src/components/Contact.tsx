import React from "react";

const Contact = () => {
  return (
    <section className="py-12 bg-gray-50" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-3 md:space-y-0">
          <a href="mailto:tim@increscoai.com" className="text-base text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            tim@increscoai.com
          </a>
          <a href="https://www.linkedin.com/in/tim-weatherseed-0b35b14b/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;