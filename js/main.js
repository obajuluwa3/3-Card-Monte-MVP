 
   // $("#shuffleBtn").click(function(){
    // 	$(".cardBackWrapper").css("display", "block");
    // 	$(".playingCard").css("display", "none");
    // 	for (var i = 0; i < 10; i++) {
    // 		var randomNum = Math.floor((Math.random()*2) + 1);
    // 		if (randomNum === 1) {
    // 			switchLeftCards();
    // 		} else if (randomNum === 2) {
    // 			switchRightCards();
    // 		}
    // 	}
    // });

var switchLeftCards = function() {
	var cards = []
	var card1 = $("#back1 .cardBack");
	var card2 = $("#back2 .cardBack");
	card1.animate({left: '205px'});
	card2.animate({left: '-205px'}, function(){
		$("#back2").append(cards[0]);
		$(cards[0]).css("left", "0");
		$("#back1").append(cards[1]);
		$(cards[1]).css("left", "0");
	});
	cards.push(card1)
	cards.push(card2)
}

var switchRightCards = function() {
	var cards = []
	var card2 = $("#back2 .cardBack");
	var card3 = $("#back3 .cardBack");
	card2.animate({left: '205px'});
	card3.animate({left: '-205px'}, function() {
		$("#back3").append(cards[0]);
		$(cards[0]).css("left", "0");
		$("#back2").append(cards[1]);
		$(cards[1]).css("left", "0");
	});
	cards.push(card2)
	cards.push(card3)
}

$("#shuffleBtn").click(function(){
    $(".cardBackWrapper").css("display", "block");
    $(".playingCard").css("display", "none");
	// switchLeftCards();
	// switchRightCards();
});