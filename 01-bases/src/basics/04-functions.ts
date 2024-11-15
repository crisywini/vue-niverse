function greetPerson(name: string) {
  return `Hola, ${name}`;
}

const greetPerson2 = (name: string) => {
  return `Hola, ${name}`;
};

const greetPerson3 = (name: string) => `Hola, ${name}`;

console.log(greetPerson("Cristian"));
console.log(greetPerson2("Cristian"));
console.log(greetPerson3("Harvey"));

const getUser = () => {
  return {
    uid: "ABS-123",
    username: "Tony001",
  };
};

const getUser2 = (uid: string) => ({
  uid,
  username: "Tony002",
});

console.log(getUser());
console.log(getUser2("ABS-124"));
