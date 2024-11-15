/*console.log("Start");

new Promise((resolve, reject) => {
  //console.log("Body promise");

  setTimeout(() => {
    //resolve("My friend did it");

    reject("My friend did not");
  }, 1000);
})
  .then((message) => console.log(message))
  .catch((errorMessage) => console.log(errorMessage))
  .finally(() => console.log("Promise finished"));

console.log("Fin");*/

import { getHeroById } from "./07-imp-exp";
import { Hero } from "../data/heroes";

const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      hero ? resolve(hero) : reject(`Hero with id ${id} was not found`);
    }, 1000);
  });
};

getHeroByIdAsync(3)
  .then((hero) => console.log(hero.name))
  .catch(alert);
