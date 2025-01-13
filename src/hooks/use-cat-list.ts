import { useContext, useMemo } from "react";
import { CatContext } from "../context/cat-context";
import { Cat } from "../types";
import { v4 as uuidv4 } from "uuid";

const useCatList = () => {
  const context = useContext(CatContext);
  if (!context) {
    throw new Error("useCatList must be used within a CatProvider");
  }

  const { cats, setCats } = context;

  const addCat = (cat: Cat) => {
    const newCatWithId = {
      ...cat,
      id: uuidv4(),
    };
    setCats([...cats, newCatWithId]);
  };

  const value = useMemo(
    () => ({
      cats,
      addCat,
    }),
    [cats]
  );

  return value;
};

export default useCatList;
