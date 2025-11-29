const LoaderContainer = document.querySelector('.loaderContainer');

window.addEventListener('load',()=>{
    LoaderContainer.classList.add('active');
})


const $MenuIcon = document.querySelector('#menuIcon');
const $Menu = document.querySelector('.menus');

$MenuIcon.addEventListener('click', () => {
    if ($MenuIcon.classList.contains('fa-bars')) {
        $MenuIcon.classList.remove('fa-bars');
        $MenuIcon.classList.add('fa-xmark');
        $Menu.classList.add('active');
    } else {
        $MenuIcon.classList.remove('fa-xmark');
        $MenuIcon.classList.add('fa-bars');
        $Menu.classList.remove('active');
    }
});


const $NavLink = document.querySelectorAll('#navLink');

$NavLink.forEach((link, index) => {
    link.addEventListener('click', () => {
        $NavLink.forEach((item, index) => {
            item.classList.remove('activeLink');
        });
        link.classList.add('activeLink');
    });
});


const $HeaderWrapper = document.querySelector('.headerWrapper');
window.addEventListener('scroll',()=>{
    let pageY = 500
    if(pageYOffset > pageY){
        $HeaderWrapper.classList.add('active');
    }else{
        $HeaderWrapper.classList.remove('active');
    }
});

const $ShopLinks = document.querySelectorAll('#shopLinks');
const $gameStock = document.querySelectorAll('.gamesStock');

$ShopLinks.forEach((link, index)=>{
    link.addEventListener('click',()=>{
        $gameStock.forEach(item=>{
            item.classList.remove('active');
        });
        $ShopLinks.forEach(item =>{
            item.classList.remove('active');
        });
        $ShopLinks[index].classList.add('active');
        $gameStock[index].classList.add('active');
    });
});


const $descBtn = document.querySelectorAll('.descBtn button');
const $descContainer = document.querySelectorAll('.descContainer');


$descBtn.forEach((btn, index)=>{
    btn.addEventListener('click',()=>{
        $descBtn.forEach(item=>{
            item.classList.remove('active');
        });
        $descContainer.forEach(item=>{
            item.classList.remove('active');
        })
        btn.classList.add('active');
        $descContainer[index].classList.add('active');
    })
})