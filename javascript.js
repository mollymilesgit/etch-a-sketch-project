
const containerDiv = document.querySelector("#container")
function divCreation() {
    let a = 0
    while (a <= 16) {
    let i = 0
    const divRow = document.createElement("div")
    divRow.classList.add("rowdiv")
    containerDiv.appendChild(divRow);
    a++
        while (i <= 16) {
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



