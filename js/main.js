// Функция, отвечающая за перелистывание контенты
let marginNew = 0;
let nextScreen = () => {
  let a = marginNew + 80;
  marginNew = a;
  document.getElementById('section--right__main').style.marginTop = "-" + marginNew + "vh";
};
// Расширяем секции (при смене первого скрина на второй)
let wideSections = () => {
  document.getElementById('section--left__wrapper').style.width = "56.25%";
  document.getElementById('section--right__wrapper').style.width = "43.75%";
};

// При клике на окно с будущим контентом, пролистнуть один экран вниз и расширить секцию.
document.getElementById("section--right__main__wrapper").addEventListener("click", nextScreen);
document.getElementById("section--right__main__wrapper").addEventListener("click", wideSections);
