function myFunction() {
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("myBtn");
    console.log(btn);
    if (video.paused) {
        video.play();
        btn.classList.remove('fa-play-circle');
        btn.classList.add('fa-pause-circle');
    } else {
        video.pause();
        btn.classList.remove('fa-pause-circle');
        btn.classList.add('fa-play-circle');
    }
}

function setVideoHeight() {
    var windowHeight = window.innerHeight;
    var headerHeight = document.querySelector('header').clientHeight;
    var backgroundVideo = document.querySelector('.backgroundVideo');
    if (backgroundVideo) {
        backgroundVideo.style.height = windowHeight - headerHeight + 'px';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setVideoHeight();
});

window.addEventListener('resize', function () {
    setVideoHeight();
});

function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0; i < navA.length; i++){
        navA[i].addEventListener("focus", function (event) {
       var innerUl = event.target.parentElement.querySelector("ul")
       if(innerUl) innerUl.style.display = "block";
      }, true);
     }
      
       for(var i = 0, len = navInner.length; i < len; i++){
         if(navInner[i].parentElement.nextElementSibling === null){
           navInner[i].addEventListener("blur",function(event) {
             event.target.parentElement.parentElement.style.display = "none"
           },true);
         }
       }
  }


