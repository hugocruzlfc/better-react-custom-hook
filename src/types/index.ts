export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
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
