const toggleCheckbox = document.getElementById('toggle');
toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
});

