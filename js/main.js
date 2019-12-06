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
  document.getElementById('section--right__wrapper').style.background = "#fc8950";

};

// При клике на окно с будущим контентом, пролистнуть один экран вниз и расширить секцию.
document.getElementById("button--start").addEventListener("click", nextScreen);
document.getElementById("button--start").addEventListener("click", wideSections);

// Pixel Perfect обертка (удалить на прод)
window.addEventListener('keyup',function(e){
    if (e.keyCode === 49) {
    document.getElementById("check").style.display = "block";
  } else if (e.keyCode === 50) {
    document.getElementById("check").style.display = "none";
  }
});
