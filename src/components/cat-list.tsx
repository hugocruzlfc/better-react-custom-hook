import { useEffect, useRef } from "react";
import bengalImage from "../assets/images/bengal.avif";
import russianBlueImage from "../assets/images/russian_blue.avif";
import useCatList from "../hooks/use-cat-list";
import CatCard from "./cat-card";
import { Cat } from "../types";

const CatList = () => {
  const { cats, addCat } = useCatList();
  const hasAddedCats = useRef(false);
  // useRef to control if the cats are already added

  useEffect(() => {
    if (!hasAddedCats.current) {
      addCat({ breed: "Bengal", image: bengalImage, country: "USA" } as Cat);
      addCat({
        breed: "Russian Blue",
        image: russianBlueImage,
        country: "Russia",
      } as Cat);
      hasAddedCats.current = true;
    }
  }, [addCat]);

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

const TotallyDifferentCatList = () => {
  const { cats } = useCatList();

  return (
    <div className="cat-list">
      <h2>Different list</h2>
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

export { CatList, TotallyDifferentCatList };
