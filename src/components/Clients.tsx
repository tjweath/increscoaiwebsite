const clients = [
  "NEON",
  "POLITICO",
  "marpipe",
  "Quartr",
  "wiza",
  "dax",
  "FAMILY MEDICINE",
  "VISTAR MEDIA",
  "OpenStore",
  "MONARCH",
  "PUBLIC",
  "checkmate",
];

const Clients = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-12 text-secondary">
          Making the cloud effortless for thousands of companies
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="glass h-24 rounded-xl flex items-center justify-center text-muted hover:text-primary transition-colors duration-300"
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