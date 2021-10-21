
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];


const title = document.querySelector("h2");



const superEventHandler = {
    
   enter: function() {title.innerText="The mouse is here!";
 title.style.color= colors[0]},

   leave: function() {title.innerText="The mouse is gone!";
 title.style.color = colors[1]},

   rightclick: function() {title.innerText="That was a right click!";
 title.style.color = colors[2]},

   resizeWindow: function() {
       title.innerText="You just resized.";
 title.style.color= colors[3]}

 
};


title.addEventListener("mouseenter", superEventHandler.enter);
title.addEventListener("mouseleave",superEventHandler.leave);
window.addEventListener("contextmenu",superEventHandler.rightclick);
window.addEventListener("resize",superEventHandler.resizeWindow);