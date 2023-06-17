let menu = document.getElementById("menu");
let clear = document.getElementById("clear")
let option = document.getElementById("nav-option")

menu.addEventListener("click", open)
function open(){
  option.style.display = "block"
  clear.style.display = "block"
  menu.style.display = "none"
}

clear.addEventListener("click", close)
function close(){
  option.style.display = "none"
  clear.style.display = "none"
  menu.style.display = "block"
}