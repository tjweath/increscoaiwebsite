const faqs = [
  {
    question: "How does it work?",
    answer: "Our platform uses advanced algorithms to simplify your workflow...",
  },
  {
    question: "What about security?",
    answer: "We implement industry-leading security measures to protect your data...",
  },
  {
    question: "Can I try before buying?",
    answer: "Yes! We offer a 14-day free trial with full access to all features...",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-secondary">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;