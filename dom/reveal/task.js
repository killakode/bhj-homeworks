
window.addEventListener('scroll', event => {
    let message = document.querySelector('div.reveal')
    let massageTop = message.getBoundingClientRect().top;
    let massageBottom = message.getBoundingClientRect().bottom;
    let position = (massageTop < (window.innerHeight / 1.5) & massageBottom >= (window.innerHeight / 4))
    position ? message.classList.add('reveal_active') : message.classList.remove('reveal_active');
})



