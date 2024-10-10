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

type CardPokemon = Pick<Pokemon, "id" | "name" | "image" | "url">;

export type { Pokemon, CardPokemon };
