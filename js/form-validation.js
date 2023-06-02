const form = document.querySelector("#form")
const formInput = form.querySelector("input")
const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validation() {
  let result = true
  const value = formInput.value

  if (input.dataset.inputType === "email") {
    if (value.length < 1 || !emailRe.test(value.toLowerCase())) {
      input.classList.add("error")
      result = false
    }
    else {
      input.classList.remove("error")
    }
  };

  return result
}

form.onsubmit = (e) => {
  e.preventDefault()

  if (validation()) {
    
  }
}

formInput.onclick = () => {
  input.classList.remove("error")
}