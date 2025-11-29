let productData = [
    
    // books data
    {
        id:1,
        title:'hear your story',
        category:'books',
        price:89.99,
        rate:3.5,
        ratingText:'3+ stars',
        color:'blue',
        priceRange:'$50-$100',
        image:'./img/books/51+ROKEYviL._AC_SY400.jpg',
        description:'premium noise-cancelling headphones with 30hr battery life'
    },
    {
        id:2,
        title:'gents shirt',
        category:'clothing',
        price:30.22,
        rate:2.1,
        ratingText:'2+ stars',
        color:'black',
        priceRange:'under$50',
        image:'./img/clothes/61MHjUD24OL._AC_SY400.jpg',
        description:'prack your heart rate, steps, and sleep patterns'
    },
    {
        id:3,
        title:'kettle',
        category:'home & kitchen',
        price:20.15,
        color:'white',
        ratingText:'2+ stars',
        rate:2.5,
        priceRange:'under$50',
        image:'./img/kitchen/217GQ1a2QzL._SY150.jpg',
        description:'comfortable and breathable cotton t-shirt for everyday wear'
    },
    {
        id:4,
        title:'kitchen',
        category:'electronic',
        price:55.85,
        color:'black',
        priceRange:'$50 - $100',
        ratingText:'3+ stars',
        rate:3.3,
        image:'./img/electronic/21W7-lndINL._SY150.jpg',
        description:'slim-fit jeans with premium denim fabric'
    },
    {
        id:5,
        title:'a lot while you sit on pot',
        category:'books',
        price:12.99,
        color:'black',
        priceRange:'under$50',
        ratingText:'4+ stars',
        rate:4.3,
        image:'./img/books/61ofAwaL8oL._AC_SY400.jpg',
        description:'learn programming basics with practical examples'
    },
    {
        id:6,
        title:'coffee machine',
        category:'home & kitchen',
        price:45.04,
        color:'white',
        ratingText:'4+ stars',
        priceRange:'under$50',
        rate:4.5,
        image:'./img/kitchen/61Dff4DKHYL._AC_SY400.jpg',
        description:'brew perfect coffee with programmable settings'
    },
    {
        id:7,
        title:'shirt',
        category:'clothing',
        rate:3.9,
        ratingText:'3+ stars',
        price:55.35,
        color:'black',
        priceRange:'$50 - $100',
        image:'./img/clothes/61neCjTolQL._AC_SY400.jpg',
        description:'latest model with advanced camera and processor'
    },
    {
        id:8,
        title:'kitchen',
        category:'electronic',
        price:505.65,
        rate:5.5,
        ratingText:'5+ stars',
        color:'black',
        priceRange:'over $200',
        image:'./img/electronic/51zPNcn8f1L._AC_SY400.jpg',
        description:'waterproof and insulated jacket for cold weather'
    },
    {
        id:9,
        title:'pents',
        category:'clothing',
        price:150.45,
        ratingText:'4+ stars',
        color:'black',
        priceRange:'$100 - $200',
        rate:4.5,
        image:'./img/clothes/61nSSjhY6uL._AC_SY400.jpg',
        description:'1000+ recipes from around the world'
    },
    {
        id:10,
        title:'cozy friends',
        category:'books',
        price:15.99,
        color:'white',
        priceRange:'under $50',
        ratingText:'3+ stars',
        rate:3.4,
        image:'./img/books/71HEaIuLeUL._AC_SY400.jpg',
        description:'smart navigation with app control'
    },
    {
        id:11,
        title:'gents pents/shirts',
        category:'clothing',
        price:200.85,
        color:'black',
        rate:3.7,
        ratingText:'3+ stars',
        priceRange:'over $200',
        image:'./img/clothes/61Y8pQkviDL._AC_SY400.jpg',
        description:'mechanical keys with RGB lighting'
    },
    {
        id:12,
        title:'kitchen',
        category:'electronic',
        price:150.21,
        color:'white',
        ratingText:'2+ stars',
        priceRange:'$100 - $200',
        rate:2.6,
        image:'./img/electronic/61Dff4DKHYL._AC_SY400.jpg',
        description:'non-stick and oven-safe cookware'
    },
    {
        id:13,
        title:'difficults friends',
        category:'books',
        price:25.19,
        color:'red',
        priceRange:'under$50',
        ratingText:'2+ stars',
        rate:2.8,
        image:'./img/books/71PGXt2n9uL._AC_SY400.jpg'
    },
    {
        id:14,
        title:'gents pents/shirts',
        category:'clothing',
        price:80.56,
        color:'red',
        priceRange:'$50 - $100',
        ratingText:'3+ stars',
        rate:3.2,
        image:'./img/clothes/71h2MZlZgLL._AC_SY400.jpg'
    },
    {
        id:15,
        title:'electric machine',
        category:'electronic',
        price:75.55,
        color:'blue',
        rate:1.6,
        ratingText:'1+ stars',
        priceRange:'$100 - $200',
        image:'./img/electronic/61Jmz08At7L._AC_SY400.jpg'
    },
    {
        id:16,
        title:'little conrnsrs',
        category:'books',
        price:5.19,
        color:'red',
        rate:3.5,
        ratingText:'3+ stars',
        priceRange:'under$50',
        image:'./img/books/71QManc1wDL._AC_SY400.jpg'
    },
    {
        id:17,
        title:'classical',
        category:'clothing',
        price:150.66,
        color:'white',
        rate:3.3,
        ratingText:'3+ stars',
        priceRange:'$100 - $200',
        image:'./img/clothes/71MnQermuOL._AC_SY400.jpg'
    },
    {
        id:18,
        title:'electric machine',
        category:'electronic',
        price:45.75,
        color:'white',
        priceRange:'under$50',
        rate:3.1,
        ratingText:'3+ stars',
        image:'./img/electronic/71BvCt6eAFL._AC_SY400.jpg'
    },
    {
        id:19,
        title:'kitchen electronic',
        category:'home & kitchen',
        price:25.97,
        color:'white',
        priceRange:'$100-$200',
        rate:4.5,
        ratingText:'4+ stars',
        image:'./img/kitchen/21B-NkA9p-L._SY150.jpg'
    },
    {
        id:20,
        title:'mom, i want to hear',
        category:'books',
        price:55.19,
        color:'black',
        rate:4.8,
        priceRange:'$100 - $200',
        ratingText:'4+ stars',
        image:'./img/books/71sOqrd6JHL._AC_SY400.jpg'
    },
    {
        id:21,
        title:'shirt',
        category:'clothing',
        price:250.25,
        color:'blue',
        priceRange:'over $200',
        ratingText:'4+ stars',
        rate:4.2,
        image:'./img/clothes/81yrGRzMdeL._AC_SY400.jpg'
    },
    {
        id:22,
        title:'coffee',
        category:'electronic',
        price:180.66,
        color:'white',
        priceRange:'$100-$200',
        rate:2.2,
        ratingText:'2+ stars',
        image:'./img/electronic/71cMXnwKDpL._AC_SY400.jpg'
    },
    {
        id:23,
        title:'sillky jokes',
        category:'books',
        price:10.19,
        color:'blue',
        priceRange:'under$50',
        rate:2.8,
        ratingText:'2+ stars',
        image:'./img/books/81AgoOPzO6L._AC_SY400.jpg'
    },
    {
        id:24,
        title:'women pents',
        category:'clothing',
        price:150.55,
        color:'blue',
        rate:3.7,
        ratingText:'3+ stars',
        priceRange:'$100 - $200',
        image:'./img/clothes/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947.jpg'
    },
    {
        id:25,
        title:'plates',
        category:'home & kitchen',
        rate:3.3,
        ratingText:'3+ stars',
        price:15.55,
        color:'white',
        priceRange:'under$50',
        image:'./img/kitchen/51xiirhBrRL._AC_SY400.jpg'
    },
    {
        id:26,
        title:'cooker',
        category:'electronic',
        price:80.66,
        rate:3.1,
        ratingText:'3+ stars',
        color:'black',
        priceRange:'$100-$200',
        image:'./img/electronic/Multi-Cooker_2x._SY232_CB545166645.jpg'
    },
    {
        id:27,
        title:'bottles',
        category:'home & kitchen',
        price:8.85,
        color:'white',
        rate:1.9,
        ratingText:'1+ stars',
        priceRange:'under$50',
        image:'./img/kitchen/51SxIyLWwUL._AC_SY400.jpg'
    },
    {
        id:28,
        title:'kids clothe',
        category:'clothing',
        price:75.15,
        color:'white',
        rate:2.4,
        ratingText:'2+ stars',
        priceRange:'$50 - $100',
        image:'./img/clothes/DQC_APR_TBYB_W_TOPS_2x._SY232_CB623353881.jpg'
    },
    {
        id:29,
        title:'gaming pC',
        category:'electronic',
        price:350.23,
        color:'black',
        rate:2.8,
        ratingText:'2+ stars',
        priceRange:'over $200',
        image:'./img/electronic/71P1MZ8ztDL._AC_SY400.jpg'
    },
    {
        id:30,
        title:'women outfit',
        category:'clothing',
        price:335.85,
        color:'white',
        rate:4.7,
        ratingText:'4+ stars',
        priceRange:'over $200',
        image:'./img/clothes/Fuji_BTF_Quad_Cards_2x_For_her._SY232_CB558654384.jpg'
    },
    {
        id:31,
        title:'atomic habbits',
        category:'books',
        price:120.19,
        color:'red',
        rate:4.2,
        ratingText:'4+ stars',
        priceRange:'$100-$200',
        image:'./img/books/81ANaVZk5LL._AC_SY400.jpg'
    },
    {
        id:32,
        title:'gaming pC',
        category:'electronic',
        price:550.66,
        color:'black',
        priceRange:'over $200',
        rate:4.1,
        ratingText:'4+ stars',
        image:'./img/electronic/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420.jpg'
    },
    {
        id:33,
        title:'diary of kids',
        category:'books',
        price:20.19,
        color:'red',
        priceRange:'under$50',
        rate:3.5,
        ratingText:'3+ stars',
        image:'./img/books/81mFBsBFYXL._AC_SY400.jpg'
    },
    {
        id:34,
        title:'brandom sanderson',
        category:'books',
        price:250.19,
        color:'blue',
        priceRange:'over $200',
        rate:3.5,
        ratingText:'3+ stars',
        image:'./img/books/81oQNU2eoPL._AC_SY400.jpg'
    },
    {
        id:35,
        title:'accer PC',
        category:'electronic',
        price:150.08,
        color:'black',
        priceRange:'$100-$200',
        rate:2.5,
        ratingText:'3+ stars',
        image:'./img/electronic/71lKsFn1SHL._AC_SY400.jpg'
    },
    {
        id:36,
        title:'kitchen',
        category:'home & kitchen',
        price:53.35,
        color:'white',
        priceRange:'$50 - $100',
        rate:4.4,
        ratingText:'4+ stars',
        image:'./img/kitchen/51kWes2TtTL._AC_SY400.jpg'
    },
];


function renderProductData(productData){
    const productBox = document.querySelector('.product-box');
    productBox.innerHTML = '';
    productData.forEach(item=>{
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="card-header">
            <img src="${item.image}" alt="">
        </div>
        <div class="card-body">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span>${item.category}</span>
            <div class="price">
                <span>$${item.price}<span class="rate"><i class="fa-solid fa-star"></i> ${item.rate}</span></span>
            </div>
        </div>
        `;
        productBox.appendChild(card);
    });

};
// renderProductData(productData);

let filterProduct = [];

function filterData(filterValue){
    filterProduct = productData.filter(item=> item.category === filterValue || item.priceRange === filterValue || item.title.includes(filterValue) || item.ratingText === filterValue);
    renderProductData(filterProduct);
}

let categoryBtn = document.querySelectorAll('.category-btn');
let pricebtn = document.querySelectorAll('.price-btn');
let filterInput = document.querySelector('#filterInput');
let ratingBtn = document.querySelectorAll('.rating-btn');

categoryBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        categoryBtn.forEach(item=>{item.classList.remove('active')});
        pricebtn.forEach(item=>{item.classList.remove('active')});
        ratingBtn.forEach(item=>{item.classList.remove('active')});
        btn.classList.add('active');
        if(btn.classList.contains('active')){
            let textValue = btn.textContent.toString().toLowerCase();
            (textValue === 'ALL' || textValue === 'all')? renderProductData(productData):filterData(textValue);
            return true;
        };
    });
});
categoryBtn[0].click();

pricebtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        pricebtn.forEach(item=>{item.classList.remove('active')});
        categoryBtn.forEach(item=>{item.classList.remove('active')});
        ratingBtn.forEach(item=>{item.classList.remove('active')});
        btn.classList.add('active');
        if(btn.classList.contains('active')){
            let textValue = btn.textContent.toString().toLowerCase();
            (textValue === 'ALL Prices' || textValue === 'all prices')? renderProductData(productData):filterData(textValue);
            return true;
        };
    });
});

filterInput.addEventListener('input',()=>{
    let inputValue = filterInput.value.toString().toLowerCase();
    (filterInput.value === '')? renderProductData(productData):filterData(inputValue);
});

ratingBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        ratingBtn.forEach(item=>{item.classList.remove('active')});
        pricebtn.forEach(item=>{item.classList.remove('active')});
        categoryBtn.forEach(item=>{item.classList.remove('active')});
        btn.classList.add('active');
        if(btn.classList.contains('active')){
            let textValue = btn.textContent.toString().toLowerCase();
            (textValue === 'ALL Ratings' || textValue === 'all ratings')? renderProductData(productData):filterData(textValue);
            return true;
        };
    });
})