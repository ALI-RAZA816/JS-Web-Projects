document.addEventListener('DOMContentLoaded',()=>{

    // sticky header
    window.addEventListener('scroll',()=>{
        if(pageYOffset > 250){
            document.getElementById('header').classList.add('active');
        }else{
            document.getElementById('header').classList.remove('active');
        }
    });

    // ad box
    const AdBox = document.querySelector('.site-ad');
    let cross = document.getElementById('cross');
    cross.addEventListener('click',()=>{
        AdBox.classList.add('active');
    })
    
    // accorrion js
    const accordion_Btn = document.querySelectorAll('.accordion-btn');
    accordion_Btn.forEach(Btn=>{
         Btn.addEventListener('click',()=>{
            if(Btn.classList.contains('active')){
                Btn.classList.remove('active');
                Btn.nextElementSibling.style.display = 'none'; 
            }else{
                Btn.classList.add('active')
                Btn.nextElementSibling.style.display = 'block'; 
            }
        });
    });

    const barIcon = document.querySelector('.links .fa-bars');
    barIcon.addEventListener('click',()=>{
        links.classList.add('active');
    });

    //side bar js
    let crossIcon = document.querySelector('.fa-xmark');
    const links = document.querySelector('.links > ul');
    crossIcon.addEventListener('click',()=>{
        links.classList.remove('active');
    });

    //dropdown menu js
    const LIElment = document.querySelectorAll('.links ul li');
    LIElment.forEach(li=>{
        li.addEventListener('click',(event)=>{
            event.preventDefault();
            li.lastElementChild.classList.toggle('active');
        });
    });

    // swiper js
    new Swiper('.wrapper', {

        loop: true,
        spaceBetween:20,

        autoplay:{
            delay:5000
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },

        // responsive breakpoints

        breakpoints:{
            576:{
                slidesPerView:1
            },
            768:{
                slidesPerView:2
            },
            992:{
                slidesPerView:3
            },
            1200:{
                slidesPerView:4
            }
        }
    });
});