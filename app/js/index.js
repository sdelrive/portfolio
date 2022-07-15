const menuBtn = document.querySelector("#menu_btn");
const header = document.querySelector('.header');



menuBtn.addEventListener('click',function(){
  console.log('click menu_btn');


  if(header.classList.contains('open')){
    header.classList.remove('open');
  }

  else{
    header.classList.add('open');
  }

})






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
