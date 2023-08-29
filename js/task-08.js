const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.currentTarget);
  const dataObject = {};

  formData.forEach((value, name) => {
    dataObject[name] = value;
  });

  if (validateForm(dataObject)) {
    console.log(dataObject);
    loginForm.reset();
  } else {
    alert("All fields must be filled");
  }
}

function validateForm(data) {
  for (const key in data) {
    if (data[key] === '') {
      return false;
    }
  }
  return true;
}






