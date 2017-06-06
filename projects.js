function show(shown, hidden) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(hidden).style.display = "none";
  left();
  return false;
}
function start() {
  document.getElementById("1").style.display = "block";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
}
function left() {
  var one = document.getElementById("1").style.display;
  var two = document.getElementById("2").style.display;
  var tre = document.getElementById("3").style.display;
  console.log(one, two, tre);
  if(one==="block"){
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "block";
  }
  if(two==="block"){
    document.getElementById("1").style.display = "block";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
  }
  if(tre==="block"){
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "block";
    document.getElementById("3").style.display = "none";
  }
}
function right() {
  var one = document.getElementById("1").style.display;
  var two = document.getElementById("2").style.display;
  var tre = document.getElementById("3").style.display;
  console.log(one, two, tre);
  if(one==="block"){
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "block";
    document.getElementById("3").style.display = "none";
  }
  if(two==="block"){
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "block";
  }
  if(tre==="block"){
    document.getElementById("1").style.display = "block";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
  }
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
