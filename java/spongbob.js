let dt = new Date()
let ye = dt.getFullYear()
let mo = dt.getMonth()
let da = dt.getDay()
let hr = dt.getHours()
let mi = dt.getMinutes()

if (hr > 12) {
    hr = hr - 12
}
if (mi < 10) {
    mi = "0" + mi
}
document.getElementById('date-time').innerHTML =
    "year: " + ye + " \n" + "month: " + mo + " \n" +
"day: " + " \n" + da + "\n" + "hour: " + hr +
    ":" + mi



    //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}