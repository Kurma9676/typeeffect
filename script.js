
const t="Hello World!";
let index=0;
function typeEffect() {
    if(index<t.length){

         document.getElementById("text").textContent+=t.charAt(index);
        setTimeout(typeEffect, 300);
    index++;  }
}
typeEffect();