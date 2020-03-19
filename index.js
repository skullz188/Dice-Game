let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomeImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomeImageSource1);
let randomeImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomeImageSource2);





if (randomNumber1 > randomNumber2) {
    document.querySelector("div h1").innerHTML = "Player 1 Wins!";

} else if (randomNumber2 > randomNumber1) {
 document.querySelector("div h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("div h1").innerHTML = "Draw!";
}
