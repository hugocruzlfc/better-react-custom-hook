interface CatCardProps {
  breed: string;
  image: string;
  country: string;
}

const CatCard = ({ breed, image, country }: CatCardProps) => {
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
};

export default CatCard;
