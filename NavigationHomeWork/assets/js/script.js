//Task1
let closeSide= document.getElementById("close-btn")
let openSide= document.getElementById("open-btn")

let sideBar= document.querySelector(".sidebar")

closeSide.addEventListener("click",function(){
    sideBar.classList.add("close")
})

openSide.addEventListener("click",function(){
    sideBar.classList.remove("close")
})


//Task2

let input = document.getElementById("num");
let ul = document.getElementById("ul");
input.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        ul.innerHTML = "";
        for (let i = 1; i <= this.value; i++) {
            let li = document.createElement("li");
            let icon = document.createElement("i");
            icon.className = "fas fa-times pt-1";
            icon.style.float = "right";
            icon.style.cursor = "pointer";
            li.className = "list-group-item";
            li.innerText = i;
            li.append(icon);
            ul.append(li);
            icon.onclick = function(){
                li.remove();
            }
            
        }
        this.value = "";
        
    }
    

})