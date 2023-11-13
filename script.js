// Voy a kickear del discord a quien haya abierto esto ¬¬.

const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    const password = passwordInput.value;

    if (password.toLowerCase() === 'clevergirl') {
        // La palabra mágica es "clevergirl"
        // Redirige a la sección secreta
        window.location.href = 'seccion_secreta.html';
    } else {
        // Abre una nueva ventana con el GIF
        const popupWindow = window.open('ahahah.gif', '_blank', 'width=300,height=200');

        // Cierra la ventana emergente después de un tiempo (opcional)
        setTimeout(function() {
            popupWindow.close();
        }, 5000); // Cambia 5000 a la cantidad de milisegundos que deseas que la ventana se mantenga abierta
    }
});
