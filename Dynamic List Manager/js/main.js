
'use strict';

// variable Declaration for DOM
let fruitInput = document.getElementById('fruitInput');
let addfruitBtn = document.getElementById('FruitBtn');
let vegeInput = document.getElementById('vegetablesInput');
let vegeBtn = document.getElementById('vegeBtn');
const crossIcon = document.querySelectorAll('.fa-xmark');


// initialize fruits array to store data
let fruitArr = [
    // { id:1, val : 'Apple'},
    // { id:2, val : 'Banana'},
    // {id:3, val : 'Orange'},
    // { id:4, val : 'Mango'},
    // { id:5, val : 'Grapes'},
];

// initialize vegetables array to store data
let vegeArr = [
    // { id:1, val : 'Carrot'},
    // { id:2, val : 'Broccoli'},
    // { id:3, val : 'Spinach'},
    // { id:4, val : 'Potato'},
    // { id:5, val : 'Tomato (botanically a fruit, but commonly treated as a vegetable)'},
];

// id indexes
let fruitindex = 0;
let vegetindex = 0;

// display error if the required field is empty
function fruitErrMsg (){
    fruitInput.classList.remove('active');
    return;
}
fruitInput.addEventListener('blur',fruitErrMsg);

// main fruit fucntion to get value from fruit input field
function fruitList(){
    if(fruitInput.value){
        let obj = {
            id : ++fruitindex,
            val : fruitInput.value
        }
        fruitInput.value = '';
        fruitArr.push(obj);
        fruitListrender();
        return true;
    }else{
        fruitInput.classList.add('active');
        return false;
    }
}


// render each value of fruit field 
function fruitListrender (){
    let fruitListContainer = document.getElementById('fruits-list-container');
    fruitListContainer.innerHTML = '';
    fruitArr.forEach((item,index)=>{
        let li = document.createElement('li');
        li.innerHTML = `${item.val}<i class="fa-solid fa-xmark"></i>`;
        fruitListContainer.appendChild(li);
        li.querySelector('.fa-xmark').addEventListener('click',() => li.remove());
    });
}


// initialize function
fruitListrender();
//add event listner
addfruitBtn.addEventListener('click',fruitList);

// vegetables error message if the require field is empty
function vegeErrMsg (){
    vegeInput.classList.remove('active');
    return;
}
vegeInput.addEventListener('blur',vegeErrMsg);

// main vegetable function to get the vegetable form input field
function vegetableList(){
    if(vegeInput.value){
        let obj = {
            id : ++vegetindex,
            val : vegeInput.value
        }
        vegeInput.value = '';
        vegeArr.push(obj);
        vegetableListrender();
        return true;
    }else{
        vegeInput.classList.add('active');
        return false;
    }
}

// render each value of vegetable field
function vegetableListrender (){
    let vegeListContainer = document.getElementById('vegetables-list-container');
    vegeListContainer.innerHTML = '';
    vegeArr.forEach((item,index)=>{
        let li = document.createElement('li');
        li.innerHTML = `${item.val}<i class="fa-solid fa-xmark"></i>`;
        vegeListContainer.appendChild(li);
        li.querySelector('.fa-xmark').addEventListener('click',() => li.remove());
    });
}
// intialize
vegetableListrender();
// add event listner
vegeBtn.addEventListener('click',vegetableList);

// merge the fruit array & vegetable array in one  array
function mergedList(){
    let mergedListArr = fruitArr.concat(vegeArr);
    let mergeList = document.querySelector('.mergeList');
    mergeList.innerHTML = '';
    mergedListArr.forEach((item,index)=>{
        let li = document.createElement('li');
        li.classList.add('list');
        li.innerHTML = `${item.val}`;
        mergeList.appendChild(li);
    });
};
let mergeBtn = document.querySelector('.mergeListbutton');
// add event listner 
mergeBtn.addEventListener('click',mergedList);



