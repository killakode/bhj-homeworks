let menuTitle = document.querySelector('.dropdown__value');
let menuItem = Array.from(document.querySelectorAll('.dropdown__item'));

function closeAndOpenMenu() {
    let listMenu = document.querySelector('.dropdown__list')
    listMenu.classList.toggle('dropdown__list_active');
};

menuItem.forEach(function (e) {
    e.onclick = function () {
        document.querySelector('.dropdown__value').textContent = e.textContent;
        return false;
    };
    e.addEventListener('click', closeAndOpenMenu);
})

menuTitle.addEventListener('click', closeAndOpenMenu);