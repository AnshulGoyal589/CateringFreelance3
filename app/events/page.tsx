

// import { useEffect } from "react";
import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Head from "next/head";
import { Metadata } from "next";
import metadataobj from "@/app/Metadata.json";
export const metadata: Metadata = metadataobj.event;

const EventHome = () => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     AOS.init({ duration: 500 });
  //   }
  // }, []);

  return (
    <>
      {/* <Head>
        <title>Premier Catering Services in Delhi - Corporate Events, Weddings & More</title>
        <meta name="description" content="Top-rated catering services in Delhi for corporate events, weddings, birthdays, and social gatherings. Offering customized menus with authentic Indian and international cuisine." />
        <meta name="keywords" content="delhi catering, corporate catering delhi, wedding catering services, birthday party catering, event catering delhi, international cuisine delhi" />
        <link rel="canonical" href="https://yourwebsite.com/events" />
        <meta property="og:title" content="Premier Catering Services in Delhi - Corporate Events, Weddings & More" />
        <meta property="og:description" content="Top-rated catering services in Delhi for corporate events, weddings, birthdays, and social gatherings. Offering customized menus with authentic Indian and international cuisine." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://yourwebsite.com/events" />
        <meta property="og:site_name" content="Your Catering Company" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodService",
              "name": "Your Catering Company",
              "description": "Top-rated catering services in Delhi for corporate events, weddings, birthdays, and social gatherings.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi NCR",
                "addressCountry": "IN"
              },
              "servesCuisine": ["Indian", "International"],
              "priceRange": "₹₹-₹₹₹",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "28.6139",
                  "longitude": "77.2090"
                },
                "geoRadius": "50"
              }
            })
          }}
        />
      </Head> */}

      <main className="event-container">
        <h1 className="sr-only">Premier Catering Services in Delhi</h1>
        <section className="event-list">
          <article
            className="corporate-event"
            style={{
              backgroundImage: `url("/corporate_event.jpg")`,
              backgroundSize: '65% 100%',
            }}
            data-aos="fade-up"
          >
            <div className="placeholder"></div>
            <div className="auxiliary">
              <h2>Corporate Events</h2>
              <div className="description">
                <p>
                We are the best corporate caterer in India, specialising in conferences, team meetings, and corporate parties.
                  <span>
                  Our expert chefs craft high-quality, diverse menus that accommodate various dietary preferences, ensuring a seamless experience nationwide.

                  </span>
                </p>
              </div>
            </div>
          </article>

          <article
            className="social-event"
            style={{ backgroundImage: `url("/social_event.jpeg")` }}
            data-aos="fade-up"
          >
            <div className="circle">
              <h2>Social Gatherings</h2>
              <p>
                Experience India&apos;s finest social gathering catering services, offering customized menus that foster connection and celebration with authentic local and international cuisines.
              </p>
            </div>
          </article>

          <article className="international-event" data-aos="fade-up">
            <div
              className="img-backdrop"
              style={{
                backgroundImage: `url("/international_event.jpg")`,
                backgroundSize: "120% 100%"
              }}
            >
              <h2>International Conventions</h2>
            </div>
            <div className="title">
              <p>
                India&apos;s premier international convention catering service, offering diverse, authentic global cuisines that cater to multinational tastes and preferences.
              </p>
            </div>
          </article>

          <article
            className="engagement"
            style={{ backgroundImage: `url("/engagement.jpg")` }}
            data-aos="fade-up"
          >
            <div className="simple">
              <h2>Engagement Ceremonies</h2>
              <p>
                Exclusive engagement ceremony catering across India, featuring elegant menus that blend traditional Indian flavors with contemporary cuisine.
              </p>
            </div>
          </article>

          <article className="birthday" data-aos="fade-up">
            <div className="image-container">
              <Image
                src="/birthday.jpg"
                alt="Birthday celebration catering services in Delhi"
                // fill
                // sizes="(max-width: 768px) 100%, 50%"
                width="100"
                height="100"
                className="object-cover"
                priority
              />
            </div>
            <div className="title">
              <h2>Birthdays</h2>
            </div>
            <div className="color-line"></div>
            <div className="description">
            From traditional Indian cuisine to international delicacies, we create perfect feasts.
            </div>
          </article>

          <article
            className="quick-links"
            style={{ backgroundImage: `url(https://res.cloudinary.com/das5szw5j/image/upload/a_90/a_vflip/v1734984159/image_gfzag8.jpg)` }}
            data-aos="fade-up"
          >
            <p>
              Delhi&apos;s leading wedding catering service, specializing in creating unforgettable culinary experiences with bespoke menus.
              <span>
              Expert wedding catering across India, delivering exceptional culinary experiences for your special day.
              </span>
            </p>
            <h2>Weddings</h2>
          </article>
        </section>

        <aside className="on-your-right">
          <div
            className="quick-links"
            style={{ backgroundImage: `url("/Table.png")` }}
            data-aos="fade-up"
          >
            <div className="inner-content">
              <h2>Event Domains</h2>
              <p>
              Catering services across India for all event types – Small functions, weddings, parties, and cultural celebrations.

              </p>
            </div>
          </div>
          <div
            className="quick-links"
            style={{ backgroundImage: `url(/wedding.jpg)` }}
            data-aos="fade-up"
          >
            <h2 className="text-white text-5xl text-bold">Weddings</h2>
            <p>
              Expert wedding catering in Delhi NCR, delivering exceptional culinary experiences for your special day.
              <span>
                From traditional Indian cuisine to international delicacies, we create perfect wedding feasts.
              </span>
            </p>
          </div>
        </aside>
      </main>
    </>
  );
};

export default EventHome;