// var images = [];
// var time = 3000;
//
// images[0] = '../images/pic1.jpg';
// images[1] = '../images/pic2.jpg';
// images[2] =  '..images/pic3.jpg';
//
// function changeImg() {
//   document.slide.src = images[i];
//
//   if(i < images.length - 1) {
//     i++;
//   } else {
//     1 = 0;
//   }
//   setTimeout("changeImg()", time);
// }
//
// window.onload = changeImg;
//




//homepage slideshow!
var slideIndex = 1;

// needs a while loop!
let plusDivs = (n) => {
  showDivs(slideIndex += n);
}
let showDivs = (n) => {
  let i;
  // debugger;
  let x = document.getElementsByClassName("item-image");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length;
  }
// realizing now that the while loop broke the slideshow.
// I've commented out the working forloop if you care to check it:
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
}

//   let i = 0;
//   while (i < x.length) {
//     x[i].style.display = "none";
//       i++;
// }
      console.log(slideIndex);
      x[slideIndex-1].style.display = "block";
  }
  showDivs(slideIndex-1);
