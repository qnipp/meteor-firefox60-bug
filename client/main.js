const object = {
  one: 1,
  two: 2,
};

const array = Object.entries(object);
const newObject = Object.fromEntries(array);
console.log(newObject);