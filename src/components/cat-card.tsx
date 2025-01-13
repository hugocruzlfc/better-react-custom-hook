import React from "react";

interface CatCardProps {
  breed: string;
  image: string;
  country: string;
}

const CatCard = React.memo(({ breed, image, country }: CatCardProps) => {
  console.log("CatCard rendered!");

  return (
    <div className="cat-card">
      <img
        src={image}
        alt={breed}
      />
      <h2>{breed}</h2>
      <p>{country}</p>
    </div>
  );
});

export default CatCard;
