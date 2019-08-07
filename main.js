//Use an event listener to change the style of the image on the button click

/*
const image = document.querySelector(".click img");
const imgButton = document.querySelector(".click button");

const imgStyle = e => {
  image.style.border = "solid 5px black";
  console.log(image);
}

imgButton.addEventListener("click", imgStyle);
*/

//or

const image = document.querySelector(".click img");


//To toggle between edited and not edited img
let isEdited = false;

const imgToggle = e => {
  isEdited = !isEdited;
  if (isEdited) {
    //img is edited, change border to pink
    image.style.border = "solid 5px hotpink";
    image.style.padding = "5px";
    image.style.opacity = "0.6";
    image.style.filter = "hue-rotate(90deg)"

  } else {
    //img is not edited
    image.style.border = "solid 5px black";
    image.style.padding = "0";
    image.style.opacity = "1";
    image.style.filter = "hue-rotate(0deg)"
  }
}


//to add event to parent > img
//With ES5:

// document.querySelector(".click").addEventListener("click", function(e) {
//   if (e.target && e.target.tagName === "BUTTON") {
//     imgToggle();
//   }
// });


//With ES6

const buttonAction = e => {
  if (e.target && e.target.tagName === "BUTTON") {
    imgToggle();
  }
}

document.querySelector(".click").addEventListener("click", buttonAction);

// document.querySelector(".click").addEventListener("click", e => {
//   if (e.target && e.target.tagName === "BUTTON") {
//     imgToggle();
//   }
// });




//Make the circle below follow your mouse!

const circle = document.querySelector(".mouse div");


const mouseMove = e => {
  circle.style.left = `${e.pageX}px`;
  circle.style.top = `${e.pageY}px`;
}

document.addEventListener("mousemove", mouseMove);




//Key Press Events

const buttons = document.querySelectorAll(".keys button");

const changeColor = e => {

  let letter;
  const colorArr = ["orangered", "yellow", "green", "turquoise", "hotpink", "blue", "red", "chartreuse"];
  let randomNum = 0;

  for (let i = 0; i < buttons.length; i++) {

    letter = buttons[i].innerHTML.toLowerCase(); //grab letter from button elements
    randomNum = Math.floor(Math.random() * 8); //to pick a random color from color array

    if (e.key === letter) {
      buttons[i].style.backgroundColor = colorArr[randomNum];
    };

  }
}

document.addEventListener("keyup", changeColor);




//
