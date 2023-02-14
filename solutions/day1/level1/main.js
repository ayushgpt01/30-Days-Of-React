// 1
const emptyArray = [];
// 2
const moreThanFiveArray = [1, 2, 3, 4, 5, 6];
// 3
const len = moreThanFiveArray.length;
console.log(len);
// 4
console.log(
  `First : ${moreThanFiveArray.at(0)}
Second: ${moreThanFiveArray.at(len / 2)}
Third: ${moreThanFiveArray.at(len - 1)}\n`
);
// 5
const mixedDataTypes = [
  1,
  "string",
  [1, 2],
  { 1: "string", 2: "proto" },
  true,
  1.28,
];
// 6
const itCompanies = [
  "Facebook",
  "Apple",
  "Google",
  "Microsoft",
  "IBM",
  "Oracle",
  "Amazon",
];
// 7
console.log(itCompanies);
// 8
console.log("No. of companies : " + itCompanies.length);
// 9
console.log(
  `First : ${itCompanies.at(0)}
Second: ${itCompanies.at(len / 2)}
Third: ${itCompanies.at(len - 1)}\n`
);
// 10
itCompanies.forEach((item) => console.log(item));
// 11
itCompanies.forEach((item) => {
  item = item.toUpperCase();
  console.log(item);
});
// 12
for (let i = 0; i < itCompanies.length; i++) {
  if (i === itCompanies.length - 1)
    process.stdout.write(`and ${itCompanies[i]} are big IT companies.\n`);
  else process.stdout.write(`${itCompanies[i]}, `);
}
// 13
const hasCompany = (company) => {
  const temp = company.charAt(0).toUpperCase() + company.slice(1).toLowerCase();
  return itCompanies.includes(temp)
    ? temp + " exists"
    : temp + " doesn't exist";
};
console.log(hasCompany("apple"));
console.log(hasCompany("MicROsoft"));
// 14
console.log(
  itCompanies.reduce((acc, item) => {
    let count = 0;
    for (let i = 0; i < item.length; i++) {
      if (item.charAt(i).toLowerCase() === "o") {
        count++;
      }
      if (count === 2) {
        acc.push(item);
        break;
      }
    }
    return acc;
  }, Array())
);
// 15
itCompanies.sort();
console.log(itCompanies);
// 16
itCompanies.reverse();
console.log(itCompanies);
// 17
console.log(itCompanies.slice(0, 3));
// 18
console.log(itCompanies.slice(-3));
// 19
if (itCompanies.length % 2 === 0)
  console.log(
    itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1)
  );
else
  console.log(
    itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1)
  );
// 20
itCompanies.shift();
console.log(itCompanies);
// 21
if (itCompanies.length % 2 === 0)
  itCompanies.splice(itCompanies.length / 2 - 1, 2);
else itCompanies.splice(itCompanies.length / 2, 1);
console.log(itCompanies);
// 22
itCompanies.pop();
console.log(itCompanies);
// 23
itCompanies.splice(0);
console.log(itCompanies);
