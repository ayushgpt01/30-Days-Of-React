// 1
const { countries } = require("./countries");
const { webTechs } = require("./web_techs");
// 2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = text.split(" ").reduce((acc, word) => {
  acc.push(word.replace(/[,.]/g, ""));
  return acc;
}, []);
console.log(words);
console.log(words.length);
// 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.indexOf("Meat") === -1
  ? shoppingCart.unshift("Meat")
  : console.log("Meat already exists");
shoppingCart.indexOf("Sugar") === -1
  ? shoppingCart.push("Sugar")
  : console.log("Sugar already exists");
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);
// 4
countries.indexOf("Ethiopia") === -1
  ? countries.push("Ethiopia")
  : console.log("ETHIOPIA");
// 5
if (webTechs.indexOf("Sass") === -1) {
  webTechs.push("Sass");
  console.log(webTechs);
} else {
  console.log("Sass is a CSS preprocess");
}
// 6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
