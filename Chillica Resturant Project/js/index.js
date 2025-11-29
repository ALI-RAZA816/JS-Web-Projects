
const $menuLinks = document.querySelectorAll('#menu .menu-links');
const $menuCardBox = document.querySelectorAll('#menu-card-box');

$menuLinks.forEach((button,index)=>{
    button.addEventListener('click',(event)=>{
        event.preventDefault();
        $menuLinks.forEach(btn=>{
            btn.classList.remove('active');
        });
        $menuCardBox.forEach(box=>{
            box.classList.remove('active');
        })
        button.classList.add('active');
        $menuCardBox[index].classList.add('active');
    });
});
$menuLinks[0].click();