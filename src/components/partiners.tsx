export default function Partners() {
  const partners = [
    { name: "Cypress", logo: "/cypress.JPG" },
    { name: "Black Hub", logo: "/blackhub.png" },
  ];

  return (
    <section id="partner" className="bg-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-maron mb-10">
        Our Media Partners
      </h2>
      <div className="flex flex-wrap gap-8 items-center justify-around max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 md:w-32 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
