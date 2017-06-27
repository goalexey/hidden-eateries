// Array, function and variable to set random background images of page
let background = ['./images/background01.jpg', './images/background02.jpg', './images/background03.jpg', './images/background04.jpg', './images/background05.jpg', './images/background06.jpg', './images/background07.jpg', './images/background08.jpg', './images/background09.jpg'];
function rdmArrEl(array){
	let index = Math.round(Math.random() * (array.length - 1));
	return array[index];
}
let bgImg = rdmArrEl(background);
let mq = window.matchMedia( "(max-width: 600px)" );


    // document.body.style.background = "url(images/mob-background.jpg) no-repeat center center fixed";

document.body.style['background-image'] = "url("+bgImg+")";







console.log(bgImg);