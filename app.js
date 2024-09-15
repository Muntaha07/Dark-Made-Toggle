var inputEL = document.querySelector(".input")
var bodyEl = document.querySelector("body")



inputEL.checked =JSON.parse (localStorage
    .getItem("mode"));

updatedbody()

function updatedbody() {
    if(inputEL.checked){
        bodyEl.style.backgroundColor = "black";
    }
    else{
        bodyEl.style.backgroundColor = "white";
    }
}

inputEL.addEventListener("input",function(){
    updatedbody()
    updatelocalstorage()
})

function updatelocalstorage() {
    localStorage.setItem("mode",JSON.stringify
        (inputEL.checked));
}