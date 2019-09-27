(function () {
  window.addEventListener('load', init, false);
  function init() {
    var webstore = new Vue({
      el: '#app',
      data: {
        sitename: "Рубли СССР",
        products: [],//массив для считывания объекта с json файла
        cart: [], //корзина
        showProduct: true,
        showAvers: false, //показать аверс
        order: {
          firstName: "",
          lastName: "",
          adress: "",
          city: "",
          zip: "",
          state: "",
          method: "Home Address",
          home: "Home Address",
          business: "Business Address",
          gift: "Send As A Gift",
          sendGift: "Send As A Gift",
          dontSendGift: "Do Not Send As A Gift"
        },
        states: {
          AL: "Alabama",
          CA: "California",
          NV: "Nevada"
        }
      },
      filters: {
        formatPrice: function (price) {//форматируем цену
          if (!parseInt(price)) {return "";}
          if (price > 99999) {
            var priceString = (price / 100).toFixed(2);
            var priceArray = priceString.split("").reverse();
            var index = 3;
            while (priceArray.length > index + 3) {
              priceArray.splice(index+3, 0, ",");
              index += 4;
            }
            return "$" + priceArray.reverse().join("");
          }
          else {
            return "$" + (price / 100).toFixed(2);
          }
        }
      },
      created: function () {//при создании объекта Vue делаем запрос к json файлу
        axios.get("ussr_rubli.json")
          .then((Response) => {
            this.products = Response.data.ussr_rub;
            console.log(this.products);//для контроля ответа
          });
      },
      computed: {
        cartItemCount: function () {//кол-во в корзине
          return this.cart.length || ""; 
        },
        sortedProducts: function () {//сортирует массив products и перемещает его в productsArray
          if(this.products.length > 0) {
            let productsArray = this.products.splice(0);
            function compare (a, b) {
              if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
              }
              if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
              }
              return 0;
            }
            return productsArray.sort(compare);
          }
        }       
      },
      methods: {
        addToCart: function (aProduct) {//добавление в корзину
          this.cart.push(aProduct.id);
        },
        showCheckout: function () {//переключатель для отображения формы заказа
          this.showProduct = this.showProduct ? false : true;
        },
        submitForm: function () {//
          alert("Submitted");
        },
        checkRating: function (n, myProduct) {//
          return myProduct.rating - n >= 0;
        },
        chengeImg: function () {
          return this.showAvers = !this.showAvers;
        },
        cartCount: function (id) {
          let count = 0;
          for(var i = 0; i < this.cart.length; i++) {
            if(this.cart[i] === id) {
              count++;
            }
          }
          return count;
        },
        canAddToCart: function (aProduct) {//если в наличии больше чем в корзине --> true
          return aProduct.availableInventory > this.cartCount(aProduct.id);
        }  
      }
    });
  }
})()