var shuffleCount = 0;
var shuffleTimer;
var targetCard;
var clicked;
var startTable = $("#cardTable").clone();
var startMsgBoard = $("#messages").clone();
var clickedOnce = false
var clickToReset = false;
var speedTracker = 850;


// Randomly choose which cards to swap
var shuffle = function() {
	var randomNum = Math.floor((Math.random()*3) + 1);
	if (randomNum === 1) {
		console.log(randomNum)
		console.log("Switch Left Cards")
		switchLeftCards();
	} else if (randomNum === 2) {
		console.log(randomNum)
		console.log("Switch Right Cards")
		switchRightCards();
	} else if (randomNum === 3) {
		console.log(randomNum)
		console.log("Switch End Cards")
		switchEndCards();
	}
	if (shuffleCount === 10) {
    	stopTime();
    	$("#messages").text("Click one of the cards to find the Queen of Hearts!")
    	cards = document.querySelectorAll(".wholeCard");
    	console.log(targetCard);
    	clickedOnce = false;
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
	card1.animate({left: '205px'},200, function() {
	});
	card2.animate({left: '-205px'},200, function(){
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
	card2.animate({left: '205px'},200, function() {
	});
	card3.animate({left: '-205px'},200, function() {
		$("#back3").append(card2);
		$("#card3Wrapper").append(front2);
		$(card2).css("left", "0");
		$("#back2").append(card3);
		$("#card2Wrapper").append(front3);
		$(card3).css("left", "0");
	});
}

// Swap the 2 end cards 1 time
var switchEndCards = function() {
	var card1 = $("#back1 .cardBack");
	var card3 = $("#back3 .cardBack");
	var front1 = $("#card1Wrapper .playingCard")
	var front3 = $("#card3Wrapper .playingCard")
	card1.animate({left: '405px'},200, function() {
	});
	card3.animate({left: '-405px'},200, function() {
		$("#back3").append(card1);
		$("#card3Wrapper").append(front1);
		$(card1).css("left", "0");
		$("#back1").append(card3);
		$("#card1Wrapper").append(front3);
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
    shuffleTimer = setInterval(function(){shuffle()}, speedTracker)
    $(this).attr("disabled", "true");
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
	  	console.log(clicked);
	  	if (clickToReset === true) {
	  		resetCards();
	  	} else {
		  	targetCard = $("#cardBack2");
		  	clicked = $(event.target);
		  	if (clickedOnce === false) {
		  		if (clicked.parent().parent().index() !== targetCard.parent().parent().index()) {
			  		console.log("Nope! Game Over.")
		    		$("#messages").text("Nope! Game Over.")
		    		speedTracker = 850;
		    		$("#score")[0].innerText = 0;
		    		$("#speed")[0].innerText = 1;
		    		resetCards();
	    		} else {
		    		console.log("Correct!")
		    		$("#messages").text("Correct!")
		    		$("#score")[0].innerText++;
	    			if ($("#score")[0].innerText % 3 === 0 && $("#score")[0].innerText !== 0) {
	    				$("#speed")[0].innerText++;
	    				speedTracker = speedTracker - 200
	    			}
	    			resetCards();
	    		}
		  	} else {
		  		clickToReset = true;
		  	}
    	clickedOnce = true;
    	// Code to reset the cards to the original state
		// $("#cardTable").replaceWith(startTable.clone());
		$("#shuffleBtn")[0].disabled = false;
		shuffleCount = 0
    	// Partial code for smooth card flip
     //  var c = this.classList;
     //  if (c.contains("flipped") !== true) {
     //    c.add("flipped");
     //  }
	  }
    });
}

var resetCards = function() {
	clickedOnce = false;
	console.log("clickedOnce is now false")
	console.log(clickedOnce)
	setTimeout(function() {$("#messages").text("Reseting cards..."); }, 1000)
	setTimeout(function() {$("#cardTable").replaceWith(startTable.clone());}, 2000);
	setTimeout(function() {$("#messages").replaceWith(startMsgBoard.clone()); }, 2000);
	clickToReset = false;
}
