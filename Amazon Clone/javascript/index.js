document.addEventListener('DOMContentLoaded',()=>{

    let lc_hover = document.getElementById('lchover');
    let sortUp = document.getElementById('sort-up');
    let location = document.getElementById('location');

    function Pop_Up(){
            lc_hover.style.display = 'flex';
            sortUp.style.display = 'block';
            location.style.border = '1px solid #fff';
    }

    Pop_Up();

    //////////////////////////////////////////////////

    let dismissBtn = document.getElementById('dismiss');
    dismissBtn.addEventListener('click',()=>{
        lc_hover.style.display = 'none';
        sortUp.style.display = 'none';
        location.style.border = 'none';
    });

    ///////////////////////////////////////////////////////

    const span_value= document.querySelectorAll('#span-value');
    const set_value = document.querySelector('#set-value');
    span_value.forEach((span , index)=>{
        span.addEventListener('click',()=>{
            let value = span.textContent 
            set_value.textContent = value;
            options.classList.toggle('active');
        });
    });

    //////////////////////////////////////////////////////

    let selectOption = document.getElementById('select');
    let options = document.getElementById('options');
    selectOption.addEventListener('click',()=>{
        options.classList.toggle('active');
    });

    //////////////////////////////////////////////////////

    let SlideImages = document.querySelectorAll('#images');
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let counter = 0;

    right.addEventListener('click',nextSlide);
    function nextSlide(){
        SlideImages[counter].style.animation = 'next1 1s ease-in forwards';
        if(counter >= SlideImages.length-1){
            counter = 0
        }else{
            counter ++;
        }
        SlideImages[counter].style.animation = 'next2 1s ease-in forwards';
        right.style.border = '3px solid white';
    }

    left.addEventListener('click',prevSlide);
    function prevSlide(){
        SlideImages[counter].style.animation = 'prev1 1s ease-in forwards';
        if(counter == 0){
            counter = SlideImages.length-1;
        }else{
            counter --;
        }
        SlideImages[counter].style.animation = 'prev2 1s ease-in forwards';
        left.style.border = '3px solid white';
    }
    right.addEventListener('mouseup',()=>{
        setTimeout(()=>{
            right.style.border = 'none';
        },1000);

    });
    left.addEventListener('mouseup',()=>{
    setTimeout(()=>{
        left.style.border = 'none';
    },1000);

    });
    
    setInterval(()=>{
        prevSlide();
    },5000)
    
    ///////////////////////////////////////////////////
    
    let rightBtn = document.querySelectorAll('.right-btn');
    let leftBtn = document.querySelectorAll('.left-btn');
    let slides = document.querySelectorAll('.slides1');

    rightBtn.forEach((btn,index)=>{
        btn.addEventListener('click',()=>{
            slides[index].scrollLeft += 1420;
        });
    });

    leftBtn.forEach((btn,index)=>{
        btn.addEventListener('click',()=>{
            slides[index].scrollLeft -= 1420;
        });
    });

    //////////////////////////////////////////////////////

    const backTotop = document.querySelector('.back-to-top');
    backTotop.addEventListener('click',()=>{
      window.scrollTo({
        top:0,
        behavior:"smooth"
      });
    });

    //////////////////////////////////////////////////////

    let cross = document.getElementById('cross');
    let SideBar = document.getElementById('sidebar-container');
    let BodyOverlay = document.getElementById('body-overlay');
    let bars = document.getElementById('bars');
    function ShowOverlay(){
        setTimeout(()=>{
            BodyOverlay.style.display = 'block';
        },200)
    }
    bars.addEventListener('click',()=>{
        SideBar.style.left = '0';
        ShowOverlay();
        document.body.classList.add('stop-scroll');
    });
    function HideOverlay(){
        setTimeout(()=>{
            BodyOverlay.style.display = 'none';
        },500);
    }
    cross.addEventListener('click',()=>{
        SideBar.style.left = '-100%';
        HideOverlay();
        document.body.classList.remove('stop-scroll');
    });
});


