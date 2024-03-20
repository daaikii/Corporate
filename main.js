const toggle=document.getElementById("toggle")

const nav = document.getElementById("nav")
const mask = document.getElementById("mask")

function changeClassOpen(){
  if(!document.getElementsByClassName("open").length){
    nav.classList.add("open")
    mask.classList.add("open")
    toggle.classList.add("open")
  }else{
    nav.classList.remove("open")
    mask.classList.remove("open")
    toggle.classList.remove("open")
  }
}

toggle.addEventListener("click",changeClassOpen)


const topButton =document.getElementById("top_button")

function handleScroll(){
  const scroll = document.documentElement.scrollTop;
  if(scroll>700){
    topButton.classList.add("display")
  }else{
    topButton.classList.remove("display")
  }
}

window.addEventListener("scroll",handleScroll)