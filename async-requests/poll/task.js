let poolAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.addEventListener('load', function() {
    if(xhr.readyState === xhr.DONE) {
        if(xhr.status >= 400) {
                return alert('Ошибка загрузки данных о вопросе');
        }
        
        if(xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let poolTitleText = response.data.title;
            let poolAnswersText = response.data.answers;

            let poolTitle = document.getElementById('poll__title');
            poolTitle.textContent = poolTitleText;

            poolAnswersText.forEach(answer => {
                createHTML(answer);
            });

            let btnAnswers = document.querySelectorAll('.poll__answer');
            btnAnswers.forEach(btn => {
                btn.addEventListener('click', () => {
                    alert('Спасибо, Ваш голос засчитан!');
                    
                })
            })
        }
    }
})
xhr.send();

function createHTML(answer) { 
    let btnAnswer = document.createElement('button');
    btnAnswer.classList.add('poll__answer');
    btnAnswer.textContent = answer;
    poolAnswers.appendChild(btnAnswer);
    return btnAnswer;
}