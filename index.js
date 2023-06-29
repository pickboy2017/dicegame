var randomNumber1 = Math.random() * 6 + 1;
var randomDice1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random() * 6 + 1;
var randomDice2 = Math.floor(randomNumber2);

var manipulate1 = document
  .getElementsByTagName("img")[0]
  .setAttribute("src", "/images/dice" + randomDice1 + ".png");

var manipulate2 = document
  .getElementsByTagName("img")[1]
  .setAttribute("src", "/images/dice" + randomDice2 + ".png");

if (randomDice1 > randomDice2) {
  var result = (document.querySelector("h1").innerHTML = "Player 1 WON!");
} else if (randomDice2 > randomDice1) {
  var result = (document.querySelector("h1").innerHTML = "Player 2 WON!");
} else {
  var result = (document.querySelector("h1").innerHTML = "TIE!");
}
console.log(result);
