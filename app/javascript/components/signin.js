const card = document.querySelector('.card-login');
const start = document.querySelector('.btn-start');
const leave = document.getElementById('cross-leave');

if (start) {
  start.addEventListener('click', () => {
    card.classList.add('display');
  });
}

if (leave) {
  leave.addEventListener('click', () => {
    card.classList.remove('display');
  });
}
