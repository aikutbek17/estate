const menu = document.querySelector("#menu");
const burgerBtn = document.querySelector("#burger_btn");
const btnClose = document.querySelector(".menu__btn-close");

const modalToggler = function () {
  menu.classList.toggle("modal-open");
};

burgerBtn.addEventListener("click", () => {
  modalToggler();
});
btnClose.addEventListener("click", () => {
  modalToggler();
});
