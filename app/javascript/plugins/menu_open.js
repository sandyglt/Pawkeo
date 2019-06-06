const Hide = (menuglobal) => {
 document.getElementById(menuglobal).style.transform = "translateX(-100%)";
};

const Show = (menuglobal) => {
 document.getElementById(menuglobal).style.transform = "translateX(0)";
};

const btn = document.querySelector('.menu-btn');
if (btn) {
  btn.addEventListener('click', () => Show('menuglobal'));
}

const menuglobal  = document.getElementById('menuglobal');
if (menuglobal) {
  window.addEventListener('touchmove', () => {
    Hide('menuglobal');
  });
}


