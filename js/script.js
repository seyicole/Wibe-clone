function openNav(){
  document.getElementById('myNav').style.width="100%";
  document.getElementById('navigation').style.visibility = "hidden";
  var element = document.getElementById('nav-text');
  element.classList.add('overlay-text');
   AOS.refresh()
}

function closeNav(){
  document.getElementById('myNav').style.width="0%";
  document.getElementById('navigation').style.visibility = "visible";
  var element = document.getElementById('nav-text');
  element.classList.remove('overlay-text');
}


var x = 0;
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  // to change nav color on scroll
  x = window.pageYOffset + 0;
  console.log(x)
    if(document.body.scrollTop >= 500 && document.body.scrollTop <= 3200){
    document.getElementById('navigation').style.backgroundColor='black';
    document.getElementById('logo').style.fill='white';
    document.getElementById('stroke').style.stroke='white';
  }
 else{
    document.getElementById('navigation').style.backgroundColor='white';
    document.getElementById('logo').style.fill='black';
    document.getElementById('stroke').style.stroke='black';
  }
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var currentScrollPos = window.pageYOffset;  
if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}