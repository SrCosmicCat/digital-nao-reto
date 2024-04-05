// Recupera los elementos del formulario
const form = document.querySelector('form');
const inpNombre = document.querySelector('#nombre');
const inpEmail = document.querySelector('#email');
const inpTelefono = document.querySelector('#telefono');
const inpMensaje = document.querySelector('#mensaje');
const successMessage = document.querySelector('#success-message');

/**
 * Función para validar si una cadena contiene solo letras.
 *
 * @param {string} str - La cadena a validar.
 * @returns {boolean} Retorna true si la cadena solo contiene letras, de lo contrario retorna false.
 */
function validateString(str) {
    return /^[a-zA-Z]+$/.test(str);
}

/**
 * Valida si el string sólo contiene números.
 *
 * @param {string} str - La cadena a validar.
 * @returns {boolean} Retorna true si la cadena solo contiene números, de lo contrario retorna false.
 */
function validateNumber(str) {
    return /^[0-9]+$/.test(str);
}

/**
 * Valida si el string es un email.
 *
 * @param {string} str - La cadena a validar.
 * @returns {boolean} Retorna true si la cadena es un email válido, de lo contrario retorna false.
 */
function validateEmail(str) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(str);
}

// Agrega el evento de submit al formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    inpNombre.classList.remove('invalid');
    inpEmail.classList.remove('invalid');
    inpTelefono.classList.remove('invalid');
    
    // Validar los campos
    if (!validateString(inpNombre.querySelector('input').value)) {
        inpNombre.classList.add('invalid');
        valid = false;
    }
    if (!validateEmail(inpEmail.querySelector('input').value)) {
        inpEmail.classList.add('invalid');
        valid = false;
    }
    if (!validateNumber(inpTelefono.querySelector('input').value)) {
        inpTelefono.classList.add('invalid');
        valid = false;
    }

    // Mostrar mensaje de éxito si los datos son válidos
    if (valid) {
        successMessage.style.display = 'block';
        form.reset();
    }
});