
$('.nav__menu a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.nav__menu').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 300);
});


$(function(){
	$('.product-card').hover(function() {
	   $(this).find('.description').animate({
		 height: "toggle",
		 opacity: "toggle"
	   }, 300);
	 });
});

$('.bottom-links a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.bottom-links').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');


function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


let count = 1;
document.getElementById("r1").checked = true;

setInterval(function(){
	nextImage();
}, 4000)

function nextImage() {
	count++;
	if(count>4){
		count = 1;
	}

	document.getElementById("r"+count).checked = true;

	document.getElementById("")
}