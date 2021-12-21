var board = document.getElementById("grid");
var []
function makeGrid(){
    for(var i = 0; i<42; i++){
        var coin = document.createElement("div")
        coin.classList.add("coin");
        coin.setAttribute(".color","blank")
        coin.setAttribute("id",i);
        coin.addEventListener("click",setColor)
        board.appendChild(coin);
    }
    
}

function setColor(){
    
}