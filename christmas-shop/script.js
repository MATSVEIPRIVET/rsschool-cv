document.querySelector('.nav-label').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('body').style.overflow = this.classList.contains('active') ? 'hidden' : 'auto' ;
  document.querySelector('.nav').classList.toggle('active');
});