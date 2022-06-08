const menus = document.querySelectorAll("img")
const gridle = document.querySelectorAll("div")
let currentPic = ""
const changeColor =(evt) =>{
  
  if(evt.target.classList.contains("icons") === true){
    console.log("you pressed a icon")
    for(let i=0;i<menus.length;i++){
      menus[i].classList.remove("selected")
    }
    evt.target.classList.add("selected")
    let currPic =document.querySelector(".selected")
    console.log(currPic)
    currentPic = currPic.getAttribute("src") 
    console.log(currentPic)
  }
  else {
    console.log("you pressed something else")
  }
}

const changeIcon =(evt) =>{
  if(evt.target.classList.contains("tile") === true){
    console.log("you pressed a tile")
    for(let i=0;i<gridle.length;i++){
      gridle[i].classList.remove("clicked")
    }
    evt.target.classList.remove("removed")
    evt.target.classList.remove("water")
    evt.target.classList.remove("mountain")
    evt.target.classList.remove("player")
    evt.target.classList.add("clicked")
    let currTile = document.querySelector(".clicked")
    
    if(currentPic==="assets/mountain.png"){
      evt.target.classList.add("mountain")
      console.log(currTile)
    }
    else if(
      currentPic==="assets/water.png"){
      evt.target.classList.add("water")
      console.log(currTile)
    }
    else if(
      currentPic==="assets/player.png"){
      evt.target.classList.add("player")
      console.log(currTile)
    }
    else if(
      currentPic==="assets/remove.png"){
      evt.target.classList.add("remove")
      console.log(currTile)
    }
    else{
        evt.target.classList.add("mountain")
        console.log(currTile)
    }
  }
  
  else {
    console.log("you pressed something else")
  }
}

const startGame =()=>{
  console.log("you pressed the button")
  for(let i=0;i<gridle.length;i++){
    gridle[i].classList.remove("clicked")
    gridle[i].classList.remove("removed")
    gridle[i].classList.remove("water")
    gridle[i].classList.remove("mountain")
    gridle[i].classList.remove("player")
  }
}
document.querySelector("#roles").addEventListener("click",changeColor)
document.querySelector("#map").addEventListener("click",changeIcon)
document.querySelector("#button").addEventListener("click",startGame)

