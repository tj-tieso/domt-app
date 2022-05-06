// DOM declarations
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
var card0 = document.querySelector("#card-num-0");
var card1 = document.querySelector("#card-num-1");
var card2 = document.querySelector("#card-num-2");
var card3 = document.querySelector("#card-num-3");
var card4 = document.querySelector("#card-num-4");
var card5 = document.querySelector("#card-num-5");
var card6 = document.querySelector("#card-num-6");
var card7 = document.querySelector("#card-num-7");
var card8 = document.querySelector("#card-num-8");
var card9 = document.querySelector("#card-num-9");
var card10 = document.querySelector("#card-num-10");
var card11 = document.querySelector("#card-num-11");
var card12 = document.querySelector("#card-num-12");
var card13 = document.querySelector("#card-num-13");
var card14 = document.querySelector("#card-num-14");
var card15 = document.querySelector("#card-num-15");
var card16 = document.querySelector("#card-num-16");
var card17 = document.querySelector("#card-num-17");
var card18 = document.querySelector("#card-num-18");
var card19 = document.querySelector("#card-num-19");
var card20 = document.querySelector("#card-num-20");
var card21 = document.querySelector("#card-num-21");
var CardNumber = "";

// deckId declarations
var deckId = "";
var cardPullArr = [];

var dndObject = {
  JD: {
    cardName: "Star",
    code: "JD",
    desc: "Increase one of your Ability Scores by 2. The score can exceed 20 but can't exceed 24.",
  },
  KD: {
    cardName: "Sun",
    code: "KD",
    desc: " You gain 50,000 XP, and a wondrous item (which the DM determines randomly) appears in your hands.",
  },
  AC: {
    cardName: "Talons",
    code: "AC",
    desc: "Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do Vanish.",
  },
  KH: {
    cardName: "Throne",
    code: "KH",
    desc: "You gain proficiency in the Persuasion skill, and you double your Proficiency Bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of Monsters, which you must clear out before you can claim the keep as. yours.",
  },
  AD: {
    cardName: "Vizier",
    code: "AD",
    desc: "At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with Wisdom on how to apply it.",
  },
  KC: {
    cardName: "The Void",
    code: "KC",
    desc: "This black card Spells Disaster. Your soul is drawn from your body and contained in an object in a place of the DM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is Incapacitated. A wish spell can't restore your soul, but the spell reveals the Location of the object that holds it. You draw no more cards.",
  },
};

var cardCodes = [
  "JC",
  "KS",
  "JS",
  "QD",
  "JH",
  "QH",
  "X2",
  "2C",
  "2H",
  "X1",
  "QC",
  "AH",
  "QS",
  "AS",
  "2D",
  "2S",
];

var getDndApi = function () {
  var dndApi = "https://api.open5e.com/magicitems/?search=things";
  //api call

  fetch(dndApi).then(function (response) {
    response.json().then(function (data) {
      var cardDescriptions = data.results[0].desc;
      var tempArr = cardDescriptions.split("**_").reverse();

      for (var i = 0; i < 16; i++) {
        var cards = tempArr[i].split("_**. ");
        dndObject[cardCodes[i]] = {
          cardName: cards[0],
          desc: cards[1],
          code: cardCodes[i],
        };
      }
      insertDndInfo(dndObject);
    });
  });
};

var insertDndInfo = function (dndObject) {
  var cardId0 = document.getElementById("AD");
  var cardId1 = document.getElementById("KD");
  var cardId2 = document.getElementById("QD");
  var cardId3 = document.getElementById("JD");
  var cardId4 = document.getElementById("2D");
  var cardId5 = document.getElementById("AH");
  var cardId6 = document.getElementById("KH");
  var cardId7 = document.getElementById("QH");
  var cardId8 = document.getElementById("JH");
  var cardId9 = document.getElementById("2H");
  var cardId10 = document.getElementById("AC");
  var cardId11 = document.getElementById("KC");
  var cardId12 = document.getElementById("QC");
  var cardId13 = document.getElementById("JC");
  var cardId14 = document.getElementById("2C");
  var cardId15 = document.getElementById("AS");
  var cardId16 = document.getElementById("KS");
  var cardId17 = document.getElementById("QS");
  var cardId18 = document.getElementById("JS");
  var cardId19 = document.getElementById("2S");
  var cardId20 = document.getElementById("X1");
  var cardId21 = document.getElementById("X2");

  var cardDescInsert0 = dndObject["AD"].desc;
  var cardDescinsert1 = dndObject["KD"].desc;
  var cardDescinsert2 = dndObject["QD"].desc;
  var cardDescinsert3 = dndObject["JD"].desc;
  var cardDescinsert4 = dndObject["2D"].desc;
  var cardDescinsert5 = dndObject["AH"].desc;
  var cardDescinsert6 = dndObject["KH"].desc;
  var cardDescinsert7 = dndObject["QH"].desc;
  var cardDescInsert8 = dndObject["JH"].desc;
  var cardDescInsert9 = dndObject["2H"].desc;
  var cardDescInsert10 = dndObject["AC"].desc;
  var cardDescInsert11 = dndObject["KC"].desc;
  var cardDescInsert12 = dndObject["QC"].desc;
  var cardDescInsert13 = dndObject["JC"].desc;
  var cardDescInsert14 = dndObject["2C"].desc;
  var cardDescInsert15 = dndObject["AS"].desc;
  var cardDescInsert16 = dndObject["KS"].desc;
  var cardDescInsert17 = dndObject["QS"].desc;
  var cardDescInsert18 = dndObject["JS"].desc;
  var cardDescInsert19 = dndObject["2S"].desc;
  var cardDescInsert20 = dndObject["X1"].desc;
  var cardDescInsert21 = dndObject["X2"].desc;

  var cardNameInsert0 = dndObject["AD"].cardName;
  var cardNameInsert1 = dndObject["KD"].cardName;
  var cardNameInsert2 = dndObject["QD"].cardName;
  var cardNameInsert3 = dndObject["JD"].cardName;
  var cardNameInsert4 = dndObject["2D"].cardName;
  var cardNameInsert5 = dndObject["AH"].cardName;
  var cardNameInsert6 = dndObject["KH"].cardName;
  var cardNameInsert7 = dndObject["QH"].cardName;
  var cardNameInsert8 = dndObject["JH"].cardName;
  var cardNameInsert9 = dndObject["2H"].cardName;
  var cardNameInsert10 = dndObject["AC"].cardName;
  var cardNameInsert11 = dndObject["KC"].cardName;
  var cardNameInsert12 = dndObject["QC"].cardName;
  var cardNameInsert13 = dndObject["JC"].cardName;
  var cardNameInsert14 = dndObject["2C"].cardName;
  var cardNameInsert15 = dndObject["AS"].cardName;
  var cardNameInsert16 = dndObject["KS"].cardName;
  var cardNameInsert17 = dndObject["QS"].cardName;
  var cardNameInsert18 = dndObject["JS"].cardName;
  var cardNameInsert19 = dndObject["2S"].cardName;
  var cardNameInsert20 = dndObject["X1"].cardName;
  var cardNameInsert21 = dndObject["X2"].cardName;

  cardId0.append(cardNameInsert0 + " - " + cardDescInsert0);
  cardId1.append(cardNameInsert1 + " - " + cardDescinsert1);
  cardId2.append(cardNameInsert2 + " - " + cardDescinsert2);
  cardId3.append(cardNameInsert3 + " - " + cardDescinsert3);
  cardId4.append(cardNameInsert4 + " - " + cardDescinsert4);
  cardId5.append(cardNameInsert5 + " - " + cardDescinsert5);
  cardId6.append(cardNameInsert6 + " - " + cardDescinsert6);
  cardId7.append(cardNameInsert7 + " - " + cardDescinsert7);
  cardId8.append(cardNameInsert8 + " - " + cardDescInsert8);
  cardId9.append(cardNameInsert9 + " - " + cardDescInsert9);
  cardId10.append(cardNameInsert10 + " - " + cardDescInsert10);
  cardId11.append(cardNameInsert11 + " - " + cardDescInsert11);
  cardId12.append(cardNameInsert12 + " - " + cardDescInsert12);
  cardId13.append(cardNameInsert13 + " - " + cardDescInsert13);
  cardId14.append(cardNameInsert14 + " - " + cardDescInsert14);
  cardId15.append(cardNameInsert15 + " - " + cardDescInsert15);
  cardId16.append(cardNameInsert16 + " - " + cardDescInsert16);
  cardId17.append(cardNameInsert17 + " - " + cardDescInsert17);
  cardId18.append(cardNameInsert18 + " - " + cardDescInsert18);
  cardId19.append(cardNameInsert19 + " - " + cardDescInsert19);
  cardId20.append(cardNameInsert20 + " - " + cardDescInsert20);
  cardId21.append(cardNameInsert21 + " - " + cardDescInsert21);
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

  // console.log(CardNumber);

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
            // console.log(cardPullArr[i]);
            var li = document.createElement("li");
            li.setAttribute("id", cardPullArr[i].code); //"card-num-" + i
            li.setAttribute("class", "column is-2");
            li.innerHTML =
              "<img src='" +
              cardPullArr[i].image +
              "' /> <button class='js-modal-trigger' data-target='modal-js-example-" +
              cardPullArr[i].code +
              "'>Get Card Description</button>";
            cardsParentUl.appendChild(li);
          }
          addModalListener();
        });
      });
    } else console.log("Error");
  });
};

var addModalListener = () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
};

drawbtnEl.addEventListener("click", drawSubmitHandler);

getDndApi();
