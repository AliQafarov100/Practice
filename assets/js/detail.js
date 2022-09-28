// let swiper = document.querySelector(".swipers");
// let swiperItem = document.querySelectorAll(".swiper-slide");
// let count = 0;
// let width;
// let next = document.querySelector(".right");
// let prev = document.querySelector(".left")



// function init() {
//   width = document.querySelector(".swip").offsetWidth;
//   swiper.style.width = width * swiperItem.length + 'px';
//   swiperItem.forEach(item => {
//     item.style.width = width + 'px';
//   })

//   rollSlider();
// }

// init();

// window.addEventListener('resize', init);


// next.addEventListener("click", function () {
//   count++;
  
//   if (count >= swiperItem.length - 1) {
//     next.style.pointerEvents = "none";
//   }
//   prev.style.pointerEvents = "auto";

  
//   rollSlider();
// });




// prev.addEventListener("click", function () {
//   count--;

//   if (count <= 0) {
//     prev.style.pointerEvents = "none";
//   }
//   next.style.pointerEvents = "auto";

//   rollSlider();
// })


// function rollSlider() {
//   swiper.style.transform = 'translate(-' + count * width + 'px)';
// }
let offset = 0;
let left = document.querySelector(".fa-chevron-left");
let right = document.querySelector(".fa-chevron-right");
let sliderLine = document.querySelector(".swipers")
let swiperSlide = document.querySelectorAll(".swiper-slide");


right.addEventListener("click",function(e){
    e.preventDefault();

      offset += 300;
  

      if((offset >= (swiperSlide.length ) * 600)){
       offset = 0;
        
      }
      else if(offset >= (swiperSlide.length - 1) * 600){
        offset = 0;
      }
      
    
    
    left.style.pointerEvents = "auto";
    sliderLine.style.left = -offset + 'px';

    
});

left.addEventListener("click",function(e){
  e.preventDefault();
  
  if(offset == 0){
    
    left.style.pointerEvents = "none"
    
  }
  else{
    offset -= 300;
    if(offset == 0){
      left.style.pointerEvents = "none"
    }
    sliderLine.style.left = -offset + 'px';
  }
  right.style.pointerEvents = "auto";
  
})