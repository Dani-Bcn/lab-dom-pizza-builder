// Write your Pizza Builder JavaScript in this file.
// Constants
const basePrice = 10;
const ingredients = {
    pepperoni:{name:"Pepperoni",price:1},
    mushrooms:{name: "Mushrooms", price:1},
    greenPeppers:{name: "GreenPeppers", price: 1},
    whiteSauce:{name: "WhiteSauce" , price:3},
    glutenFreeCrust:{name: "GlutenFreeCrust", price:5}
};
// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: false,
  mushrooms: false,
  greenPeppers:false,
  whiteSauce: false,
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
    if(state.pepperoni){
      onePep.style.visibility = 'visible'  
      document.getElementById("1").style.visibility="visible"        
    }else{    
      onePep.style.visibility = 'hidden' 
      document.getElementById("1").style.visibility="hidden" 
    }    
  })
}
function renderMushrooms() { 
    document.querySelectorAll('.mushroom').forEach((oneMush)=>{ 
   if (state.mushrooms){
      oneMush.style.visibility = 'visible'
      document.getElementById("2").style.visibility="visible"  
    }else{
      oneMush.style.visibility = "hidden" 
      document.getElementById("2").style.visibility="hidden"     
    }     
 }) 
}
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper)=>{
    if(state.greenPeppers){
      onePepper.style.visibility = "visible"
        document.getElementById("3").style.visibility="visible" 
    }else{        
      onePepper.style.visibility = "hidden"
      document.getElementById("3").style.visibility="hidden" 
    }     
  })
}
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let stateSauce=document.querySelector(".sauce")  
  if(state.whiteSauce){
    stateSauce.setAttribute("class","sauce")
    document.getElementById("4").style.visibility="visible" 
  }else{
    stateSauce.setAttribute("class","sauce sauce-white")
    document.getElementById("4").style.visibility="hidden" 
  }    
}
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let stateCrust=document.querySelector(".crust")
  if(state.glutenFreeCrust){
     stateCrust.setAttribute("class","crust")
      document.getElementById("5").style.visibility="visible"      
  }else{
     stateCrust.setAttribute("class"," crust crust-gluten-free")
      document.getElementById("5").style.visibility="hidden" 
  }  
}
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let stateBtn=document.querySelectorAll(".active")
  let buton=[...stateBtn]     
       buton.forEach((elemen)=>{
       elemen.setAttribute("class"," btn btn")})  
}
  // Iteration 4: change the HTML of `<aside class="panel price">` 
  function renderPrice(){     
      let totalPrice=0;
      for (i in state){
        if (state[i]===true){
          totalPrice+=ingredients[i].price
        }
      }
      document.querySelector("h3").innerHTML=`Total price : $${totalPrice+10}`
    }
    //document.querySelector("h3").innerHTML=`Total price $${sum+10}`
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