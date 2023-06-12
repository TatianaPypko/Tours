import React from "react";
import Tour from "./Tour";

interface TourData {
  id: number;
  image: string;
  info: string;
  price: number;
  name: string;
}

interface ToursProps {
  tours: TourData[];
  removeTour: (id: number) => void;
}

const Tours: React.FC<ToursProps> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
