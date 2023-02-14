const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
const minAge = ages.at(0);
const maxAge = ages.at(ages.length - 1);
console.log("Min Age: " + minAge + "\nMax Age: " + maxAge);
console.log(
  ages.length % 2 === 0
    ? ages.slice(ages.length / 2 - 1, ages.length / 2 + 1)
    : ages.at(ages.length / 2)
);
const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length;
console.log("Average age: " + averageAge);
console.log("Range of ages: " + (maxAge - minAge));
