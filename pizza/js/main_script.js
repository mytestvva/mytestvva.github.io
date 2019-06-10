
 (function(){
  window.addEventListener("load", init, false);
  var f = document.myform;
  var summa = 0;
  schot();// выбрано на сумму по умолчанию
  // регистрация обработчиков событий элементов формы.
  function init() {
    f.firstName.onchange = firstNameOnChange;
    f.tlf.onchange = tlfOnChange;
    f.adres.onchange = adresOnChange;
    f.zakaz.onclick = onsubmiHandler;
    f.pizza.onchange = schot;
    f.component.onchange = schot;
  }
  // метод проверки значения в элементе по регулярному выражению.
  function validate(elem, pattern) {
    var res = elem.value.search(pattern);
    if (res == -1 || elem.value == "") elem.className = "invalid"; // установка CSS класса 
    else elem.className = "valid";
  } 
  // обработчики событий изменения текста в окне.
  function tlfOnChange() {
    var pattern = /\d{3}-\d{2}-\d{2}/;
    validate(this, pattern);
  }
  function adresOnChange() {
    var pattern = /\S/;
    validate(this, pattern);
  }
  function firstNameOnChange() {
    var pattern = /\S/;
    validate(this, pattern);
  }

  // событие при отправке формы на сервер.
  function onsubmiHandler() {
    var invalid = false;
    for (var i = 0; i < f.elements.length; ++i) {
      var e = f.elements[i];
      // проверка типа элемента и наличия обработчика события onchange.
      if (e.type == "text" && e.onchange) {
        e.onchange(); // запуск события onchanhe
        if (e.className == "invalid") invalid = true;
      }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        return false; // отмена отправки формы.
    }
  }
//=================================================================  
  //подсчет выбраных доп. компонентов
  function getSelelectValue(){
    var rezult = 0;
    for(var i = 0; i < f.component.length; i++){ // перебираем все option
      if(f.component.options[i].selected){ // если option выбран
        rezult += parseInt(f.component.options[i].value); // значение добавляем
      }
    }
    return rezult;
  }

  function schot(){
    summa = parseInt(f.pizza.value) + getSelelectValue();
    f.zakaz.value = summa; //сумма заказа для отправки на сервер
  }
 })()
 

