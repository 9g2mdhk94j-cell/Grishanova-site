document.getElementById('btnClick').addEventListener('click', function() {
    const message = document.getElementById('message');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
        message.classList.add('visible');
        this.textContent = 'Приховати';
    } else {
        message.classList.remove('visible');
        message.classList.add('hidden');
        this.textContent = 'Натисни мене!';
    }
});
