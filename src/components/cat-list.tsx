import useCatList from "../hooks/use-cat-list";
import CatCard from "./cat-card";

const CatList = () => {
  const { cats } = useCatList();

  console.log("CatList rendered!");

  return (
    <div className="cat-list">
      <h2>First list</h2>
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          breed={cat.breed}
          image={cat.image}
          country={cat.country}
        />
      ))}
    </div>
  );
};

export default CatList;
