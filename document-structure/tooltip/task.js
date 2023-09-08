const toolTips = [...document.querySelectorAll('.has-tooltip')];

toolTips.forEach(toolTip => {
  toolTip.addEventListener('click', (e) => {
    e.preventDefault();

    // Добавление контейнера для подсказки
    const toolTipContainer = document.createElement('div');
    toolTipContainer.classList.add('tooltip_container');

    // Добавление подсказки
    const toolTipContent = document.createElement('div');
    toolTipContent.classList.add('tooltip');
    toolTipContent.textContent = toolTip.getAttribute('title');
    toolTipContent.classList.add('tooltip_active');

    // Закрытие подсказки при повторном клике на ссылку
    const toolTipActive = toolTip.querySelector('.tooltip_active');
    if(toolTipActive) {
        toolTipActive.remove();
        return;
    }

    toolTip.appendChild(toolTipContent);
  });
});