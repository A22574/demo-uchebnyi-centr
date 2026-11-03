document.getElementById('enrollForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('f-name');
  const phone = document.getElementById('f-phone');
  const err = document.getElementById('formError');
  if (!name.value.trim() || !phone.value.trim()) {
    err.hidden = false;
    (name.value.trim() ? phone : name).focus();
    return;
  }
  err.hidden = true;
  this.hidden = true;
  document.getElementById('enrollDone').hidden = false;
});
