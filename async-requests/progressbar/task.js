let progress = document.getElementById('progress');
let form = document.getElementById('form');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function(event) {
        if(event.lengthComputable) {
            let percentComplete = (event.loaded / event.total);
            progress.value = percentComplete;
        }
    };

    xhr.onloadend = function() {
        if (xhr.status === 200) {
          console.log("Успешно загружено");
        } else {
          console.log("Не удалось загрузить" );
        }
    };

    xhr.send(new FormData(form));
})