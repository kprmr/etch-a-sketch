const container = document.querySelector("#container");
const value = prompt("What is the size of box")

//The line below is one line code to generate random color
// var newRandomColor = Math.floor(Math.random()*16777215).toString(16)


function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


//This function will make the grid
function grid(a){
    for (let i = 0; i < a*a; i++) {
        const content = document.createElement("div");
        content.classList.add("content");
        // content.textContent = "Hello"
        const newColor = randomColor()
        container.appendChild(content);
        content.style.flexBasis = (800 / a) + "px";
        content.style.height = (800 / a) + "px";
        content.addEventListener('mouseover', function(){
            // setInterval(() => {
            //     content.style.backgroundColor = newColor;
            // }, 1000);
            content.style.backgroundColor = newColor
        })
    }
}
grid(value)

const btn = document.querySelector("#btn")
btn.addEventListener('click', () => {
    window.location.reload()
})



