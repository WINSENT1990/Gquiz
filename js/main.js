// Убираем проигрывание начальной анимации в некоторых браузерах
window.onload = function f(){
  var body = document.getElementsByClassName('load')[0];
  body.classList.remove('load');
};

// Функция, отвечающая за перелистывание контента
let sectionLeftWrapper = document.getElementById('section--left__wrapper');
let sectionRightWrapper = document.getElementById('section--right__wrapper');
let heart = document.getElementsByClassName('heart')[0];
let marginNew = 0;
let nextScreen = () => {
  let a = marginNew + 80;
  marginNew = a;
  document.getElementById('section--right__main').style.marginTop = "-" + marginNew + "vh";
};
// Расширяем секции (при смене первого скрина на второй)
let wideSections = () => {
  sectionLeftWrapper.style.width = "55.8%";
  sectionRightWrapper.style.width = "44.2%";
  sectionRightWrapper.style.background = "#fc8950";
  heart.style.fill = "#fc8950";
  heart.style.border = "0.5em solid #fc8950"
  nextScreen()
};

// При клике на окно с будущим контентом, пролистнуть один экран вниз и расширить секцию.
document.getElementById("button--start").addEventListener("click", wideSections);

// При выборе радиокнопки показывать соответствующую информацию из статистики
var radioQuiz = document.getElementsByName('quiz');

for (var i=0; i < radioQuiz.length; i++) {
  radioQuiz[i].onchange = percentsQuiz;
};
function percentsQuiz() {
  let persents = document.getElementById('querry--results--persents');
  let descr = document.getElementById('querry--results--descr');
  let results = document.getElementById('querry--results');
  let toReg = document.getElementById('button--toReg');

  results.style.opacity = "1";
  toReg.style.display = "block";
  toReg.style.opacity = "1";

  if (this.value === "A") {
    persents.innerHTML = "15%";
    descr.innerHTML = "Людей обращают внимание на А.";
  } else if (this.value ==="B"){
    persents.innerHTML = "30%";
    descr.innerHTML = "Людей обращают внимание на Б.";

  } else if (this.value === "C") {
    persents.innerHTML = "55%";
    descr.innerHTML = "Людей обращают внимание на В.";
  };
};

// Переход на экран регистрации
let toReg = () => {
  nextScreen()
  document.getElementById('querry--results').style.opacity = "0"
  sectionRightWrapper.style.background = "#1da7c0";
  heart.style.fill = "#1da7c0";
  heart.style.border = "0.5em solid #1da7c0";
};

document.getElementById("button--toReg").addEventListener("click", toReg);

// Проверка формы. Дополнительные переменные для удобства
let regLogin = document.getElementById('u-name');
let regEmail = document.getElementById('u-email');
let regPasswd = document.getElementById('u-passwd');
let regPrivacy = document.getElementById('privacy');
let regData = document.getElementsByName('regdata');
let privacy = document.getElementById('privacy');

// realtime проверка формы
for (let i=0; i < regData.length; i++) {
  regData[i].onchange = regCheck;
};

function regCheck() {
  let confirmed = "1px solid #1da7c0";
  let err = "1px solid #b72020";
  let submit = document.getElementById('validateBtn');
  let privacy = document.getElementById('privacy');
  // Параметры, на которые проверяется форма
  // Проверка на наличие имени
  if (regLogin.value) {
    regLogin.style.border = confirmed
  } else {
    regLogin.style.border = err
    regLogin.placeholder = "Введите свое имя"
  };
  // Проверка на наличие и валидность емейла
  if (regEmail.value.indexOf('@') > 1 && regEmail.value.indexOf('.') > 1) {

    regEmail.style.border = "1px solid #1da7c0";
  } else {
    regEmail.style.border = "1px solid red";
    regEmail.placeholder = "Неверный формат email"
  };
  // Проверка на наличие пароля
  if (regPasswd.value) {
    regPasswd.style.border = confirmed;
  } else {
    regPasswd.style.border = err;
    regPasswd.placeholder = "Придумайте новый пароль";
  };
  // Проверка формы перед сабмитом в целом по обязательным параметрам
  if (regPasswd.value
      && privacy.checked == true
          && regLogin.value
              && (regEmail.value.indexOf('@') > 1 && regEmail.value.indexOf('.') > 1)){
    submit.disabled = false;
  } else {
    submit.disabled = true;
  };
};
