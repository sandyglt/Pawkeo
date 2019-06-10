const card = document.querySelector('.card-login');
const start = document.querySelector('.btn-start');
const leave = document.getElementById('cross-leave');
const leaveup = document.getElementById('cross-leave-signup');

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

if (leaveup) {
  leaveup.addEventListener('click', () => {
    location.href = 'https://www.pawkeo.com';
  });
}
