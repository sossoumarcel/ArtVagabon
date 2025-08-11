import React from "react";
import EventCard from '../atoms/EventCard/EventCard';
import  CardSkeleton  from "../atoms/CardSkeleton";
import EmptyState  from "../atoms/EmptyState";

interface Exhibition {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  href: string;
}

interface ExhibitionsSectionProps {
  title: string;
  exhibitions?: Exhibition[];
  loading?: boolean;
}

const ExhibitionsSection: React.FC<ExhibitionsSectionProps> = ({ title, exhibitions = [], loading = false }) => {
  return (
    <section className="exhibitions-section">
      <h2 className="exhibitions-title">{title}</h2>

      {loading ? (
        <div className="exhibitions-grid">
          {[1, 2, 3].map((i) => (
            <CardSkeleton key={i} width="100%" height="350px" imageHeight="200px" />
          ))}
        </div>
      ) : exhibitions.length === 0 ? (
        <EmptyState message="Aucune exposition à venir pour le moment." />
      ) : (
        <div className="exhibitions-grid">
          {exhibitions.map((exhibition, index) => (
            <EventCard key={index} {...exhibition} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ExhibitionsSection;