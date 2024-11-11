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
    <>
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
    </>
  );
};

export default Clients;