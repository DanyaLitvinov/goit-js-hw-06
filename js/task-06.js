const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const inputLength = input.value.trim().length; // Використовуємо trim() перед порівнянням
  const requiredLength = parseInt(input.getAttribute('data-length'));

  if (inputLength === requiredLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
