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

const initSweetalert = (selector, options = {}, callback = () => {}) => {
  const swalButton = document.querySelector(selector);
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal(options).then(callback); // <-- add the `.then(callback)`
    });
  }
  console.log("sweetalert2");
};
