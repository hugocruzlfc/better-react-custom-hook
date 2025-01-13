import { createContext, useMemo, useState, useEffect, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

import siameseImage from "../assets/images/siamese.avif";
import persianImage from "../assets/images/persian.avif";
import maineCoonImage from "../assets/images/maine_coon.avif";
import sphynxImage from "../assets/images/sphynx.avif";
import bengalImage from "../assets/images/bengal.avif";
import russianBlueImage from "../assets/images/russian_blue.avif";
import britishShorthairImage from "../assets/images/british_shorthair.avif";
import ragdollImage from "../assets/images/ragdoll.avif";
import abyssinianImage from "../assets/images/abyssinian.avif";
import { Cat, CatContextType } from "../types";

export const CatContext = createContext<CatContextType | null>(null);

export const CatProvider = ({ children }: { children: ReactNode }) => {
  const initialCatList = [
    {
      id: uuidv4(),
      breed: "Siamese",
      image: siameseImage,
      country: "Thailand",
    },
    {
      id: uuidv4(),
      breed: "Maine Coon",
      image: maineCoonImage,
      country: "USA",
    },
  ] as Cat[];

  const [cats, setCats] = useState<Cat[]>(() => {
    const savedCats = localStorage.getItem("cats");
    return savedCats ? JSON.parse(savedCats) : initialCatList;
  });

  useEffect(() => {
    localStorage.setItem("cats", JSON.stringify(cats));
  }, [cats]);

  // To avoid changing the object on every render
  const value = useMemo(
    () => ({
      cats,
      setCats,
    }),
    [cats]
  );

  return <CatContext.Provider value={value}>{children}</CatContext.Provider>;
};
