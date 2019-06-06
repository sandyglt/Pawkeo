const hideAddress = (AddressFormBody) => {
 document.querySelector(AddressFormBody).style.transform = "translateY(100%)";
};

const showAddress = (AddressFormBody) => {
 document.querySelector(AddressFormBody).style.transform = "translateY(-100%)";
};

const addressesBtn = document.querySelector('.btn-addresses');
if (addressesBtn) {
  addressesBtn.addEventListener('click', () => showAddress('#address-form'));
}

const closeBtn  = document.querySelector('#close-address');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    hideAddress('#address-form');
  });
}
