document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const usernameError = document.getElementById('usernameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  const infoBox = document.getElementById('infoBox');
  const toggleBtn = document.getElementById('toggleInfo');

  // Toggle Info Box
  toggleBtn.addEventListener('click', () => {
    infoBox.classList.toggle('hidden');
  });

  // Validation functions
  function validateUsername() {
    if (username.value.trim().length < 3) {
      usernameError.textContent = 'Username must be at least 3 characters.';
      return false;
    } else {
      usernameError.textContent = '';
      return true;
    }
  }

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      emailError.textContent = 'Please enter a valid email.';
      return false;
    } else {
      emailError.textContent = '';
      return true;
    }
  }

  function validatePassword() {
    if (password.value.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters.';
      return false;
    } else {
      passwordError.textContent = '';
      return true;
    }
  }

  // Real-time validation
  username.addEventListener('input', validateUsername);
  email.addEventListener('input', validateEmail);
  password.addEventListener('input', validatePassword);

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valid = validateUsername() & validateEmail() & validatePassword(); // use bitwise AND to ensure all run
    if (valid) {
      alert('Form submitted successfully!');
      form.reset();
    }
  });
});
