//bazoume tis eikones se enan pinaka
var myimages = new Array();
	myimages[0] = "../../pictures/sm/133-01.jpg";
	myimages[1] = "../../pictures/sm/133-02.jpg";
	myimages[2] = "../../pictures/sm/133-03.jpg";
	myimages[3] = "../../pictures/sm/133-04.jpg";
	myimages[4] = "../../pictures/sm/133-05.jpg";
	myimages[5] = "../../pictures/sm/133-06.jpg";
	myimages[6] = "../../pictures/sm/133-07.jpg";
	myimages[7] = "../../pictures/sm/133-08.jpg";
	myimages[8] = "../../pictures/sm/133-09.jpg";
	myimages[9] = "../../pictures/sm/133-10.jpg";
	myimages[10] = "../../pictures/sm/133-11.jpg";
	myimages[11] = "../../pictures/sm/133-12.jpg";
	myimages[12] = "../../pictures/sm/133-13.jpg";
	myimages[13] = "../../pictures/sm/133-14.jpg";
	myimages[14] = "../../pictures/sm/133-15.jpg";
	myimages[15] = "../../pictures/sm/133-16.jpg";
	myimages[16] = "../../pictures/sm/133-17.jpg";
	myimages[17] = "../../pictures/sm/133-18.jpg";
	myimages[18] = "../../pictures/sm/133-19.jpg";
	myimages[19] = "../../pictures/sm/133-20.jpg";
	myimages[20] = "../../pictures/sm/133-21.jpg";
	myimages[21] = "../../pictures/sm/133-22.jpg";
	myimages[22] = "../../pictures/sm/133-23.jpg";
	myimages[23] = "../../pictures/sm/133-24.jpg";
	myimages[24] = "../../pictures/sm/133-25.jpg";
	myimages[25] = "../../pictures/sm/133-26.jpg";
	myimages[26] = "../../pictures/sm/133-27.jpg";
	myimages[27] = "../../pictures/sm/133-28.jpg";
	myimages[28] = "../../pictures/sm/133-29.jpg";
	myimages[29] = "../../pictures/sm/133-30.jpg";

//arxiki thesi tou pinaka
var index = 0;

//function gia tin proigoumeni eikona
function previous() {
	index--;
	if (index == -1) index = 0;
	document.getElementById("eikona").src = myimages[index];	
}

//function gia tin epomeni eikona
function next() {
	index++;
	if (index == myimages.length) index = 0;
	document.getElementById("eikona").src = myimages[index];	
}