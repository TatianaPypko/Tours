import React, { useState } from "react";

interface TourProps {
  id: number;
  image: string;
  info: string;
  price: number;
  name: string;
  removeTour: (id: number) => void;
}

const Tour: React.FC<TourProps> = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.slice(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "show more"}
          </button>
        </p>
        <button className="delete-button" onClick={() => removeTour(id)}>
          delete tour
        </button>
      </footer>
    </article>
  );
};

export default Tour;
