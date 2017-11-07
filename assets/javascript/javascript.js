$(document).ready(function() {

	var random = Math.floor(Math.random()*102+19);

	$("#numberToGet").text(random);

	var userTotal= 0;
	var wins = 0;
	var losses = 0;

	$("#numberWins").text(wins);
	$("#numberLosses").text(losses);

	function reset() {
		random = Math.floor(Math.random()*102+19);
		console.log(random);
		$("#numberToGet").text(random);
		$("#image1").attr("value", Math.floor(Math.random()*12+1));
		$("#image2").attr("value", Math.floor(Math.random()*12+1));
		$("#image3").attr("value", Math.floor(Math.random()*12+1));
		$("#image4").attr("value", Math.floor(Math.random()*12+1));
		userTotal = 0;
		$("#score").text(userTotal);
	}

	function winner() {
		alert("You Won!!");
		wins++;
		$("#numberWins").text(wins);
		reset();
	}

	function loser() {
		alert("You Lose!!");
		losses++;
		$("#numberLosses").text(losses);
		reset();
	}

	$(".image").on("click", function() {
		userTotal += parseInt($(this).attr("value"));
		console.log("New userTotal " + userTotal);
		$("#score").text(userTotal);
		
		if (userTotal === random) {
			winner()
		}

		else if (userTotal > random) {
			loser()
		} 
	})

reset();

});