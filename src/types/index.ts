import { Dispatch, SetStateAction } from "react";

export interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export interface Cat {
  id: string;
  breed: string;
  image: string;
  country: string;
}

export interface CatContextType {
  cats: Cat[];
  setCats: (cats: Cat[]) => void;
}
