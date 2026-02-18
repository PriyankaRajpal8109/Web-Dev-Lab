// ===== Experiment 3 : DOM Manipulation =====

// Change paragraph text
function changeText() {
    document.getElementById("domPara").innerText =
        "The paragraph text has been changed using JavaScript DOM manipulation.";
}

// Add list item dynamically
let count = 1;
function addItem() {
    let li = document.createElement("li");
    li.innerText = "Item " + count;
    document.getElementById("domList").appendChild(li);
    count++;
}

// Remove last list item
function removeItem() {
    let list = document.getElementById("domList");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
        count--;
    }
}


// Background color change on paragraph click (Exp-3)

let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "#f4f6f8"];
let index = 0;

document.getElementById("domPara").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
});
const para = document.getElementById("domPara");

// Store original text when page loads
const originalText = para.innerText;

let textChanged = false;

para.addEventListener("click", function () {

    if (!textChanged) {
        para.innerText = "I enjoy building user-friendly websites that combine clean design with efficient functionality.";
        textChanged = true;
    } else {
        para.innerText = originalText;   // restores initial content
        textChanged = false;
    }

});