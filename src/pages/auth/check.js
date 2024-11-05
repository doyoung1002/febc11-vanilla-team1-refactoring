const checkAll = document.getElementById('checkAll');
const checkboxes = document.querySelectorAll('#check1, #check2, #check3');
const agreeBtn = document.querySelector('#agreeBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const checkError = document.querySelector('.check-error');

checkAll.addEventListener('change', function () {
  checkboxes.forEach(checkbox => {
    checkbox.checked = checkAll.checked;
  });
  checkEvent();
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    checkAll.checked = Array.from(checkboxes).every(
      checkbox => checkbox.checked,
    );
    checkEvent();
  });
});

function checkEvent() {
  const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
  if (allChecked) {
    checkboxes.forEach(checkbox => {
      checkbox.nextElementSibling.style.color = 'black';
    });
    checkError.style.display = 'none';
  }
}

agreeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const allChecked = checkAll.checked === true;

  if (allChecked) {
    window.location.href = 'signup.html';
  } else {
    checkboxes.forEach(checkbox => {
      if (!checkbox.checked) {
        checkbox.nextElementSibling.style.color = 'red';
        checkError.style.display = 'block';
      }
    });
  }
});

cancelBtn.addEventListener('click', function () {
  window.location.href = 'login.html';
  sessionStorage.clear();
});
