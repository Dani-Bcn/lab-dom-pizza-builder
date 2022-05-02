// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  //renderButtons()
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    state.pepperoni?
    onePep.style.visibility = 'visible'      
    :
    onePep.style.visibility = 'hidden'    
    
  })
}

function renderMushrooms() {
 
 document.querySelectorAll('.mushroom').forEach((oneMush)=>{ 
    state.mushrooms?
    oneMush.style.visibility = 'visible'
    :
    oneMush.style.visibility = "hidden"    
 }) }

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper)=>{
    state.greenPeppers?
    onePepper.style.visibility = "visible"
    :
    onePepper.style.visibility = "hidden"
  })

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  let stateSauce=document.querySelector(".sauce")
  state.whiteSauce?
  stateSauce.setAttribute("class","sauce")
  :
  stateSauce.setAttribute("class","sauce sauce-white")  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let stateCrust=document.querySelector(".crust")
  state.glutenFreeCrust?
  stateCrust.setAttribute("class","crust")
  :
  stateCrust.setAttribute("class"," crust crust-gluten-free")
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  let stateBtn=document.querySelectorAll(".active")
  let buton=[...stateBtn]     
       buton.forEach((elemen)=>{
       elemen.setAttribute("class"," btn btn")})  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
 
      let totalPrice=10 
      document.getElementById("ingredients").style.visibility="hidden" 
      if(state.pepperoni){
      document.querySelectorAll("#ingredients")[0].children[0].style.visibility="visible" 
      totalPrice+=1
      }else{
      document.querySelectorAll("#ingredients")[0].children[0].style.visibility="hidden"}
      if(state.mushrooms){
      totalPrice+=1
      document.querySelectorAll("#ingredients")[0].children[1].style.visibility="visible" 
      }else{
      document.querySelectorAll("#ingredients")[0].children[1].style.visibility="hidden"}
      if(state.greenPeppers){
      totalPrice+=1
      document.querySelectorAll("#ingredients")[0].children[2].style.visibility="visible" 
      }else{
      document.querySelectorAll("#ingredients")[0].children[2].style.visibility="hidden"}
      if(state.whiteSauce){
       totalPrice+=3
      document.querySelectorAll("#ingredients")[0].children[3].style.visibility="visible" 
      }else{
      document.querySelectorAll("#ingredients")[0].children[3].style.visibility="hidden"}
      if(state.glutenFreeCrust){
      totalPrice+=5
      document.querySelectorAll("#ingredients")[0].children[4].style.visibility="visible" 
      }else{
      document.querySelectorAll("#ingredients")[0].children[4].style.visibility="hidden"}    
      document.querySelector("strong").innerHTML="Tolal price : $" + totalPrice
 } 
renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function(){
    state.mushrooms = !state.mushrooms;
    renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener("click", function(){
  state.greenPeppers = !state.greenPeppers
   renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  document.querySelector(".btn.btn-sauce").addEventListener("click",function(){
    state.whiteSauce = !state.whiteSauce
    renderEverything()
  })
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
   document.querySelector(".btn.btn-crust").addEventListener("click",function(){
   state.glutenFreeCrust = !state.glutenFreeCrust
   renderEverything()
   })