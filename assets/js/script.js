var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 5000);

	var button = document.getElementsByClassName("button")
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");

	for (var i=0; i<button; i++) {
		button[i].style.backgroundColor = 'red';
	}

	for (var i=0; i<objs.length; i++) {
 		objs[i].style.width = slidewidth+"px";
 	}
}

function passarSlide(){
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	if(slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem ++;
	}
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";

}

function mudarSlide(pos) {
	slideItem = pos;

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";

 /*	for(var x=0; x<4; x++) {
		document.getElementsByClassName("button")[x].style.backgroundColor = '#CCC';
	}
	document.getElementsByClassName("button")[pos].style.backgroundColor = 'red';
 */ 
}

