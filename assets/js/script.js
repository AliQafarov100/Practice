let swiper = document.querySelector(".swipers");
let swiperItem = document.querySelectorAll(".swiper-slide");
let count = 0;
let width;
let nexts = document.querySelectorAll(".next");
let prevs = document.querySelectorAll(".prev")



function init() {
  width = document.querySelector(".swip").offsetWidth;
  swiper.style.width = width * swiperItem.length + 'px';
  swiperItem.forEach(item => {
    item.style.width = width + 'px';
  });

  rollSlider();
}

init();

window.addEventListener('resize', init);


nexts.forEach(next => {
  next.addEventListener("click", function () {
    count++;
    
    

    if (count >= swiperItem.length - 1) {
      next.style.pointerEvents = "none";
      prev.style.pointerEvents = "auto";
     
    }
    console.log(count);
   
    rollSlider();
  });
  
})

prevs.forEach(prev => {
  prev.addEventListener("click", function () {
    count--;
  
    if (count <= 0) {
      prev.style.pointerEvents = "none";
      next.style.pointerEvents = "auto";
    }
    console.log(count);
    rollSlider();
  })
})


function rollSlider() {
  swiper.style.transform = 'translate(-' + count * width + 'px)';
}

