let book = document.querySelector('.book');


let fonstSizes = [...document.querySelectorAll('.font-size')];

let changeFontSize = function () {
    fonstSizes.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            fonstSizes.forEach(elem => {
                elem.classList.remove('font-size_active');
            });
            elem.classList.add('font-size_active');
            if(elem.classList.contains('font-size_small')) {
                book.classList.add('book_fs-small');
                book.classList.remove('book_fs-big');
            } else if(elem.classList.contains('font-size_big')) {
                book.classList.add('book_fs-big');
                book.classList.remove('book_fs-small');
            } else {
                book.classList.remove('book_fs-small');
                book.classList.remove('book_fs-big');
            }
        });
    });
}
changeFontSize();