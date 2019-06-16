//thetoume arxiki random timi (1, 2, i 3) gia to pou kribetai o papas
var king_num = Math.floor((Math.random()*3)+1);

//thetoume arxiki timi 0 ston arithmo epituxion kai apotuxion
var win = 0;
var lose = 0;

function Reset() {
	//"anapodogurizoume" ta xartia oste na ksana arxisei to paixnidi
	pic1.src = "../../pictures/other/card_down.jpg";
	pic2.src = "../../pictures/other/card_down.jpg";
	pic3.src = "../../pictures/other/card_down.jpg";
	
	//thetoume kainourgia timi gia to pou brisketai o papas
	king_num = Math.floor((Math.random()*3)+1);
	
	//diagrafoume to periexomeno tou div_status
	document.getElementById('div_status').innerHTML = "";
}

//kaleitai otan o paiktis patisei opoiadipote apo tis 3 eikones me ta anapoda xartia
//i metabliti button_num krataei ton arithmo tis eikonas pou patise o paiktis
function findKing(pic_num) {
	pic1 = document.getElementById('card1');
	pic2 = document.getElementById('card2');
	pic3 = document.getElementById('card3');
	
	stat = document.getElementById('div_status');
	//an to stat den einai adeio, den exei ginei akoma reset
	if (stat.innerHTML != "") {
		stat.innerHTML = "Παρακαλώ περιμένετε...";
		return;
	}

	//deixnoume ston paikti ti krubetai piso apo tin karta stin opoia ekane klik
	switch(pic_num) {
		case 1: 
			if (king_num == 1) pic1.src = "../../pictures/other/king.jpg";
			else pic1.src = "../../pictures/other/ace.png";
			break;
			
		case 2:
			if (king_num == 2) pic2.src = "../../pictures/other/king.jpg";
			else pic2.src = "../../pictures/other/ace.png";
			break;
			
		case 3: 
			if (king_num == 3) pic3.src = "../../pictures/other/king.jpg";
			else pic3.src = "../../pictures/other/ace.png";
			break;
	}
	
	//deixnoume ston paikti an kerdise kai enimeronoume tis metablites win kai lose
	if (king_num == pic_num) {
		stat.innerHTML = "Κέρδισες!";
		win += 1;
	}
	else {
		stat.innerHTML = "Λάθος! Ξαναπροσπάθησε";
		lose += 1;
	}
	
	//enimeronoume to div me ton arithmo epituxion kai apotuxion
	document.getElementById('result').innerHTML = "Αριθμός επιτυχιών: " + win + ". Αριθμός αποτυχιών: " + lose + ".";
	
	//ginetai reset tou paixnidiou
	setTimeout(Reset, 1600);
}