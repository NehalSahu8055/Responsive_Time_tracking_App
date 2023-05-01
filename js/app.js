// //ellipse click (3 dots)
//click
const n =document.querySelectorAll(".ellipse").length;
for(let i = 0 ; i<n ; i++){
    document.querySelectorAll(".ellipse")[i].addEventListener("click", function(){
    document.querySelectorAll(".elpseClick")[i].setAttribute("style","display:flex");
    document.querySelectorAll(".elpseClick")[i].setAttribute("style","display:flex");
    } )
};
for(let i = 0 ; i<n ; i++){
  document.querySelectorAll(".ellipse")[i].addEventListener("click", function(){
    setTimeout(function(){
      document.querySelectorAll(".elpseClick")[i].setAttribute("style","display:none");
    },2000);
  } )
};

//default white weekly button
document.querySelector(".weekly").style.color="var(--wht)";

// Add class "data-btn" to each button element

//daily
document.querySelector(".daily").addEventListener("click", function () {
  // Remove "color: var(--wht)" style from all buttons
  document.querySelectorAll('.data-btn').forEach(function (btn) {
      btn.style.color = "";
  });
  // Set "color: var(--wht)" style only for the clicked button
  this.style.color = "var(--wht)";

  // Rest of the code for daily button click event listener
  //daily
document.querySelector(".daily").addEventListener("click",function(){
   
  //  document.querySelector(".daily").setAttribute("style","color:var(--wht)");

   document.querySelector(".flex21 .heading").textContent="5hrs";
   document.querySelector(".flex21 .usage").textContent="Yesterday - 7hrs";

   document.querySelector(".flex22 .heading").textContent="1hrs";
   document.querySelector(".flex22 .usage").textContent="Yesterday - 5hrs";

   document.querySelector(".flex31 .heading").textContent="2hrs";
   document.querySelector(".flex31 .usage").textContent="Yesterday - 8hrs";

   document.querySelector(".flex32 .heading").textContent="3hrs";
   document.querySelector(".flex32 .usage").textContent="Yesterday - 7hrs";

   document.querySelector(".flex41 .heading").textContent="2hrs";
   document.querySelector(".flex41 .usage").textContent="Yesterday - 2hrs";

   document.querySelector(".flex42 .heading").textContent="1hrs";
   document.querySelector(".flex42 .usage").textContent="Yesterday - 2hrs";
} )
});

//weekly
document.querySelector(".weekly").addEventListener("click", function () {
  // Remove "color: var(--wht)" style from all buttons
  document.querySelectorAll('.data-btn').forEach(function (btn) {
      btn.style.color = "";
  });
  // Set "color: var(--wht)" style only for the clicked button
  this.style.color = "var(--wht)";

  // Rest of the code for weekly button click event listener
  //weekly
document.querySelector(".weekly").addEventListener("click",function(){

  // document.querySelector(".weekly").setAttribute("style","color:var(--wht)");

    document.querySelector(".flex21 .heading").textContent="32hrs";
    document.querySelector(".flex21 .usage").textContent="Last Week - 36hrs";
 
    document.querySelector(".flex22 .heading").textContent="4hrs";
    document.querySelector(".flex22 .usage").textContent="Last Week - 5hrs";
 
    document.querySelector(".flex31 .heading").textContent="10hrs";
    document.querySelector(".flex31 .usage").textContent="Last Week - 8hrs";
 
    document.querySelector(".flex32 .heading").textContent="4hrs";
    document.querySelector(".flex32 .usage").textContent="Last Week - 7hrs";
 
    document.querySelector(".flex41 .heading").textContent="2hrs";
    document.querySelector(".flex41 .usage").textContent="Last Week - 2hrs";
 
    document.querySelector(".flex42 .heading").textContent="32hrs";
    document.querySelector(".flex42 .usage").textContent="Last Week - 36hrs";
 } )
});

//monthly
document.querySelector(".monthly").addEventListener("click", function () {
  // Remove "color: var(--wht)" style from all buttons
  document.querySelectorAll('.data-btn').forEach(function (btn) {
      btn.style.color = "";
  });
  // Set "color: var(--wht)" style only for the clicked button
  this.style.color = "var(--wht)";

  // Rest of the code for monthly button click event listener
  
 //monthly
 document.querySelector(".monthly").addEventListener("click",function(){

  // document.querySelector(".monthly").setAttribute("style","color:var(--wht)");

  document.querySelector(".flex21 .heading").textContent="103hrs";
  document.querySelector(".flex21 .usage").textContent="Last Month - 128hrs";

  document.querySelector(".flex22 .heading").textContent="11hrs";
  document.querySelector(".flex22 .usage").textContent="Last Month - 18hrs";

  document.querySelector(".flex31 .heading").textContent="23hrs";
  document.querySelector(".flex31 .usage").textContent="Last Month - 29hrs";

  document.querySelector(".flex32 .heading").textContent="21hrs";
  document.querySelector(".flex32 .usage").textContent="Last Month - 23hrs";

  document.querySelector(".flex41 .heading").textContent="13hrs";
  document.querySelector(".flex41 .usage").textContent="Last Month - 19hrs";

  document.querySelector(".flex42 .heading").textContent="7hrs";
  document.querySelector(".flex42 .usage").textContent="Last Month - 11hrs";
} )
});






