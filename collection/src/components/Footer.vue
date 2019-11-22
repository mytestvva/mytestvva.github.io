<template>
  <footer class="container-fluid fixed-bottom">
    <div class="row">
      <div class="col-lg-10 offset-lg-1 col-md-12">
        <button type="button" class="btn btn-secondary btn-lg btn-block" v-on:click="showForm"> {{ inscription }} </button>
      </div>
    </div>    
  </footer>
</template>
<script>
export default {
  name: 'my-footer',
  data() {
    return {
      inscription: "@ Связаться"
    }
  },
  methods: {
    showForm: function() {
      this.$router.push({name: 'Form'});
    }
  },
}
</script>
<style scoped>
  /* footer {
    position: fixed;
    bottom: 0;
  } */
</style>