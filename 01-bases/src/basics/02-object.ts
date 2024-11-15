const person = {
  lastName: "Stark",
  age: 45,
  address: {
    city: "New York",
    zip: 65781,
    lat: 14.234234,
    lng: 32.234134,
  },
}; //as const;

//const person2 = person;

//Objects are by reference always, including nested objects

const person2 = { ...person, address: { ...person.address } };

person2.lastName = "Parker";
person2.address.city = "LA";

//Since 2022 Javascript does this without us caring about anything
const person3 = structuredClone(person);

console.log(`${person}`);
console.log(`${person2}`);
console.log(`${person3}`);
