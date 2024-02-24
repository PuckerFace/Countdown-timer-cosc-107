   
   


var countDownDate = new Date(" March 1, 2024 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;


  // when count has fineshed
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("giveaway").innerHTML = "Giveaway has ended";

  }
}, 1000);