(()=>{
    
    var typed = new Typed('#typed-text', {
            strings: ['Developer','Designer','Freelancer','Photographer'],
            typeSpeed: 100,
            backspeed:2000,
            backDelay: 2000,
            loop:true
        });


    let header = document.getElementById('header');
    const backtop = document.querySelector('.back-to-top');
    backtop.addEventListener('click',()=>{
        window.scrollTo({
            top:0
        })
    })
    window.addEventListener('scroll',()=>{
        if( scrollY >= 200){
            header.classList.add('active');
            backtop.classList.add('active');
        }else{
            header.classList.remove('active');
            backtop.classList.remove('active');
        }
    })

    const slides = document.querySelectorAll('.slides');
    const buttonsDiv = document.querySelector('.buttons');
    var i 
    for( i = 0; i<slides.length; i++){
        let btn = document.createElement('div');
        btn.className = 'dotBtn';
        buttonsDiv.appendChild(btn);
    }

    const dotBtn = document.querySelectorAll('.dotBtn');
    const slider = document.querySelector('.slider');
    dotBtn.forEach((e,index)=>{
        e.addEventListener('click',()=>{
            slider.style.transform = `translate(-${index*100}%)`;
            dotBtn.forEach(item=>{
                item.classList.remove('active');
            });
            e.classList.add('active');
        });
    });
    
    let slideIndex = 0;
    const autoSlider = ()=>{
        const dotBtn = document.querySelectorAll('.dotBtn');
        const slides = document.querySelectorAll('.slides');
        if(slideIndex <slides.length){
            for(var i = 0; i<dotBtn.length; i++){
                dotBtn[i].classList.remove('active');
            }
            dotBtn[slideIndex].classList.add('active');
            slider.style.transform =`translate(-${slideIndex*100}%)`;
            slideIndex ++;
        }else{
            slider.style.transform = 'transform(0px)';
            slideIndex = 0;
        }
    }
    dotBtn[0].classList.add('active');
    let SlideInterval = ()=>{
        setInterval(autoSlider,5000);
    }
    SlideInterval();

    const links = document.querySelectorAll('#links');
    const galleryContainer = document.querySelectorAll('.grid-container');
    let removeLinkClass = ()=>{
        for(var i=0; i<links.length; i++){
            links[i].classList.remove('active');
        }
    }
    let removecontainerClass = ()=>{
        for( var i=0; i<galleryContainer.length; i++){
            galleryContainer[i].classList.remove('active');
        }
    }
    links.forEach((link,index)=>{
        link.addEventListener('click',(event)=>{
            event.preventDefault();
            removeLinkClass();
            event.target.classList.add('active');
            removecontainerClass();
            galleryContainer[index].classList.add('active');
        });
    });
    links[0].click();


    let menuBtn = document.getElementById('menuBtn');
    let navMenu = document.getElementById('navMenu');
    const body = document.querySelector('body');
    menuBtn.addEventListener('click',()=>{
        navMenu.classList.add('active');
        body.style.overflow = 'hidden';
    });
    let crossBtn = document.getElementById('crossBtn');
    crossBtn.addEventListener('click',()=>{
        navMenu.classList.remove('active');
        body.style.overflowY = 'auto';
    })
    const MenuBtn = document.querySelectorAll('#angleDown');
    MenuBtn.forEach(btn=>{
        btn.addEventListener('click',()=>{
            btn.parentElement.nextElementSibling.classList.toggle('active');
        });
    });

})();



