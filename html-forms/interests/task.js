let container = document.querySelector('.interests_main');

container.addEventListener('change', (event) => {
  let item = event.target.closest('.interest');
  let itemCheck = item.querySelector('.interest__check');
  let itemUl = [...item.querySelectorAll('.interests')];

  itemUl.forEach((i) => {
    let checkOthers = [...i.querySelectorAll('.interest__check')];
    
    checkOthers.forEach((check) => {
      if(itemCheck.checked){
        check.checked = true ;
      } else {
        check.checked = false;
      }
    });
  });
});