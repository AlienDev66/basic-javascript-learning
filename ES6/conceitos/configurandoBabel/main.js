const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map((item, index) => {
  return item + index;
});

console.log(newArr);

const sum = arr.reduce((total, next) => {
  return total + next;
});

console.log(sum);

const filter = arr.filter((item) => {
  return item % 2 === 0;
});

console.log(filter);

const find = arr.find((item) => {
  return item === 4;
});

console.log(find);
