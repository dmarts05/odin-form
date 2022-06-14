function checkSamePassword() {
  const password = document.querySelector('input[name=password]');
  const confirm = document.querySelector('input[name=confirm-password]');
  if (confirm.value === password.value) {
    confirm.setCustomValidity('');
  } else {
    confirm.setCustomValidity('Passwords do not match');
  }
}
