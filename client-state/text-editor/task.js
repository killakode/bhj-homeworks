let storedText = localStorage.getItem('text');
let editor = document.getElementById('editor');

if (storedText !== null) {
	editor.value = storedText;
}

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
})