document.addEventListener('DOMContentLoaded', function () {
    const typing = document.querySelector('.typing');
    const texts = ['Cesarrea Yarangga', 'a Web Developer', 'Programer'];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (index === texts.length) {
            index = 0;
        }
        currentText = texts[index];
        letter = currentText.slice(0, ++charIndex);
        typing.textContent = letter;

        if (letter.length === currentText.length) {
            index++;
            charIndex = 0;
        }
        setTimeout(type, 200);
    }

    type();
});
