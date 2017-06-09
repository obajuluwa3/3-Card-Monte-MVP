var shuffleCount = 0
var shuffleTimer
var targetCard = $("#cardBack2")
var clicked


// Randomly choose which cards to swap
var shuffle = function() {
	var randomNum = Math.floor((Math.random()*2) + 1);
	if (randomNum === 1) {
		console.log(randomNum)
		console.log("Switch Left Cards")
		switchLeftCards();
	} else if (randomNum === 2) {
		console.log(randomNum)
		console.log("Switch Right Cards")
		switchRightCards();
	}
	if (shuffleCount === 10) {
    	stopTime();
    	$("#messages").text("Click one of the cards to find the Queen of Hearts!")
    	cards = document.querySelectorAll(".wholeCard");
    	prepCards();
    } else {
	shuffleCount++;
	}
}

// Swap the 2 cards on the left 1 time
var switchLeftCards = function() {
	var card1 = $("#back1 .cardBack");
	var card2 = $("#back2 .cardBack");
	var front1 = $("#card1Wrapper .playingCard")
	var front2 = $("#card2Wrapper .playingCard")
	card1.animate({left: '205px'}, function() {
	});
	card2.animate({left: '-205px'}, function(){
		$("#back2").append(card1);
		$("#card2Wrapper").append(front1);
		$(card1).css("left", "0");
		$("#back1").append(card2);
		$("#card1Wrapper").append(front2);
		$(card2).css("left", "0");
	});
}

// Swap the 2 cards on the right 1 time
var switchRightCards = function() {
	var card2 = $("#back2 .cardBack");
	var card3 = $("#back3 .cardBack");
	var front2 = $("#card2Wrapper .playingCard")
	var front3 = $("#card3Wrapper .playingCard")
	card2.animate({left: '205px'}, function() {
	});
	card3.animate({left: '-205px'}, function() {
		$("#back3").append(card2);
		$("#card3Wrapper").append(front2);
		$(card2).css("left", "0");
		$("#back2").append(card3);
		$("#card2Wrapper").append(front3);
		$(card3).css("left", "0");
	});
}

// Stop the shuffling
var stopTime = function() {
	clearInterval(shuffleTimer);
}

$("#shuffleBtn").click(function(){
    $(".cardBackWrapper").css("display", "block");
    $(".cardFrontWrapper").css("display", "none");
    shuffleTimer = setInterval(function(){shuffle()}, 450)
    $(this).attr("disabled", "disabled");
    $("#messages").text("Shuffling...")
});

// After shuffle, get the cards ready to be clicked to reveal
var cards
var i = 0
var prepCards = function() {
  for ( var i  = 0; i < cards.length; i++ ) {
    var card = cards[i];
    clickListener(card);
  }
}

// Adds "flipped" class to card div to change CSS and engage flip
var clickListener = function(card) {
    card.addEventListener( "click", function() {
   	    $(card.firstElementChild).css("display", "block");
	  	$(card.lastElementChild).css("display", "none");
	  	console.log(clicked + " was clicked.")
	  	console.log(targetCard + " is the target card.")
	  	clicked = $(event.target)
	  	if (clicked[0] !== targetCard[0]) {
	  		console.log("Nope! Try Again.")
    		$("#messages").text("Nope! Try Again.")
    	} else {
    		console.log("Correct!")
    		$("#messages").text("Correct!")
    	}
    //	Partial code for smooth card flip
      // var c = this.classList;
      // if (c.contains("flipped") !== true) {
      //   c.add("flipped");
      // }
    });
}