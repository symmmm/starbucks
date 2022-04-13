

const badgeEl = document.querySelector('header .badges');
// window.addEventListener('scroll', function(){
//    console.log('scroll!!');
// });
//구글링: lodash cdn
//300=0.3s를 의미
window.addEventListener('scroll', _.throttle(
  function(){
    console.log('scroll!!');
    if(window.scrollY > 500){
      //배지 숨기기
      badgeEl.style.display = 'none';
      //구글링: gsap cdn
      //gsap.to(요소, 지속시간(s), 옵션);
      //주의: 시작적으로만 사라진다. --> display 옵션 추가
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none'
      });

      //to-top button  보이기
      gsap.to('#to-top', 0.2, {
        x: 0
      });
    }
    else{
      badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block'
      });

      //to-top button  숨기기: 오른쪽으로 이동
      gsap.to('#to-top', 0.2, {
        x: 100
      });
      

    }
  }, 300));

const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1,{
    delay: (index+1)*0.7,  //0.7 1.4 2.1 2.7 sec
    opacity:1
  });  
});


//구글링: swiperjs
// new Swiper(선택자, 옵션)
//강의에서 선택자를 swiper-container로 명시하는데, 이 경우 오류가 있다.
//선택자(and 클래스)는 swiper이다.
new Swiper('.notice--line .swiper',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});



//direction: 'horizontal'은 기본 값
//swiper-slide-active 클래스
new Swiper('.promotion .swiper',{  
  slidesPerView: 3, 
  spaceBetween: 10, 
  centeredSlides: true, 
  autoplay: {
    delay: 5000
  },
  loop: true,
  pagination:{
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle--promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    //숨김 처리: hide 클래스 추가
    promotionEl.classList.add('hide'); 
  }
  else{
    //보임 처리: hide 클래스 삭제
    promotionEl.classList.remove('hide'); 
  }
});

//램덤한 함수를 생성하는 함수
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
// gsap easing (easeInOut 타입 선택)
function floatingObject(selector, delay, size){  

  gsap.to(selector, random(1.5,2.5), {
    y:size,    
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInout,
    delay: random(0,delay)
  });
}

floatingObject('.floating1',1, 15);
floatingObject('.floating2',0.5, 15);
floatingObject('.floating3',1.5, 20);

// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소 지정
      triggerHook: .5        //뷰포트의 수식으로 상단부터 80%지점에 훅을 걸어 둠
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


// AWARDS
new Swiper('.awards .swiper',{
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }

});


// To-Top 
// 구글링: gsap cdn --> scrollToPlugin.min.js
// 버튼 보임/숨김은 앞에 scroll 클래스 부분에 추가처리
const toTopEl=document.querySelector('#to-top');
toTopEl.addEventListener('click', function(){
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});
