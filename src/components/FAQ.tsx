const faqs = [
  {
    question: "How do I detect idle resources?",
    answer: "Our platform automatically scans and identifies unused AWS resources...",
  },
  {
    question: "Why did I get a surprise AWS bill?",
    answer: "We help prevent unexpected costs by monitoring your usage in real-time...",
  },
  {
    question: "How do I avoid overprovisioning?",
    answer: "Our intelligent sizing recommendations help optimize your resource allocation...",
  },
  {
    question: "Why can't I get any support?",
    answer: "We provide 24/7 dedicated support to help you with any AWS-related issues...",
  },
  {
    question: "What is EC2 sizing?",
    answer: "EC2 sizing refers to selecting the right instance type and capacity...",
  },
  {
    question: "How can I forecast accurately?",
    answer: "Our advanced analytics and machine learning models provide precise cost forecasting...",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          The cloud is complicated
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {faqs.map((faq, index) => (
            <div key={index} className="glass p-6 rounded-2xl hover:bg-opacity-20 transition-all duration-300">
              <div className="w-12 h-12 mb-4 rounded-xl bg-highlight/10 flex items-center justify-center">
                <span className="text-2xl">?</span>
              </div>
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