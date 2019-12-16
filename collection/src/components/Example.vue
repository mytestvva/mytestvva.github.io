<template>
  <div>
    <my-header></my-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-md-12">
          <div class="row">
            <div class="col-8">
              <figure>
                <img v-bind:src="product.img_path_a" v-if="showAvers" v-on:click="chengeImg">
                <img v-bind:src="product.img_path_r" v-else v-on:click="chengeImg">
              </figure>
            </div>
            <div class="col-4">
              <h2 v-text="product.title"></h2>
              <p v-html="product.description"></p>
              <p><strong>Материал: </strong> {{product.material}} </p>
              <p><strong>Год выпуска:</strong> {{product.year}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './Header.vue';
import MyFooter from './Footer.vue';
export default {
  components: { MyHeader, MyFooter},
  data() {
    return {
      product: '',
      showAvers: false
    }
  },
  created: function() {
    axios.get(this.$route.params.path_json).then(response => { //входные параметры в url запроса
      this.product = response.data.products.filter(data => data.id == this.$route.params.id)[0];
      console.log(this.products); //контроль
    });
  },
  methods: {
    chengeImg: function() {
      return this.showAvers = !this.showAvers;
    }
  }
}
</script>

<style scoped>
  img {
    width: 100%; }
  img:hover {
    cursor: pointer; }
  .col-4 {
    font-size: 1.2rem;
  }
</style>
