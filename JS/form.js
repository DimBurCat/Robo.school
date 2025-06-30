const btnForm = document.getElementById("btnForm");
const telNum = document.getElementById("input-telNum");
const username = document.getElementById("input-name");
const email = document.getElementById("input-email");
const form = document.getElementById("form");
let numVal = false;
let nameVal = false;
let emVal = false;

username.addEventListener("input", (event) => {
  const regex = /^[a-zA-ZА-Яа-я][a-zA-ZА-Яа-я0-9-_\.]{1,20}$/;
  nameVal = regex.test(event.target.value);
  if (nameVal) {
    event.target.style.background = "var(--white-color)";
    event.target.style.color = "var(--dark-puple-color)";
  } else {
    event.target.style.background = "var(--bloodly-red-color)";
    event.target.style.color = "var(--white-color)";
  }
});

telNum.addEventListener("input", (event) => {
  const regex = /^((\+7|7|8)+([0-9]){10})$/;
  numVal = regex.test(event.target.value);
  if (numVal) {
    event.target.style.background = "var(--white-color)";
    event.target.style.color = "var(--dark-puple-color)";
  } else {
    event.target.style.background = "var(--bloodly-red-color)";
    event.target.style.color = "var(--white-color)";
  }
});

email.addEventListener("input", (event) => {
  const regex = /^[a-zA-ZА-Яа-я0-9._%+-]+@[a-zA-ZА-Яа-я0-9.-]+\.[a-zA-ZА-Яа-я]{2,}$/;
  emVal = regex.test(event.target.value);
  if (emVal) {
    event.target.style.background = "var(--white-color)";
    event.target.style.color = "var(--dark-puple-color)";
  } else {
    event.target.style.background = "var(--bloodly-red-color)";
    event.target.style.color = "var(--white-color)";
  }
});

form.addEventListener("change", () => {
  if (emVal && numVal && nameVal) {
    btnForm.disabled = false;
  } else {
    btnForm.disabled = true;
  }
});

btnForm.addEventListener('click', () => {
    alert("Ваша заявка успешно отправлена! С вами свяжутся в ближайшее время")
});