let toolTips = [...document.querySelectorAll('.has-tooltip')];

toolTips.forEach(toolTip => {
  toolTip.addEventListener('click', (e) => {
    e.preventDefault();

    // Добавление контейнера для подсказки
    let toolTipContainer = document.createElement('div');
    toolTipContainer.classList.add('tooltip_container');

    // Добавление подсказки
    let toolTipContent = document.createElement('div');
    toolTipContent.classList.add('tooltip');
    toolTipContent.textContent = toolTip.getAttribute('title');
    toolTipContent.classList.add('tooltip_active');

    // Закрытие подсказки при повторном клике на ссылку
    let toolTipActive = toolTip.querySelector('.tooltip_active');
    if(toolTipActive) {
        toolTipActive.remove();
        return;
    }

    let coordinates = toolTip.getBoundingClientRect();
    let coordinatesTop = coordinates.top + window.pageYOffset;
    let coordinatesLeft = coordinates.left + window.pageXOffset;

    toolTipContent.style.top = coordinatesTop + coordinates.height + 'px';
    toolTipContent.style.left = coordinatesLeft + 'px';


    toolTip.appendChild(toolTipContent);
  });
});