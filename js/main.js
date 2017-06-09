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
    	$("#messages").text("Click one of the cards to find the Queen of Hearts!")
    } else {
	shuffleCount++;
	}
}


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

var stopTime = function() {
	clearInterval(shuffleTimer);
}

$("#shuffleBtn").click(function(){
    $(".cardBackWrapper").css("display", "block");
    $(".playingCard").css("display", "none");
    shuffleTimer = setInterval(function(){shuffle()}, 1000)
    $(this).attr("disabled", "disabled");
    $("#messages").text("Shuffling...")
	// switchLeftCards();
	// switchRightCards();
});