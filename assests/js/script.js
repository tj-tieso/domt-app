var drawbtnEl = document.querySelector("#draw-btn");
var nameTextEl = document.querySelector("#name");
var nameErrorContainerEl = document.querySelector("#name-error-container");
var numberOfCardsEl = document.querySelector("#card-number");
var numberErrorContainerEl = document.querySelector("#number-error-container");
var deckText = document.querySelector("#deck-text");

// Pseudo code for Trevor

/*

https://api.open5e.com/magicitems/

pull from the dnd api

pull item description

organize description

set up object based on the playing card (only 13 or 22 cards based on selection)

create element with data-deck and a 13- or 22-card class

append element to DOM based on selected card draw

click to flip, only on hidden. Do nothing on click when card is already shown.

leave ability to summon modal again for details

save number of cards drawn and which cards are flipped to localStorage

when card amount is selected, then we loop through n number numbers

check figure for too many or too little cards selected (1-13/1-22)

reset button to be able to draw again


*/
var drawSubmitHandler = function (event) {
  event.preventDefault();
  //gets name from form
  var playerName = nameTextEl.value.trim();
  nameTextEl.value = "";
  if (playerName) {
    nameErrorContainerEl.innerHTML = "";
  } else {
    nameErrorContainerEl.innerHTML = "Please Enter Name!";
    return;
  }

  var CardNumber = numberOfCardsEl.value.trim();
  numberOfCardsEl.value = "";
  if (CardNumber) {
    numberErrorContainerEl.innerHTML = "";
  } else {
    numberErrorContainerEl.innerHTML =
      "Please Enter The Number of Cards You Would Like to Draw!";
    return;
  }
};

drawbtnEl.addEventListener("click", drawSubmitHandler);
