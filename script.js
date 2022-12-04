function vguess()
{
	var message = document.getElementById("message");

	var input = document.getElementById('guess').value;
	var random = Math.floor(Math.random() * 10);
	if(input == random)
		message.innerHTML = "<h1>Congratulations</h1>\n<p>You guessed it right</p>";
	else
		message.innerHTML = "<h1>Oops</h1>\n<p>You missed it. The number was <span id='rand'>"+random+"</span></p>";
}
