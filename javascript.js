
const containerDiv = document.querySelector("#container")
const gridButton = document.querySelector(".sizeChooser")
let gridSizeTrue = 16
gridButton.onclick = () => {
    let gridSizeQuery = prompt("Please enter a size for the etch-a-sketch!")
        if (gridSizeQuery <= 100 && gridSizeQuery > 0) {
            gridSizeTrue = gridSizeQuery
            divCreation();
        }
        else {
           return alert("Too big,negative, or not a number")
}
}
function divCreation() {
    containerDiv.replaceChildren();
    let a = 0
    while (a < gridSizeTrue) {
    let i = 0
    const divRow = document.createElement("div")
    divRow.classList.add("rowdiv")
    containerDiv.appendChild(divRow);
    a++
        while (i < gridSizeTrue) {
        const innerDiv = document.createElement("div")
        innerDiv.classList.add("innerdiv")
        innerDiv.onmouseover = () => {
            innerDiv.style.backgroundColor = "black"
        }
        divRow.appendChild(innerDiv)
        i++
         } ;
};
};

divCreation();



