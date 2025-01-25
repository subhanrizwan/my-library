let cursorDot = document.querySelector(".cursor-dot");
let cursorOutline = document.querySelector(".cursor-outline");
window.addEventListener("mousemove",function (e){
    const posX = e.clientX;
    const posY = e.clientY;
    
     cursorDot.style.left = `${posX}px`;
     cursorDot.style.top = `${posY}px`;

     cursorOutline.style.left = `${posX}px`;
     cursorOutline.style.top = `${posY}px`;
      

})


// let cursorDot1 = document.getElementById("cursorDot");
// let cursorOutline1 = document.getElementById("cursorOutline");
//     let btns = document.querySelectorAll('.fizzy-btn,.cta-btn,a,i,.swiper-slide')
//     btns.forEach(button=>{
//       button.addEventListener('mouseenter',()=>{
//         cursorOutline1.style.display='none'
//         cursorDot1.style.width='90px'
//         cursorDot1.style.height='90px'
//         cursorDot1.style.transition='0.3s'
//         cursorDot1.style.background='rgba(255, 170, 23, 0.3)'
//       })
//       button.addEventListener('mouseleave', () => {
//   cursorOutline1.style.display = 'block';
//   cursorDot1.style.width = '8px';        
//   cursorDot1.style.height = '8px';     
//   cursorDot1.style.background = '#ffaa17';
// });
//     })