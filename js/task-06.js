const input = document.getElementById('validation-input');

  input.addEventListener('blur', function () {
    const inputValue = input.value;
    
    const requiredLength = parseInt(input.getAttribute('data-length'));

    if (inputValue.length === requiredLength) {
      input.classList.add('valid');
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
      input.classList.remove('valid');
    }
  });