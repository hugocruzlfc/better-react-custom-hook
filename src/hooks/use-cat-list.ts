import { useState } from "react";
import { Cat } from "../types";
import { v4 as uuidv4 } from "uuid";
import maineCoonImage from "../assets/images/maine_coon.avif";
import siameseImage from "../assets/images/siamese.avif";

const useCatList = () => {
  const initialCats = [
    {
      id: uuidv4(),
      breed: "Maine Coon",
      image: maineCoonImage,
      country: "USA",
    },
    {
      id: uuidv4(),
      breed: "Siamese",
      image: siameseImage,
      country: "Thailand",
    },
  ];

  const [cats, setCats] = useState(initialCats);

  const addCat = (cat: Cat) => {
    const newCatWithId = {
      ...cat,
      id: uuidv4(),
    };
    setCats((prevCats) => [...prevCats, newCatWithId]);
  };

  return { cats, addCat };
};

export default useCatList;
