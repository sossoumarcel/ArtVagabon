import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./EventCard.module.css";

export type EventCardProps = {
  imageUrl: string;
  title: string;
  date?: string;
  description?: string;
  href?: string;
  /** optional className to help story or layout wrapper */
  className?: string;
};

export const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  title,
  date,
  description,
  href = "#",
  className = "",
}) => {
  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.media}>
        {/* Next/Image garde la performance côté Next.js */}
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={500}
          className={styles.image}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title} title={title}>
          {title}
        </h3>

        {date && <time className={styles.date}>{date}</time>}

        {description ? (
          <p className={styles.description}>{description}</p>
        ) : (
          <p className={styles.descriptionEmpty} aria-hidden>
            {/* garde la hauteur pour éviter le "jump" */}
          </p>
        )}

        <div className={styles.cta}>
          <Link href={href} className={styles.link}>
            En savoir plus
          </Link>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
