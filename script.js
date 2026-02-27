const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const passwordField = document.getElementById('password');

function generatePassword() {
    const length = parseInt(document.getElementById('length').value) || 12;
    const upper = document.getElementById('uppercase').checked;
    const lower = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    let charset = '';
    if (upper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!charset) {
        alert('Selecciona al menos un tipo de carácter.');
        return '';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

generateBtn.addEventListener('click', () => {
    passwordField.value = generatePassword();
});

copyBtn.addEventListener('click', () => {
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value);
        alert('Contraseña copiada al portapapeles');
    }
});