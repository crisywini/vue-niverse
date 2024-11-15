const character = ["Trinity", "Monet", "Alaska", "Bob"];

const [t, m, , b] = character;

console.log({ t, m, b });

const returnArray = () => {
  return [123, "ABC"] as const;
};

const [numbers, letters] = returnArray();

console.log(numbers, letters.toLowerCase());
