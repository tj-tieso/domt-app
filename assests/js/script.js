// Pseudo code for Trevor

/*

https://api.open5e.com/magicitems/

pull from the dnd api (check)

pull item description (check)

organize description (check)

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
var cardsArr = [
  // missing cards from API
  {
    name: "Star",
    desc: "Increase one of your Ability Scores by 2. The score can exceed 20 but can't exceed 24.",
  },
  {
    name: "Sun",
    desc: " You gain 50,000 XP, and a wondrous item (which the DM determines randomly) appears in your hands.",
  },
  {
    name: "Talons",
    desc: "Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do Vanish.",
  },
  {
    name: "Throne",
    desc: "You gain proficiency in the Persuasion skill, and you double your Proficiency Bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of Monsters, which you must clear out before you can claim the keep as. yours.",
  },
  {
    name: "Vizier",
    desc: "At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with Wisdom on how to apply it.",
  },
  {
    name: "The Void",
    desc: "This black card Spells Disaster. Your soul is drawn from your body and contained in an object in a place of the DM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is Incapacitated. A wish spell can't restore your soul, but the spell reveals the Location of the object that holds it. You draw no more cards.",
  },
];

var getDndApi = function () {
  var dndApi = "https://api.open5e.com/magicitems/?search=things";

  //api call
  fetch(dndApi).then(function (response) {
    response.json().then(function (data) {
      var cardDescriptions = data.results[0].desc;
      // console.log(cardDescriptions);
      var tempArr = cardDescriptions.split("**_").reverse();
      // console.log(tempArr);
      splitResonse(tempArr);
    });
  });
};

var splitResonse = function (tempArr) {
  // split data at "_**. " , assign card name and description
  for (var i = 0; i < 16; i++) {
    var cards = tempArr[i].split("_**. ");
    // console.log(test);
    cardsArr.unshift(
      (cards[i] = {
        name: cards[0],
        desc: cards[1],
      })
    );
  }
  console.log(cardsArr);
};

getDndApi();
