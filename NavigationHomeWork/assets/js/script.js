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