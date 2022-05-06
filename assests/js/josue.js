// deckId declaration
var deckId = "";
var cardPullArr = [];

var deckFetch = function () {
  var deckUrl = "http://deckofcardsapi.com/api/deck/new/?jokers_enabled=true";

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
    "http://deckofcardsapi.com/api/deck/" + deckId + "/shuffle/";
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
    "http://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=54";

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
    "http://deckofcardsapi.com/api/deck/" +
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
  var amount = 10;
  if (amount < 1 || cards < amount) {
    console.log("Please select an appropriate amount");
  }

  var shuffleUrl =
    "http://deckofcardsapi.com/api/deck/" + deckId + "/shuffle/?remaining=true";

  var drawUrl =
    "http://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=" + amount;

  fetch(shuffleUrl).then(function (response) {
    if (response.ok) {
      fetch(drawUrl).then(function (response) {
        response.json().then(function (cardPull) {
          cardPullArr = cardPull.cards;
          console.log(cardPullArr);
        });
      });
    } else console.log("Error");
  });
};

// deckFetch();

// for each in Array, search DND array for card name/description and add it to object
