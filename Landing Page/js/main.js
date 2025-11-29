const swiper = new Swiper('.swiper', {
    loop: true,
    // spnacebetween each slide
    spaceBetween:20,

    // change autoslide
    autoplay:{
        delay:5000
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },

});

document.querySelector('.fa-bars').addEventListener('click',()=>{
    document.querySelector('.fa-xmark').style.display = 'block';
    document.querySelector('.fa-bars').style.display = 'none';
    document.querySelector('.container > .header-content > nav').style.right = '0';
});

document.querySelector('.fa-xmark').addEventListener('click',()=>{
    document.querySelector('.fa-bars').style.display = 'block';
    document.querySelector('.fa-xmark').style.display = 'none';
    document.querySelector('.container > .header-content > nav').style.right = '-100%';
});