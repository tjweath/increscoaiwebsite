const clients = [
  "Company 1",
  "Company 2",
  "Company 3",
  "Company 4",
  "Company 5",
  "Company 6",
];

const Clients = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-12 text-secondary">
          Trusted by Industry Leaders
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="glass h-24 rounded-xl flex items-center justify-center text-muted"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;