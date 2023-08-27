let book = document.querySelector('div.book');


let fonstSizes = [...document.querySelectorAll('a.font-size')];

let changeFontSize = function () {
    fonstSizes.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            fonstSizes.forEach(element => {
                element.classList.remove('font-size_active');
            });
            element.classList.add('font-size_active');
            if(element.classList.contains('font-size_small')) {
                book.classList.add('book_fs-small');
                book.classList.remove('book_fs-big');
            } else if(element.classList.contains('font-size_big')) {
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