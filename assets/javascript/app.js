var countDown = 60;

var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

$(document).ready(function(){

    $("#container-2").hide();
    $("#container-3").hide();

    $("#start_button").on("click", function(){

		$("#container-1").hide();


		$("#container-2").show();

		startCountdown();
		return;

});

    function countdown(){
        countDown--;
        $("#time_left").html(countDown + " Seconds");
        $("#done_button").on("click", function(){

			countDown = 0;
			return;

			});


			// Finish the game after the timer reaches 0
			if(countDown == -1){

				// Collect the radio inputs
                timesUP(); 
                $("#container-2").hide();

			}

    }
    function startCountdown(){

		setInterval(countdown, 1000);

}

function timesUP() {
        var Q1 = $('input:radio[name="Q1"]:checked').val();
		var Q2 = $('input:radio[name="Q2"]:checked').val();
		var Q3 = $('input:radio[name="Q3"]:checked').val();
		var Q4 = $('input:radio[name="Q4"]:checked').val();
        var Q5 = $('input:radio[name="Q5"]:checked').val();

    if(Q1 == "Masamune") {
        correctCount++;
    }
    else{
        wrongCount++;
    }


   
  if(Q2 == "Celes") {
        correctCount++;
    }
    else{
        wrongCount++;
    }


    if(Q3 == "Warrior of Light") {
        correctCount++;
    }
    else{
        wrongCount++;
    }


   if(Q4 == "Zeromus, the Condemner") {
        correctCount++;
    }
    else{
        wrongCount++;
    }


   if(Q5 == "Jecht") {
        correctCount++;
    }
    else{
        wrongCount++;
    }
    
    $('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);


$("#container-3").show();
}

})