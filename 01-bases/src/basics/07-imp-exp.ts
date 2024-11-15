import heroes, { owners } from "./data/heroes";

export const getHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id) ?? {};
};

console.log(getHeroById(1));

export const getHerosByOwner = (owner: string) => {
  return heroes.filter((hero) => hero.owner === owner) ?? [{}];
};

console.log(getHerosByOwner("DC"));
