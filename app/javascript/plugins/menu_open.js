const Hide = (menuglobal) => {
 document.getElementById(menuglobal).style.transform = "translateX(-100%)";
};

const Show = (menuglobal) => {
 document.getElementById(menuglobal).style.transform = "translateX(0)";
};

const toggle = (menuglobal) => {
  if (document.getElementById(menuglobal).style.visibility == "hidden") {
    Show(menuglobal);
  } else {
    Hide(menuglobal);
  }
}

const btn = document.querySelector('.menu-btn');
if (btn) {
  btn.addEventListener('click', () => Show('menuglobal'));
}

const menuglobal  = document.getElementById('menuglobal');
if (menuglobal) {
  window.addEventListener('touchmove', () => {
    // toggle('menuglobal')
    Hide('menuglobal');
  });
}

