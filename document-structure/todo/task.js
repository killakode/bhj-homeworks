let inputTask = document.getElementById('task__input');
let addTask = document.querySelector('.tasks__add');
let taskList = document.querySelector('.tasks__list');



inputTask.addEventListener('keydown', function(event) {
    if(event.key === 'Enter' && inputTask.value.trim() !== '') {
        taskList.innerHTML += `
            <div class="task">
                <div class="task__title">
                    ${inputTask.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        inputTask.value = '';
        addTaskToLocalStorage();
    }
});

addTask.addEventListener('click', function(event) {
    event.preventDefault();
    if(inputTask.value.trim() === '') {
        return;
    }
    taskList.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${inputTask.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `;
    inputTask.value = '';

});

taskList.addEventListener('click', function(event) {
    let target = event.target;
    if (target.classList.contains('task__remove')) {
        let taskTargetItem = target.closest('.task');
        taskTargetItem.remove();

    }
});