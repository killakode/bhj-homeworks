let tab = Array.from(document.querySelectorAll(".tab"));
let tabContent = Array.from(document.querySelectorAll(".tab__content"));

function tabRemove() {
    let element = tab.find(items => items.classList.contains('tab_active'));
    element.classList.remove("tab_active");
}

function contentRemove() {
    let element = tabContent.find(items => items.classList.contains('tab__content_active'));
    element.classList.remove("tab__content_active");
}

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", () =>{
        tabRemove();
        contentRemove();
        tab[i].classList.add("tab_active");
        tabContent[i].classList.add("tab__content_active");
    })
}