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
      name: "ORCHID NATURES",
      image: "/images/client-04.png",
      link: "https://www.instagram.com/orchid_natures/",
    },
    {
      name: "Samosasnsalads",
      image: "/images/client-05.png",
      link: "https://www.instagram.com/samosas_n_salads?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
    {
      name: "SPICY SPOON",
      image: "/images/client-09.png",
      link: "https://www.instagram.com/spicyspoon_restaurant?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  ];

  return (
    <section className="clients" id="clients">

      <div className="clients-header">
        <span>HAPPY CLIENTS</span>
        <span>07</span>
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