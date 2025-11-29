
'use strict';

let productData = [

    // books data
    {
        id:1,
        title:'Hear Your Story',
        category:'book',
        price:89.99,
        color:'blue',
        priceRange:'50-100',
        image:'./img/books/51+ROKEYviL._AC_SY400.jpg'
    },
    {
        id:2,
        title:'Gents Shirt',
        category:'clothe',
        price:30.22,
        color:'black',
        priceRange:'under50',
        image:'./img/clothes/61MHjUD24OL._AC_SY400.jpg'
    },
    {
        id:3,
        title:'Kettle',
        category:'kitchen',
        price:20.15,
        color:'white',
        priceRange:'under50',
        image:'./img/kitchen/217GQ1a2QzL._SY150.jpg'
    },
    {
        id:4,
        title:'kitchen',
        category:'electronic',
        price:55.85,
        color:'black',
        priceRange:'50 - 100',
        image:'./img/electronic/21W7-lndINL._SY150.jpg'
    },
    {
        id:5,
        title:'A lot while you sit on pot',
        category:'book',
        price:12.99,
        color:'black',
        priceRange:'under50',
        image:'./img/books/61ofAwaL8oL._AC_SY400.jpg'
    },
    {
        id:6,
        title:'Coffee Machine',
        category:'kitchen',
        price:45.04,
        color:'white',
        priceRange:'under50',
        image:'./img/kitchen/61Dff4DKHYL._AC_SY400.jpg'
    },
    {
        id:7,
        title:'Shirt',
        category:'clothe',
        price:55.35,
        color:'black',
        priceRange:'50 - 100',
        image:'./img/clothes/61neCjTolQL._AC_SY400.jpg'
    },
    {
        id:8,
        title:'kitchen',
        category:'electronic',
        price:505.65,
        color:'black',
        priceRange:'over200',
        image:'./img/electronic/51zPNcn8f1L._AC_SY400.jpg'
    },
    {
        id:9,
        title:'Pents',
        category:'clothe',
        price:150.45,
        color:'black',
        priceRange:'100 - 200',
        image:'./img/clothes/61nSSjhY6uL._AC_SY400.jpg'
    },
    {
        id:10,
        title:'Cozy Friends',
        category:'book',
        price:15.99,
        color:'white',
        priceRange:'under50',
        image:'./img/books/71HEaIuLeUL._AC_SY400.jpg'
    },
    {
        id:11,
        title:'Gents Pents/Shirts',
        category:'clothe',
        price:200.85,
        color:'black',
        priceRange:'over200',
        image:'./img/clothes/61Y8pQkviDL._AC_SY400.jpg'
    },
    {
        id:12,
        title:'kitchen',
        category:'electronic',
        price:150.21,
        color:'white',
        priceRange:'100 - 200',
        image:'./img/electronic/61Dff4DKHYL._AC_SY400.jpg'
    },
    {
        id:13,
        title:'Difficults friends',
        category:'book',
        price:25.19,
        color:'red',
        priceRange:'under50',
        image:'./img/books/71PGXt2n9uL._AC_SY400.jpg'
    },
    {
        id:14,
        title:'Gents Pents/Shirts',
        category:'clothe',
        price:80.56,
        color:'red',
        priceRange:'50 - 100',
        image:'./img/clothes/71h2MZlZgLL._AC_SY400.jpg'
    },
    {
        id:15,
        title:'Electric Machine',
        category:'electronic',
        price:75.55,
        color:'blue',
        priceRange:'100 - 200',
        image:'./img/electronic/61Jmz08At7L._AC_SY400.jpg'
    },
    {
        id:16,
        title:'Little Conrnsrs',
        category:'book',
        price:5.19,
        color:'red',
        priceRange:'under50',
        image:'./img/books/71QManc1wDL._AC_SY400.jpg'
    },
    {
        id:17,
        title:'Classical',
        category:'clothe',
        price:150.66,
        color:'white',
        priceRange:'100 - 200',
        image:'./img/clothes/71MnQermuOL._AC_SY400.jpg'
    },
    {
        id:18,
        title:'Electric Machine',
        category:'electronic',
        price:45.75,
        color:'white',
        priceRange:'under50',
        image:'./img/electronic/71BvCt6eAFL._AC_SY400.jpg'
    },
    {
        id:19,
        title:'kitchen electronic',
        category:'kitchen',
        price:25.97,
        color:'white',
        priceRange:'100-200',
        image:'./img/kitchen/21B-NkA9p-L._SY150.jpg'
    },
    {
        id:20,
        title:'Mom, I want to hear',
        category:'book',
        price:55.19,
        color:'black',
        priceRange:'100 - 200',
        image:'./img/books/71sOqrd6JHL._AC_SY400.jpg'
    },
    {
        id:21,
        title:'Shirt',
        category:'clothe',
        price:250.25,
        color:'blue',
        priceRange:'over200',
        image:'./img/clothes/81yrGRzMdeL._AC_SY400.jpg'
    },
    {
        id:22,
        title:'Coffee',
        category:'electronic',
        price:180.66,
        color:'white',
        priceRange:'100-200',
        image:'./img/electronic/71cMXnwKDpL._AC_SY400.jpg'
    },
    {
        id:23,
        title:'Sillky jokes',
        category:'book',
        price:10.19,
        color:'blue',
        priceRange:'under50',
        image:'./img/books/81AgoOPzO6L._AC_SY400.jpg'
    },
    {
        id:24,
        title:'Women Pents',
        category:'clothe',
        price:150.55,
        color:'blue',
        priceRange:'100 - 200',
        image:'./img/clothes/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947.jpg'
    },
    {
        id:25,
        title:'Plates',
        category:'kitchen',
        price:15.55,
        color:'white',
        priceRange:'under50',
        image:'./img/kitchen/51xiirhBrRL._AC_SY400.jpg'
    },
    {
        id:26,
        title:'Cooker',
        category:'electronic',
        price:80.66,
        color:'black',
        priceRange:'100-200',
        image:'./img/electronic/Multi-Cooker_2x._SY232_CB545166645.jpg'
    },
    {
        id:27,
        title:'Bottles',
        category:'kitchen',
        price:8.85,
        color:'white',
        priceRange:'under50',
        image:'./img/kitchen/51SxIyLWwUL._AC_SY400.jpg'
    },
    {
        id:28,
        title:'Kids clothe',
        category:'clothe',
        price:75.15,
        color:'white',
        priceRange:'50 - 100',
        image:'./img/clothes/DQC_APR_TBYB_W_TOPS_2x._SY232_CB623353881.jpg'
    },
    {
        id:29,
        title:'Gaming PC',
        category:'electronic',
        price:350.23,
        color:'black',
        priceRange:'over200',
        image:'./img/electronic/71P1MZ8ztDL._AC_SY400.jpg'
    },
    {
        id:30,
        title:'Women Outfit',
        category:'clothe',
        price:335.85,
        color:'white',
        priceRange:'over200',
        image:'./img/clothes/Fuji_BTF_Quad_Cards_2x_For_her._SY232_CB558654384.jpg'
    },
    {
        id:31,
        title:'Atomic Habbits',
        category:'book',
        price:120.19,
        color:'red',
        priceRange:'100-200',
        image:'./img/books/81ANaVZk5LL._AC_SY400.jpg'
    },
    {
        id:32,
        title:'Gaming PC',
        category:'electronic',
        price:550.66,
        color:'black',
        priceRange:'over200',
        image:'./img/electronic/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420.jpg'
    },
    {
        id:33,
        title:'Diary of Kids',
        category:'book',
        price:20.19,
        color:'red',
        priceRange:'under50',
        image:'./img/books/81mFBsBFYXL._AC_SY400.jpg'
    },
    {
        id:34,
        title:'Brandom Sanderson',
        category:'book',
        price:250.19,
        color:'blue',
        priceRange:'over200',
        image:'./img/books/81oQNU2eoPL._AC_SY400.jpg'
    },
    {
        id:35,
        title:'accer PC',
        category:'electronic',
        price:150.08,
        color:'black',
        priceRange:'100-200',
        image:'./img/electronic/71lKsFn1SHL._AC_SY400.jpg'
    },
    {
        id:36,
        title:'kitchen',
        category:'kitchen',
        price:53.35,
        color:'white',
        priceRange:'50 - 100',
        image:'./img/kitchen/51kWes2TtTL._AC_SY400.jpg'
    },
];

function totalProducts(){
    const productsLength = document.querySelector('.totalProducts');
    productsLength.innerHTML =`${productData.length} Products` ;
}

function renderProductData (productData){
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';
    productData.forEach(product=>{
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="card-header">
            <img src="${product.image}" alt="">
        </div>
        <div class="card-body">
            <h1 class="card-title">${product.title}</h1>
            <span class="card-price">$${product.price}</span>
            <div class="category">
            <span>${product.category}</span>
            <span>${product.color}</span>
            </div>
            </div>
            `
            productsContainer.appendChild(card);
            totalProducts();
        });
    };
    renderProductData(productData);
    
    let filterData = [];
    
    function filterDataLength(){
        const productsLength = document.querySelector('.totalProducts');
        productsLength.innerHTML = `${filterData.length} Products`; 
    }
    function addfilter(filterValue){
        filterData = productData.filter(item=> 
            item.category === filterValue || 
            item.color === filterValue ||
            item.priceRange === filterValue
    );
}

document.querySelectorAll('input[type="checkbox"]').forEach(input=>{
    input.addEventListener('change',()=>{
        if(input.checked){
            addfilter(input.value);
            renderProductData(filterData);
            filterDataLength()
            input.nextSibling.checked = false;
        }else{
            renderProductData(productData);
        }
    });
});







