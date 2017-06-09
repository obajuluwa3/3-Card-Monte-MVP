var cards = document.querySelectorAll(".card.effect__click");
var prepCards = function() {
  for ( var i  = 0; i < cards.length; i++ ) {
    var card = cards[i];
    clickListener(card);
  }
}

function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      if (c.contains("flipped") !== true) {
        c.add("flipped");
      }
    });
}

prepCards();