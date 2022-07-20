const menuBtn = document.querySelector("#menu_btn");
const header = document.querySelector('.header');
const body = document.querySelector('.body');
const faden = document.querySelectorAll('.faden');


// funcion menu hamburguesa
menuBtn.addEventListener('click',function(){
  console.log('click menuBtn');


  if(header.classList.contains('open')){
    header.classList.remove('open');

    faden.forEach(function(element){
      element.classList.remove('fadeIn')
      element.classList.add('fadeOut')
  
      })


  }

  else{
    header.classList.add('open');

    faden.forEach(function(element){
      element.classList.add('fadeIn')
      element.classList.remove('fadeOut')
  
      })
  }

})





  // revela objetos a medidda que bajo
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }


  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
