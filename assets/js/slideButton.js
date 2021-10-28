const slideButton = document.querySelectorAll('.bar');    
function linkAction(){
  /*Active link*/
  slideButton.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}
slideButton.forEach(n => n.addEventListener('click', linkAction));