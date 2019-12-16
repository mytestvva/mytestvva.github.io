<template>
  <div>
    <my-header></my-header>
    <div class="container-fluid">
      <h2> {{ $route.params.path_json }} </h2> <h3>контроль</h3>
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-md-12">
          <!-- <div class="col-lg-3 col-md-6 col-sm-12" v-for="currency in answer"></div> -->
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12" v-for="product in sortedProducts" :key="product.id">
              <div class="card bg-light">
              <img v-bind:src="product.img_path_r" class="card-img-top" alt="...">
              <div class="card-footer">
                <p class="card-text text-center"> <router-link tag="span" :to="{name : 'Id', params: {id: product.id, path_json: path_json}}"> <strong> {{ product.title }} </strong> </router-link> </p>
              </div>
            </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
    <br /><br /><br /><br />
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './Header.vue';
import MyFooter from './Footer.vue';
export default {
  name: 'Subjects',
  // props: ['path_json'],
  data() {
    return {
      products: {},
      path_json:''
    }
  },
  components: { MyHeader, MyFooter},
  created: function() {
    this.path_json = this.$route.params.path_json;
    axios.get(this.path_json).then(response => { //входные параметры в url запроса
      this.products = response.data.products;
      console.log(this.products); //контроль
    });
  },
  computed: {
     sortedProducts: function () {//сортирует объект products и перемещает его в productsArray
      if(this.products.length > 0) {
        let productsArray = this.products.splice(0);//преобразует объект в массив
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
  }
}
</script>

<style scoped>
  .card {
    border: 4px solid rgb(85, 27, 27);
    border-radius: 10px;
    margin-bottom: 10px;
    height: 100%;
  }
  .card-footer:hover {
    cursor: pointer;
  }
</style>