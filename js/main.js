var shuffleCount = 0
var shuffleTimer

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
    } else {
	shuffleCount++;
	}
}


var switchLeftCards = function() {
	var card1 = $("#back1 .cardBack");
	var card2 = $("#back2 .cardBack");
	card1.animate({left: '205px'}, function() {
		// shuffle()
	});
	card2.animate({left: '-205px'}, function(){
		$("#back2").append(card1);
		$(card1).css("left", "0");
		$("#back1").append(card2);
		$(card2).css("left", "0");
	});
}

var switchRightCards = function() {
	var card2 = $("#back2 .cardBack");
	var card3 = $("#back3 .cardBack");
	card2.animate({left: '205px'}, function() {
	});
	card3.animate({left: '-205px'}, function() {
		$("#back3").append(card2);
		$(card2).css("left", "0");
		$("#back2").append(card3);
		$(card3).css("left", "0");
		// shuffle()
	});
}

var stopTime = function() {
	clearInterval(shuffleTimer);
}

$("#shuffleBtn").click(function(){
    $(".cardBackWrapper").css("display", "block");
    $(".playingCard").css("display", "none");
    shuffleTimer = setInterval(function(){shuffle()}, 1000)
	// switchLeftCards();
	// switchRightCards();
});