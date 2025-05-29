let formData = {
  email: '',
  message: '',
};

function handleFormSubmit(event) {
  event.preventDefault();
  formData.name = document.getElementById('name').value;
  formData.email = document.getElementById('email').value;
  formData.message = document.getElementById('message').value;

  console.log('Form submitted:', formData);
  alert('Form submitted successfully!');
}

document
  .getElementById('contactForm')
  .addEventListener('submit', handleFormSubmit);

document.getElementById('name').addEventListener('input', function () {
  formData.name = this.value;
});

document.getElementById('email').addEventListener('input', function () {
  formData.email = this.value;
});

document.getElementById('message').addEventListener('input', function () {
  formData.message = this.value;
});
