let date = new Date();
let hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');
let chatWidget = document.querySelector('div.chat-widget');
let chatInput = document.getElementById('chat-widget__input');
let messages = document.getElementById('chat-widget__messages');

let robotAnswer = function (){
	let robotAnswers = [
	'Попробуйте загуглить это вопрос',
	'Я не знаю что вы от меня хотите',
	'Мне становится скучно',
	'Поговорим в другой раз',
	];

	let randomResponse = robotAnswers[Math.floor(Math.random() * robotAnswers.length)];
	setTimeout(() => {
    messages.innerHTML += `
            <div class="message">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${randomResponse}</div>
            </div>
        `;
  }, 1000);
};

chatWidget.addEventListener('click', function (){
	chatWidget.classList.add('chat-widget_active');
});

chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && chatInput.value.trim() !== "") {
    messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${chatInput.value}</div>
            </div>
        `;
    chatInput.value = "";
    setTimeout(robotAnswer, 1000);
  }
});