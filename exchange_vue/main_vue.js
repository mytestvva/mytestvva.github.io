window.addEventListener("load", init, false);

function init() {

  const MyComponent = {
    template: '<div class="card border-secondary text-center mb-3">\
                <div class="card-header bg-info">\
                  <p class="card-text"> <strong> {{abr}} </strong></p>\
                  <span> {{name}} </span>\
                </div>\
                <div class="cart-body bg-secondary">\
                  <p class="card-text">Ціна за одиницю:</p>\
                  <p class="card-text"> {{cina}} </p>\
                </div>\
                <div class="card-footer text-muted">\
                  <p> {{datanew}} </p>\
                  <button class="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal" v-on:click="buy">Купити</button>\
                </div>\
              </div> ',
    props: [
      'abr',
      'name',
      'cina',
      'datanew'
    ],
    data() {
      return {
        // names: ''
      }
    },
    methods: {
      buy: function (name, cina) {
        this.$emit('view', this.name, this.cina); //генерируем событие 'view' и передаем ему название и цену валюты
        console.log(this.name, this.cina); //контроль      
      }
    }
  }

  var page = new Vue({
    el: "#app",
    components: {'my-component': MyComponent},
    data: {
      message: "Офіційний курс гривні щодо іноземних валют",
      currency: "...",
      price: "...",
      answer: [],
      kol_vo: "100"
    },
    created: function() {//axios запрос, ответ помещаем в массив answer
      axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json")
      .then(response => {
        this.answer = response.data;//ответ приходит в массиве data
        console.log(this.answer);//контроль
      });
    },
    computed: {
      total: function () {//общая сумма покупки
        return (this.price * parseFloat(this.kol_vo)).toFixed(2) ;
      }
    },
    methods: {
      view_modal: function (name, cina) {//показать окно покупки, и передать в него имя валюты и цену
        this.currency = name;
        this.price = cina;
      },
      msg: function () {alert("Майже куплено :)")}
    }  
  });
}



// mounted() {
//   axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
//     .then(response => {
//       this.answer = response.data;
//       // console.log(this.answer);
//    })
// }