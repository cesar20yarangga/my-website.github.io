document.addEventListener('DOMContentLoaded', function () {
    const typing = document.querySelector('.typing');
    const texts = ['Cesarrea Yarangga','Programer'];
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

        const toggleButton = document.getElementById('toggleButton');
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            toggleButton.classList.toggle('dark-mode');
        });

        // Update body background and text color based on mode
        document.body.classList.toggle('dark-mode', localStorage.getItem('mode') === 'dark');
        toggleButton.classList.toggle('dark-mode', localStorage.getItem('mode') === 'dark');

        toggleButton.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('mode', 'dark');
            } else {
                localStorage.setItem('mode', 'light');
            }
        });
    
