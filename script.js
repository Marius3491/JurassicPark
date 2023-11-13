// Voy a kickear del discord a quien haya abierto esto ¬¬.

const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitButton');
const errorMessage = document.getElementById('errorMessage');

submitButton.addEventListener('click', function() {
    const password = passwordInput.value;

    if (password.toLowerCase() === 'clevergirl') {
        // La palabra mágica es "clevergirl"
        // Redirige a la sección secreta
        window.location.href = 'seccion_secreta.html';
    } else {
        // Muestra la ventana emergente con el GIF
        errorMessage.style.display = 'block';
    }
});
