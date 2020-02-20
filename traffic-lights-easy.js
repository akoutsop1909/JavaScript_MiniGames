var startTimer = -1;
var flag = false;
var hasReset = false;
var i = 0;
var sum = 0;
var seconds; 

function Reset() {
	stat.innerHTML = "";
	bText.value = "ΕΚΚΙΝΗΣΗ";
	bText.disabled = false;
	flag = false;
	hasReset = true;
	startTimer = -1;
	
	document.getElementById('top').src = "../../pictures/other/off.jpg";
	document.getElementById('bottom').src = "../../pictures/other/off.jpg";
}

function ResetAllElse() {
	stat.innerHTML = "";
	result.innerHTML = "";
	bText.value = "ΕΚΚΙΝΗΣΗ";
	i = 0;
	sum = 0;
}

function EndGame() {
	mo = (sum / i).toFixed(3);
	
	stat.innerHTML = "Μέσος Όρος: " + mo + " δευτερόλεπτα";
	bText.value = "ΠΑΙΞΤΕ ΞΑΝΑ";
}

function ButtonClicked() {
	bText = document.getElementById('startButton');
	result = document.getElementById('result');
	stat = document.getElementById('div_status');
	
	if (bText.value == "ΠΑΙΞΤΕ ΞΑΝΑ") ResetAllElse();
	
	if (bText.value == "ΕΚΚΙΝΗΣΗ") {
		bText.value = "ΣΤΟΠ";
		hasReset = false;
		
		document.getElementById('top').src = "../../pictures/other/off.jpg";
		document.getElementById('bottom').src = "../../pictures/other/green.jpg";
	
		sec = Math.floor((Math.random()*7000)+1000);
		setTimeout(RedLight, sec);
	}
	
	else {
		if (startTimer == -1) {
			flag = true;
			stat.innerHTML = "Ο σηματοδότης ήταν ακόμη πράσινος!";
			bText.disabled = true;
			bText.value = "ΠΕΡΙΜΕΝΕΤΕ";
			setTimeout(Reset, 3000);
		}
		
		else {
			stopTimer = new Date();
			seconds = (stopTimer.getTime() - startTimer.getTime()) / 1000;
			
			stat.innerHTML = "Προσπάθεια " + (i+1) + ": " + seconds + " δευτερόλεπτα";
			result.innerHTML = result.innerHTML + stat.innerHTML + "<br\>";
			bText.disabled = true;
			bText.value = "ΠΕΡΙΜΕΝΕΤΕ";
			sum = sum + seconds;
			i++;
			setTimeout(Reset, 3000);
			if (i == 5) setTimeout(EndGame, 3000);
		}
	}
}

function RedLight() {
	if (flag | hasReset) return;
	
	document.getElementById('top').src = "../../pictures/other/red.jpg";
	document.getElementById('bottom').src = "../../pictures/other/off.jpg";
	startTimer = new Date();	
}