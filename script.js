const container = document.querySelector("#container");
const value = prompt("What is the size of box")
function grid(a){
    for (let i = 0; i < a*a; i++) {
        const content = document.createElement("div");
        content.classList.add("content");
        // content.textContent = "Hello"
        container.appendChild(content);
        content.addEventListener('mouseover', function(){
        content.style.backgroundColor = 'yellow'
        })
    }
}
grid(value)
// const btn = document.querySelector("#btn");
// btn.addEventListener('click', () => {
//     
//     grid(value)
// })
const btn = document.querySelector("#btn")
btn.addEventListener('click', () => {
    window.location.reload()
})


