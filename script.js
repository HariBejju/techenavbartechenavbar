const hamburger = document.querySelector(".rightlogo")
const upabove = document.querySelector("#upabove")
const elements1 = document.querySelector("#contents1")
const elements2 = document.querySelector("#contents2")
const elements3 = document.querySelector("#contents3")
const elements4 = document.querySelector("#contents4")
const elements5 = document.querySelector("#contents5")
const elements6 = document.querySelector("#contents6")
hamburger.addEventListener("click",()=>{
    upabove.classList.toggle("active")
    elements1.classList.toggle("active")
    elements2.classList.toggle("active")
    elements3.classList.toggle("active")
    elements4.classList.toggle("active")
    elements5.classList.toggle("active")
    elements6.classList.toggle("active")
    
})

