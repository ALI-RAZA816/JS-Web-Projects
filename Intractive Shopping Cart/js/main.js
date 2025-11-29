// cart products
let products = [
   {
      id:1,
      image : 'img/apple-2561475_1920.jpg',
      title:'Wireless Headphones',
      price:89.99
   },
   {
      id:2,
      image : 'img/61bvvNpzQvL._AC_SY200.jpg',
      title:'Wireless Headphones',
      price:20.99
   },
   {
      id:3,
      image : 'img/61qoRnljFzL._AC_SY400.jpg',
      title:'Wireless Headphones',
      price:149.99
   },
   {
      id:4,
      image : 'img/71I6cozozUL._AC_SY400.jpg',
      title:'Wireless Headphones',
      price:20.99
   },
   {
      id:5,
      image : 'img/81Y26toqdTL._AC_SY400.jpg',
      title:'Wireless Headphones',
      price:85.99
   },
   {
      id:6,
      image : 'img/618Lig3bsML._AC_SY400.jpg',
      title:'Wireless Headphones',
      price:75.99
   },
   {
      id:7,
      image : 'img/719fCtAm+hL._AC_SY400.jpg',
      title:'Wireless Headphones',
      price:1250.99
   },
   {
      id:8,
      image : 'img/canon-5158887_1920.jpg',
      title:'Wireless Headphones',
      price:2052.99
   },
   {
      id:9,
      image : 'img/data-storage-319844_1920.jpg',
      title:'Wireless Headphones',
      price:355.99
   },
   {
      id:10,
      image : 'img/Fuji_BTF_Quad_Cards_1x_laptop._SY116_CB558654384.jpg',
      title:'Wireless Headphones',
      price:58.99
   },
   {
      id:11,
      image : 'img/Fuji_BTF_Quad_Cards_2x_Hard_Drives._SY232_CB558654384.jpg',
      title:'Wireless Headphones',
      price:102.99
   },
   {
      id:12,
      image : 'img/Fuji_Gaming_store_Dashboard_card_2x_EN._SY608_CB564799420.jpg',
      title:'Wireless Headphones',
      price:150.99
   },
   {
      id:13,
      image : 'img/Fuji_Quad_Apparel_2x._SY232_CB667159060.jpg',
      title:'Wireless Headphones',
      price:265.99
   },
   {
      id:14,
      image : 'img/Fuji_Quad_Hat_2x._SY232_CB667159060.jpg',
      title:'Wireless Headphones',
      price:1560.99
   },
   {
      id:15,
      image : 'img/HomeStorage_2x._SY232_CB563137408.jpg',
      title:'Wireless Headphones',
      price:558.99
   },
   {
      id:16,
      image : 'img/Iron_2x._SY232_CB545166645.jpg',
      title:'Wireless Headphones',
      price:1678.99
   },
   {
      id:17,
      image : 'img/keyboard-933568_1920.jpg',
      title:'Wireless Headphones',
      price:345.99
   },
   {
      id:18,
      image : 'img/MenWatches_2x._SY232_CB564394432.jpg',
      title:'Wireless Headphones',
      price:45.99
   },
];

// render each products to show on page
function renderProducts(){
    let ProductsContainer = document.querySelector('.product-container');
    ProductsContainer.innerHTML = '';
    products.forEach((item,index)=>{
        let box = document.createElement('box');
        box.classList.add('box');
        box.innerHTML = `
        <div class="cart-header">
            <img src="${item.image}" alt="">
        </div>
        <div class="card-body">
            <h1 class="card-title">${item.title}</h1>
            <span class="card-price">$${item.price}</span>
            <button class="cartBtn"><i class="fa-solid fa-cart-plus"></i>Add to Cart</button>
        </div>
        `
        ProductsContainer.appendChild(box);
    });

}
// initialize products function
renderProducts();


// cart array
let cartProduct = [];
console.log(cartProduct);

let cartProductLength = document.querySelector('.totalProduct');
function totalProductLength(){
   cartProductLength.textContent = cartProduct.length;
}

// add event listner to add to cart btn to add the product in cart
document.querySelectorAll('.cartBtn').forEach((btn,index)=>{
   btn.addEventListener('click',function(){
      cartProduct.push({
            ...products[index],
            quantity: 1
         });
         renderCartproducts();
         totalCalculation();
         totalProductLength();
   });
});

// function to show the cart product
function renderCartproducts(){
   document.querySelector('.total-calculation').style.display = 'block';
   const shoppingProduct = document.querySelector('.shopping-product');
   shoppingProduct.innerHTML = '';
   cartProduct.forEach((product,index)=>{
      let productBox = document.createElement('div');
      productBox.classList.add('cart-product');
      productBox.innerHTML = `
      <div>
         <div class="img"><img src="${product.image}" alt=""></div>
            <div style="display: flex;flex-direction: column;justify-content: center;">
               <span>${product.title}</span>
               <span>$${product.price}</span>
            </div>
         </div>
      <div>
         <div class="quantity">
            <i class="fa-solid fa-minus" data-id="${product.id}"></i>
            <p class="quantity">${product.quantity}</p>
            <i class="fa-solid fa-plus" data-id="${product.id}"></i>
         </div>
      </div>
      <i class="fa-solid fa-xmark" data-id="${product.id}"></i>
      `
      shoppingProduct.appendChild(productBox);
   });


   // add event listner to increase the quantity of the product
   document.querySelectorAll('.fa-plus').forEach((button,index)=>{
      button.addEventListener('click',function(){
         if(button[index + 1] === cartProduct.id){
            cartProduct[index].quantity++;
            // call this function on every click
            renderCartproducts();
            // call this function on every click
            totalCalculation();
         }
      });
   });

   // add event listner to decrease the quantity of the product
   document.querySelectorAll('.fa-minus').forEach((button,index)=>{
      button.addEventListener('click',function(){
         if(button[index + 1] === cartProduct.id){
            if(cartProduct[index].quantity <= 1){
               cartProduct[index].quantity = 1
               return true;
            }
            cartProduct[index].quantity--;
            // call this function on every click
            renderCartproducts();
            // call this function on every click
            totalCalculation();
         };
      });
   });
   
   // add event listner on cross to remove the product from an array and also form cart 
   document.querySelectorAll('.fa-xmark').forEach((button,index)=>{
      button.addEventListener('click',()=>{
         if(button[index + 1] === cartProduct.id){
            cartProduct.splice(index,1);
            // call this function on every click
            renderCartproducts();
            // call this function on every click
            totalCalculation();
            totalProductLength();
         }
      });
   });
}

// calculation
function totalCalculation(){
   const subtotal = cartProduct.reduce((sum,item) => sum + (item.price * item.quantity),0);
   const tax = subtotal * 0.08;
   const shipping = subtotal > 0 ? 5.99 : 9;
   const total = subtotal + tax + shipping; 
   const totalCal = document.querySelector('.total-calculation');
   totalCal.innerHTML = `
   <p><span>Subtotal:</span><span class="subtotal">$${subtotal.toFixed(2)}</span></p>
   <p><span>Tax(8%):</span><span class="tax">$${tax.toFixed(2)}</span></p>
   <p><span>Shipping:</span><span class="shipping">$${shipping.toFixed(2)}</span></p>
   <h3><span>Total</span><span class="total">$${total.toFixed(2)}</span></h3>
   <button class="checkout">Checkout</button>
   `
}





