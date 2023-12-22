document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    var logoNav = document.querySelector(".logo-nav");
    var divHeight = header.offsetHeight;
    window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;
  
      if (scrollPosition > (divHeight-120)) {
        logoNav.classList.add("dark-bg");
      } else {
        logoNav.classList.remove("dark-bg");
      }
    });
  });


  /**
   * 
   *  document.addEventListener('DOMContentLoaded', function() {
    var headContainer=document.querySelector("#header .back-img ")
    setTimeout(function() {
        // Add a class to start the animation
        headContainer.classList.add('animate');
    }, 100);

    setTimeout(function() {
        animatedElement.classList.remove('animate');
    }, 300);
   */