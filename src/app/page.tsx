import Image from "next/image";
import monogram from "../../public/images/richmond-wendy-monogram.webp";
import { weddingDetails } from "@/content/wedding";
import styles from "./page.module.css";

export default function Home() {
  const { couple, event, date, time, venue, colours, hashtag } = weddingDetails;
  const dateTime = `${date.iso}T${time.iso}`;

  return (
    <div className={styles.pageShell}>
      <main className={styles.invitation}>
        <section className={styles.hero} aria-labelledby="wedding-title">
          <div className={styles.monogramWrap}>
            <Image
              className={styles.monogram}
              src={monogram}
              alt="Burgundy floral and gold Richmond and Wendy monogram"
              priority
              sizes="(max-width: 480px) 78vw, 360px"
            />
          </div>

          <h1 id="wedding-title">{couple.display}</h1>
          <p className={styles.eventName}>{event}</p>

          <div className={styles.dateBlock}>
            <time dateTime={dateTime}>
              <span className={styles.ceremonyDetail}>
                <svg
                  className={styles.detailIcon}
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3.5"
                    y="5.5"
                    width="17"
                    height="15"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M7.5 3.5v4M16.5 3.5v4M3.5 10h17"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
                <span>{date.display}</span>
              </span>
              <span className={styles.ceremonyDetail}>
                <svg
                  className={styles.detailIcon}
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M12 7.5V12l3 2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{time.display}</span>
              </span>
            </time>
          </div>
        </section>

        <section className={styles.venue} aria-labelledby="venue-title">
          <p id="venue-title" className={styles.sectionLabel}>
            Ceremony location
          </p>
          <address className={styles.address}>
            <span className={styles.addressLabel}>{venue.address.label}</span>
            <span className={styles.streetAddress}>
              <span>{venue.address.street}</span>
              <span>{venue.address.postalCode}</span>
            </span>
          </address>
          <p className={styles.locality}>{venue.locality}</p>

          <a
            className={styles.mapsButton}
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open ceremony location in Google Maps"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
            >
              <path
                d="M12 21s6-5.03 6-11a6 6 0 1 0-12 0c0 5.97 6 11 6 11Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="10" r="2.2" fill="currentColor" />
            </svg>
            Open in Google Maps
            <span className={styles.buttonArrow} aria-hidden="true">
              ↗
            </span>
          </a>
        </section>

        <footer className={styles.footer}>
          <p className={styles.coloursLabel}>Wedding colours</p>
          <ul className={styles.colours} aria-label="Wedding colours">
            {colours.map((colour) => (
              <li key={colour.name}>
                <span
                  className={styles.swatch}
                  style={{ backgroundColor: colour.hex }}
                  aria-hidden="true"
                />
                {colour.name}
              </li>
            ))}
          </ul>
          <p className={styles.hashtag}>{hashtag}</p>
          <span className="mb-6"></span>
          <span className={styles.directionName}>
            Directions & Details: 0242952572
          </span>
        </footer>
      </main>
    </div>
  );
}
