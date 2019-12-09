// Функция, отвечающая за перелистывание контенты
let marginNew = 0;
let nextScreen = () => {
  let a = marginNew + 80;
  marginNew = a;
  document.getElementById('section--right__main').style.marginTop = "-" + marginNew + "vh";
};
// Расширяем секции (при смене первого скрина на второй)
let wideSections = () => {
    document.getElementById('section--left__wrapper').style.width = "55.8%";
  document.getElementById('section--right__wrapper').style.width = "44.2%";
  document.getElementById('section--right__wrapper').style.background = "#fc8950";
  nextScreen()
};

// При клике на окно с будущим контентом, пролистнуть один экран вниз и расширить секцию.
document.getElementById("button--start").addEventListener("click", wideSections);

// Pixel Perfect обертка (удалить на прод)
window.addEventListener('keyup',function(e){
    if (e.keyCode === 49) {
    document.getElementById("check").style.display = "block";
  } else if (e.keyCode === 50) {
    document.getElementById("check").style.display = "none";
  }
});

// При выборе радиокнопки показывать соответствующую информацию из статистики
var radioQuiz = document.getElementsByName('quiz');

for (var i=0; i < radioQuiz.length; i++) {
  radioQuiz[i].onchange = percentsQuiz;
};
function percentsQuiz() {
  document.getElementById('querry--results').style.opacity = "1"
  document.getElementById('button--toReg').style.display = "block"
  document.getElementById('button--toReg').style.opacity = "1"
  if (this.value === "A") {
    document.getElementById('querry--results--persents').innerHTML = "15%";
    document.getElementById('querry--results--descr').innerHTML = "Людей обращают внимание на А.";
  } else if (this.value ==="B"){
    document.getElementById('querry--results--persents').innerHTML = "30%";
    document.getElementById('querry--results--descr').innerHTML = "Людей обращают внимание на Б.";

  } else if (this.value === "C") {
    document.getElementById('querry--results--persents').innerHTML = "55%";
    document.getElementById('querry--results--descr').innerHTML = "Людей обращают внимание на В.";
  };
};

// Переход на экран регистрации
let toReg = () => {
  nextScreen()
  document.getElementById('querry--results').style.opacity = "0"
  document.getElementById('section--right__wrapper').style.background = "#1da7c0";
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
  // Параметры, на которые проверяется форма
  if (regLogin.value) {
    document.getElementById('validateBtn').disabled = false;
    regLogin.style.border = confirmed
  } else {
    document.getElementById('validateBtn').disabled = true;
    regLogin.style.border = err
    regLogin.placeholder = "Введите свое имя"
  };

  if (regEmail.value.indexOf('@') > 1 && regEmail.value.indexOf('.') > 1) {
    document.getElementById('validateBtn').disabled = false;
    regEmail.style.border = "1px solid #1da7c0";
  } else {
    document.getElementById('validateBtn').disabled = true;
    regEmail.style.border = "1px solid red";
    regEmail.placeholder = "Неверный формат email"
  };

  if (regPasswd.value) {
    document.getElementById('validateBtn').disabled = false;
    regPasswd.style.border = confirmed;
  } else {
    document.getElementById('validateBtn').disabled = true;
    regPasswd.style.border = err;
    regPasswd.placeholder = "Придумайте новый пароль";
  };

  if (privacy.checked === false) {
    document.getElementById('validateBtn').disabled = true;
  };
};

document.querySelector('.content_number_3').addEventListener('submit', function (event) {
  event.preventDefault(); // Отключение дефолтных действий с формой
  // Отсюда можно работать с API
});
