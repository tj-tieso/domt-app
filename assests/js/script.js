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

var getDndApi = function () {
  var dndApi = "https://api.open5e.com/magicitems/?search=things";

  //api call
  fetch(dndApi).then(function (response) {
    response.json().then(function (data) {
      var cardDescriptions = data.results[0].desc;
      console.log(cardDescriptions);
      splitResonse(cardDescriptions);
    });
  });
};

var splitResonse = function (cardDescriptions) {
  // original string
  var str = cardDescriptions;
  //split string into array
  var arr = str.split("**_");
  console.log(arr);

  // split data at **_
};

getDndApi();
