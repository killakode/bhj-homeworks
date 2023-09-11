let imgLoad = document.querySelector('.loader');
let items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
  xhr.onload = function() {
    if(xhr.readyState === xhr.DONE) {
        if(xhr.status >= 400) {
                return alert('Ошибка загрузки данных о курсе валют');
        }

        if(xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let valutes = response.response.Valute;
            console.log(valutes)
      
            for (let valute in valutes) {
              let value = Number(valutes[valute].Value).toFixed(2);
              let item = createHTML(valute, value);
              items.appendChild(item);
            }
            imgLoad.classList.remove('loader_active');
        }
    };
};
xhr.send();

function createHTML(valute, value) {
    let item = document.createElement('div');
    item.classList.add('item');

    item.innerHTML += `
        <div class="item__code">${valute}</div>
        <div class="item__value">${value}</div>
        <div class="item__currency">руб.</div>
    `
    return item;
}