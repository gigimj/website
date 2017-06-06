function blue() {
  document.getElementById("blah").innerHTML = "blah";
  document.body.style.backgroundColor = "blue";
}
function red() {
  document.getElementById("blah").innerHTML = "dog";
  document.body.style.backgroundColor = "red";
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
