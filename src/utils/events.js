//* Eventos para Direccion IP y Mascara de subred
export const eventKeyPress = (element) => {
    element.addEventListener('keypress', (event) => {
        const lettersLower = 'abcdefghijklmnopqrstuvwxyz';
        const lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const specialCharacters = '!@#$%^&*()_+-=[]{}|;\':",./<>?';
        const maxLength = element.maxLength;
        const char = event.key;
        if (
            lettersLower.includes(char) ||
            lettersUpper.includes(char) ||
            specialCharacters.includes(char)
        ) {
            event.preventDefault();
        }

        if (element.value.length === maxLength) {
            event.preventDefault();
        }
    });
}



