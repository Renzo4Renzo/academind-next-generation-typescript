const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

// activeHobbies.push(...hobbies);
const person = {
  name: "Renzo",
  age: 30,
};

// const copiedPerson = person; //We're copying the reference, not the object

const copiedPerson = { ...person };
