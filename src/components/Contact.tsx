import React from "react";

const Contact = () => {
  return (
    <section className="py-12 bg-gray-50" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-3">
          <a href="mailto:tim@increscoai.com" className="text-base text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            tim@increscoai.com
          </a>
          <a href="https://www.linkedin.com/in/timweatherseed/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <button
            data-cal-link="increscoai/incresco-ai-consultation"
            data-cal-namespace="incresco-ai-consultation"
            data-cal-config='{"layout":"month_view"}'
            className="text-base text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 bg-transparent border-none cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Transformation Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;