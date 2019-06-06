import "bootstrap";
import "../plugins/menu_open";
import "../components/signin";

const submitBtn = document.getElementById("btn-login");
if (submitBtn) {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
  })
}
