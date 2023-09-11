let mainModal = document.querySelector("#modal_main");
let modalSuccess = document.querySelector('#modal_success');
let modalClose = document.querySelectorAll(".modal__close");
let showSuccess = document.querySelector(".show-success");

mainModal.classList.add("modal_active");

modalClose.forEach(button => {
  button.onclick = function() {
    let modal = button.closest('.modal');
    modal.classList.remove('modal_active');
  }

}) 

showSuccess.onclick = function (){
  mainModal.className = "modal";
  modalSuccess.className = "modal modal_active"
}

