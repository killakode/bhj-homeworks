let clicker = document.getElementById("clicker__counter");
let cockie = document.getElementById("cookie");
let clickCounter = 0;
cockie.onclick = function() {
    if(clickCounter %2 ==0) {
        cockie.width += 25;
    } else {
        cockie.width -= 25;
    }
    clickCounter++
    clicker.textContent = clickCounter;
}