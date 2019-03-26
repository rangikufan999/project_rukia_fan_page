//Used to change the banner in the top left corner of the page to a hover version of the image.
function changeImage(element){
	element.src = "img/corner-banner-hover.png";
	element.style.marginLeft = "-24px";
	element.style.marginTop = "-12px";
}

//Reverts the banner image in the corner back.
function changeImageBack(element){
	element.src = "img/corner-banner.png";
	element.style.marginLeft = "-3px";
	element.style.marginTop = "-6px";
}
