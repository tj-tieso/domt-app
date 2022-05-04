var drawbtnEl = document.querySelector("#draw-btn");
var nameTextEl = document.querySelector("#name");
var nameErrorContainerEl = document.querySelector("#name-error-container");
var numberOfCardsEl = document.querySelector("#card-number");
var numberErrorContainerEl = document.querySelector("#number-error-container");
var deckText = document.querySelector("#deck-text");
var deckSelectionEl = document.querySelector("#choose-deck");
var cardsParentUl = document.querySelector("#ul-cards");
var playerNameTextEl = document.querySelector("#name-text");
var nameAppendEl = document.querySelector("#name-append");
var CardNumber = "";

// deckId declaration
var deckId = "";
var cardPullArr = [];

// Pseudo code for Trevor

// pull from the dnd api (check)

// pull item description (check)

// organize description (check)

// set up object based on the playing card (only 13 or 22 cards based on selection)

// create element with data-deck and a 13- or 22-card class

// append element to DOM based on selected card draw

// click to flip, only on hidden. Do nothing on click when card is already shown.

// leave ability to summon modal again for details

// save number of cards drawn and which cards are flipped to localStorage

// when card amount is selected, then we loop through n number numbers

// check figure for too many or too little cards selected (1-13/1-22)

// reset button to be able to draw again

var cardArr2 = [];

var cardArr = [
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
    // console.log(cards);

    // add cards from API to cardsArr = []
    cardArr.unshift(
      (cards[i] = {
        name: cards[0],
        desc: cards[1],
      })
    );
  }
  // console.log(cardArr);
  createDeck13(cardArr);
};

var createDeck13 = function (cardArr) {
  const NAMES_TO_EXCLUDE = [
    "Balance",
    "Comet",
    "Donjon",
    "The Fates",
    "Fool",
    "Gem",
    "Idiot",
    "Talons",
    "Vizier",
  ];

  const deck13Arr = cardArr.filter(
    (item) => !NAMES_TO_EXCLUDE.includes(item.name)
  );
  cardArr2.push(deck13Arr);
};

// trying to get the text from the event when it is changed
var deckTypeChange = function (event) {
  deckSelectionEl = function () {
    var length = deckSelectionEl.children.length;
    console.log(length);
    for (var i = 0; i < length; i++) {
      if (deckSelectionEl.children[i].selected) {
        alert(deckSelectionEl.children[i].text);
      }
    }
  };
};

var drawSubmitHandler = function (event) {
  event.preventDefault();

  //gets name from form
  var playerName = nameTextEl.value.trim();
  nameTextEl.value = "";
  if (playerName) {
    nameErrorContainerEl.innerHTML = "";
  } else {
    nameErrorContainerEl.innerHTML = "Please Enter Name!";
  }

  // gets the number of cards from the form
  CardNumber = numberOfCardsEl.value.trim();

  numberOfCardsEl.value = "";
  if (CardNumber) {
    numberErrorContainerEl.innerHTML = "";
  } else {
    numberErrorContainerEl.innerHTML =
      "Please Enter The Number of Cards You Would Like to Draw!";
  }
  deckFetch();
};

var deckFetch = function () {
  var deckUrl = "https://deckofcardsapi.com/api/deck/new/?jokers_enabled=true";

  // make a fetch request to deck of cards api
  fetch(deckUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        deckShuffle(data);
      });
    } else {
      // if not successful
      alert("Error: API server not found");
    }
  });
};

// fetch request to shuffle deck
var deckShuffle = function (data) {
  deckId = data.deck_id;

  var deckDrawnUrl =
    "https://deckofcardsapi.com/api/deck/" + deckId + "/shuffle/";
  fetch(deckDrawnUrl).then(function (response) {
    // if response was successful
    if (response.ok) {
      response.json().then(function (data) {
        deckEmpty(data);
      });
    } else {
      alert("Error: card API not found");
    }
  });
};

// fetch request to draw all cards and only set the relevant cards back to the deck
var deckEmpty = function (data) {
  deckId = data.deck_id;

  var deckDrawUrl =
    "https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=54";

  fetch(deckDrawUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        deckSet(data);
      });
    } else {
      alert("Error: card API not found");
    }
  });
};

var deckSet = function (data) {
  deckId = data.deck_id;

  var deckResetUrl =
    "https://deckofcardsapi.com/api/deck/" +
    deckId +
    "/return/?cards=AD,KD,QD,JD,2D,AH,KH,QH,JH,2H,AC,KC,QC,JC,2C,AS,KS,QS,JS,2S,X1,X2";
  fetch(deckResetUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        deckDraw(data.remaining);
      });
    }
  });
};

var deckDraw = function (cards) {
  var amount = CardNumber;

  console.log(CardNumber);

  if (amount < 1 || cards < amount) {
    console.log("Please select an appropriate amount");
  }

  var shuffleUrl =
    "https://deckofcardsapi.com/api/deck/" +
    deckId +
    "/shuffle/?remaining=true";

  var drawUrl =
    "https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=" + amount;

  fetch(shuffleUrl).then(function (response) {
    if (response.ok) {
      fetch(drawUrl).then(function (response) {
        response.json().then(function (cardPull) {
          cardPullArr = cardPull.cards;
          //appends the card li to html
          for (var i = 0; i < CardNumber; i++) {
            console.log(i);
            var li = document.createElement("li");
            li.setAttribute("id", "card-num-" + i);
            li.textContent = cardPullArr[i].image;
            cardsParentUl.appendChild(li);
          }
          console.log(cardPullArr);
        });
      });
    } else console.log("Error");
  });
};

drawbtnEl.addEventListener("click", drawSubmitHandler);

// console.log(cardArr2);
// console.log(cardArr);

getDndApi();
