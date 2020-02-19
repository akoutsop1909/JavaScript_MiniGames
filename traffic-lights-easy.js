var startTimer = -1;
var flag = false;
var hasReset = false;
var i = 0;
var seconds = []; 

function Reset() {
	stat.innerHTML = "";
	bText.value = "ΕΚΚΙΝΗΣΗ";
	bText.disabled = false;
	flag = false;
	hasReset = true;
	startTimer = -1;
	
	document.getElementById('top').src = "../../pictures/other/off.jpg";
	document.getElementById('bottom').src = "../../pictures/other/green.jpg";
}

function ResetAllElse() {
	stat.innerHTML = "";
	result.innerHTML = "";
	bText.value = "ΕΚΚΙΝΗΣΗ";
	i = 0;
}

function Mean() {
	var sum = 0;
	for (i = 0; i < seconds.length; i++) sum += seconds[i];
	mo = (sum / seconds.length).toFixed(3);
	
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
			seconds[i] = (stopTimer.getTime() - startTimer.getTime()) / 1000;
			
			stat.innerHTML = "Προσπάθεια " + (i+1) + ": " + seconds[i] + " δευτερόλεπτα";
			result.innerHTML = result.innerHTML + stat.innerHTML + "<br\>";
			bText.disabled = true;
			bText.value = "ΠΕΡΙΜΕΝΕΤΕ";
			i++;
			setTimeout(Reset, 3000);
			if (i == 5) setTimeout(Mean, 3000);
		}
	}
}

function RedLight() {
	if (flag | hasReset) return;
	
	document.getElementById('top').src = "../../pictures/other/red.jpg";
	document.getElementById('bottom').src = "../../pictures/other/off.jpg";
	startTimer = new Date();	
}