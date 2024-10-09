type Pokemon = {
  id: number;
  name: string;
  url: string;
  image: string;
  stats: {
    name: string;
    value: number;
  }[];
  types: string[];
};

export type { Pokemon };
