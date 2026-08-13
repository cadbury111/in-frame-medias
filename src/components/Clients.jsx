function Clients() {
  const clients = [
    {
      name: "JAYANTHI_RAMESHKUMAR",
      image: "/images/client-01.png",
      link: "https://www.instagram.com/jayanthi_rameshkumar/",
    },
    {
      name: "PKN TOURZ",
      image: "/images/client-02.png",
      link: "https://www.instagram.com/pkn_tourz/",
    },
    {
      name: "TEEBUY",
      image: "/images/client-03.png",
      link: "https://www.instagram.com/teebuy_e_store/",
    },
    {
      name: "ORCHID NATURES",
      image: "/images/client-04.png",
      link: "https://www.instagram.com/orchid_natures/",
    },
    {
      name: "Samosasnsalads",
      image: "/images/client-05.png",
      link: null,
    },
    {
      name: "AS GOAT FARMS",
      image: "/images/client-06.png",
      link: null,
    },
    {
      name: "THE URBAN STOCK",
      image: "/images/client-07.png",
      link: "https://www.instagram.com/theurbanstock/",
    },
    {
      name: "vini_shiva",
      image: "/images/client-08.png",
      link: "https://www.instagram.com/vini_siva/",
    },
  ];

  return (
    <section className="clients" id="clients">

      <div className="clients-header">
        <span>HAPPY CLIENTS</span>
        <span>08</span>
      </div>

      <div className="clients-intro">
        <h2>
          Brands that
          <br />
          <em>trust our frame.</em>
        </h2>

        <p>
          We work with brands and creators who believe
          in showing up differently.
        </p>
      </div>

      <div className="clients-grid">

        {clients.map((client) => {

          const clientContent = (
            <>
              <div className="client-image">
                <img
                  src={client.image}
                  alt={client.name}
                />
              </div>

              <span>{client.name}</span>
            </>
          );

          return client.link ? (
            <a
              className="client-item"
              key={client.name}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {clientContent}
            </a>
          ) : (
            <div
              className="client-item"
              key={client.name}
            >
              {clientContent}
            </div>
          );

        })}

      </div>

    </section>
  );
}

export default Clients;