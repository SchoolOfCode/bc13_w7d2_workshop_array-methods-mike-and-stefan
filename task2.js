let animals = [
  "baboon",
  "kangaroo",
  "rhino",
  "frog",
  "beaver",
  "horse",
  "basalisk",
];

let bListAnimals = animals.filter((pet) => {
  return pet.charAt(0) == "b";
});
console.log(bListAnimals);
