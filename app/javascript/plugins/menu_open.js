const Hide = (menuglobal) => {
 document.getElementById(menuglobal).style.visibility = "hidden";
};

const Show = (menuglobal) => {
 document.getElementById(menuglobal).style.visibility = "visible";
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
  btn.addEventListener('click', () => toggle('menuglobal'));
}

const menuglobal  = document.getElementById('menuglobal');
if (menuglobal) {
  window.addEventListener('touchend', () => {
    // toggle('menuglobal')
    Hide('menuglobal');

    console.log("i'm swiping")
  });
}

