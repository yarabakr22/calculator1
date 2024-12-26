const output=document.querySelector(".output");
const result=document.querySelector(".result");
const keys =document.querySelectorAll("button");

keys.forEach(key=>{
key.addEventListener('click', calculate) ; 
});

function calculate(){
  let buttonText= this.innerText;
  output.textContent +=buttonText;
}