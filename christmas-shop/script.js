document.querySelector('.nav-label').addEventListener('click', function() {
  console.log('click');
  this.classList.toggle('active');
  document.getElementById('body').style.overflow = this.classList.contains('active') ? 'hidden' : 'auto' ;
  document.querySelector('.nav').classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(element => {
  element.addEventListener('click', function() {
  document.querySelector('.nav-label').classList.toggle('active');
  document.querySelector('.nav').classList.toggle('active');
})
})

const scrollTopBtn = document.querySelector('.scroll-top-button');

window.onscroll = function() {
  if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopBtn.classList.remove('hidden');
    } else {
      scrollTopBtn.classList.add('hidden');
    }
  }

scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

