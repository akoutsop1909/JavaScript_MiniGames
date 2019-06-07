//thetoume arxiki random timi (1, 2, i 3) gia to pou kribetai o papas
var king_num = Math.floor((Math.random()*3)+1);

//thetoume arxiki timi 0 ston arithmo epituxion kai apotuxion
var win = 0;
var lose = 0;

function Reset() {
	//"anapodogurizoume" ta xartia oste na ksana arxisei to paixnidi
	pic1.src = "../../pictures/other/card_down.png";
	pic2.src = "../../pictures/other/card_down.png";
	pic3.src = "../../pictures/other/card_down.png";
	
	//thetoume kainourgia timi gia to pou brisketai o papas
	king_num = Math.floor((Math.random()*3)+1);
	
	//diagrafoume to periexomeno tou div_status
	document.getElementById('div_status').innerHTML = "";
}

//kaleitai otan o paiktis patisei opoiadipote apo tis 3 eikones me ta anapoda xartia
//i metabliti button_num krataei ton arithmo tis eikonas pou patise o paiktis
function findKing(button_num) {
	pic1 = document.getElementById('card1');
	pic2 = document.getElementById('card2');
	pic3 = document.getElementById('card3');
	
	stat = document.getElementById('div_status');
	//an to stat den einai adeio, o paiktis den exei patisei to koumpi reset
	if (stat.innerHTML != "") return;

	//bazoume ton papa sti sosti thesi analoga me ton random arithmo tis metablitis king_num
	if (king_num == 1) {
		pic1.src = "../../pictures/other/king.jpg";
		pic2.src = "../../pictures/other/jack.png";
		pic3.src = "../../pictures/other/jack.png";
	}
				
	else if (king_num == 2) {
		pic1.src = "../../pictures/other/jack.png";
		pic2.src = "../../pictures/other/king.jpg";
		pic3.src = "../../pictures/other/jack.png";
	}
				
	else if (king_num == 3) {
		pic1.src = "../../pictures/other/jack.png";
		pic2.src = "../../pictures/other/jack.png";
		pic3.src = "../../pictures/other/king.jpg";
	}
	
	//deixnoume ston paikti an kerdise kai enimeronoume tis metablites win kai lose
	if (king_num == button_num) {
		stat.innerHTML = "Κέρδισες!";
		win += 1;
	}
	else {
		stat.innerHTML = "Λάθος! Ξαναπροσπάθησε";
		lose += 1;
	}
	
	//enimeronoume to div me ton arithmo epituxion kai apotuxion
	document.getElementById('result').innerHTML = "Αριθμός επιτυχιών: " + win + ". Αριθμός αποτυχιών: " + lose + ".";
}