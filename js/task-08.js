const refs = {
  form: document.querySelector(".login-form"),
  emailValue: document.querySelector('[ type="email"]'),
  passwordValue: document.querySelector('[type="password"]'),
  submitBtn: document.querySelector('[type="submit"]'),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (refs.emailValue.value === "" || refs.passwordValue.value === "") {
    return window.alert("Будь ласка, заповніть усі поля");
  } else {
    const {
      elements: { email, password },
    } = event.currentTarget;
    const userData = {
      email: email.value,
      password: password.value,
    };
    console.log(userData);
    event.currentTarget.reset();
  }
}
