/*
var elems = document.querySelectorAll(".one,.two,.three");
for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click",function(e){
    if(document.querySelector(".active")){
      document.querySelector(".active").classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  });
}
*/





$(document).ready(function() {
$(window).scroll(function() {
if ($(this).scrollTop() > 20) {
$('#toTopBtn').fadeIn();
} else {
$('#toTopBtn').fadeOut();
}
});

$('#toTopBtn').click(function() {
$("html, body").animate({
scrollTop: 0
}, 1000);
return false;
});
});
