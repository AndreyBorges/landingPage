const form = document.getElementById("form");

form.addEventListener("change", ({target}) => {
    if(!target.checkValidity()){
      target.nextElementSibling.innerText = target.validationMessage
  }else{
    target.nextElementSibling.innerText = ''
  }

});
