let mainModal = document.querySelector("#modal_main");
let modalSuccess = document.querySelector('#modal_success');
let modalClose = document.querySelectorAll(".modal__close");
let showSuccess = document.querySelector(".show-success");

mainModal.className = "modal modal_active";

modalClose.onclick = function () {
  mainModal.className = "modal";
}

showSuccess.onclick = function (){
  mainModal.className = "modal";
  modalSuccess.className = "modal modal_active"
}

