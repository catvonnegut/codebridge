let signUp = () => {
  var x = document.getElementById("msg");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// function signUp() {
//     var x = document.getElementById("msg");
//     x.className = "show";
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
// }

//homepage slideshow!
// var slide = 1;
//
// let showSlide = (n) => {
//   Slide(slide += n);
// }
// let showSlide = (n) => {
//   let x = document.getElementsByClassName("item");
//   if (n > x.length) {
//     slide = 1
//   }
//   if (n < 1) {
//     slide = x.length-1
//   }
//   for (let i = 0; i < slide; i++) {
//     x[i].style.display = "none";
//
//   }
//       console.log(slideIndex);
//       x[slide].style.display = "block";
//   }
//   showSlide(slide);
//
//
//
//
//
// //This is for an email sign up modal, but I need to incorporate validation logic.
//
// var modal = document.getElementById('myModal');
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on the button, open the modal
// btn.onclick = function() {
// modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
// modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// if (event.target == modal) {
// modal.style.display = "none";
// }
// }
//
//
//
//
// //This is for the shopping Cart
