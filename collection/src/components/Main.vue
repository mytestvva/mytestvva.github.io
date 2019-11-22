<template>
  <div>
    <my-header></my-header>
    <main  class="container-fluid">
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-md-12">
          <div class="accordion" id="accordionExample">
            <div class="card names"><!-- монеты -->
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> {{ coins_name }} </button>
                </h5>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-2 col-md-4">
                      <div class="card logo" v-on:click="showDoReform">
                        <div class="card-header">
                          <img src="../../static/logo/1-rublj-1924.jpg" class="card-img-top" alt="1 рубль 1924г.">
                        </div>                        
                        <div class="card-body">
                          <h5 class="card-title text-center">СССР</h5>
                          <p class="card-text text-center"> До реформы 1921 - 1957гг.</p>                   
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-4">
                      <div class="card logo" v-on:click="showPosleReform">
                        <div class="card-header">
                          <img src="../../static/logo/1-rublj-1961.jpg" class="card-img-top" alt="1 рубль 1961г.">
                        </div>                            
                        <div class="card-body">
                          <h5 class="card-title text-center">СССР</h5>
                          <p class="card-text text-center">После реформы 1961 - 1991гг.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-4">
                      <div class="card logo" v-on:click="showUbilei">
                        <div class="card-header">
                          <img src="../../static/logo/1-rublj-Lenin.jpg" class="card-img-top" alt="1 рубль Ленин">
                        </div>                            
                        <div class="card-body">
                          <h5 class="card-title text-center">СССР</h5>
                          <p class="card-text text-center">Юбилейные.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-4">
                      <div class="card logo">
                        <div class="card-header">
                          <img src="../../static/logo/ukr_5_grn.jpg" class="card-img-top" alt="5 гривен">
                        </div>                            
                        <div class="card-body">
                          <h5 class="card-title text-center">Украина</h5>
                          <p class="card-text text-center">Оборотные и юбилейные.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-4">
                      <div class="card logo">
                        <div class="card-header">
                          <img src="../../static/logo/1-rublj-Nikolai.jpg" class="card-img-top" alt="1 рубль Николай 2">
                        </div>                            
                        <div class="card-body">
                          <h5 class="card-title text-center">Россия</h5>
                          <p class="card-text text-center">До 1917г.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-4">
                      <div class="card logo">
                        <div class="card-header">
                          <img src="../../static/logo/1-dollar-1986.jpg" class="card-img-top" alt="1 dollar">
                        </div>                            
                        <div class="card-body">
                          <h5 class="card-title text-center">Другие</h5>
                          <p class="card-text text-center">Разные страны</p>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
            <div class="card names"><!-- Зажигалки -->
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"      aria-controls="collapseTwo"> {{ lighters_name }} </button>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-2 col-md-4">
                      <div class="card logo">
                        <div class="card-header">
                          <img src="../../static/logo/zippo_gold_style.jpg" class="card-img-top" alt="zippo">
                        </div>                        
                        <div class="card-body">
                          <h5 class="card-title text-center">lighters_name</h5>
                          <p class="card-text text-center">Description.</p>                   
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card names"><!-- Ножи -->
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"      aria-controls="collapseThree"> {{ knives_name }} </button>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-2 col-md-4">
                      <div class="card logo">
                        <div class="card-header">
                          <img src="../../static/logo/Victorinox.jpg" class="card-img-top" alt="Spartan">
                        </div>                        
                        <div class="card-body">
                          <h5 class="card-title text-center">knives_name</h5>
                          <p class="card-text text-center">Description.</p>                   
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <br />
    <br />
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './Header.vue';
import MyFooter from './Footer.vue';
export default {
  name: 'iMain',
  data() {
    return {
      coins_name: 'Монеты',
      lighters_name: 'Зажигалки',
      knives_name: 'Ножи'
    }
  },
  components: { MyHeader, MyFooter},
  props: ['path_json'],
  methods: {
    showDoReform() {
      this.$router.push({name: 'Subjects', params: {path_json: '/static/db_photo/coins_ussr/ussr_dr_id_3000.json'}}) //задаем параметры для маршрута
    },
    showPosleReform() {
      this.$router.push({name: 'Subjects', params: {path_json: '/static/db_photo/coins_ussr/ussr_pr_id_2000.json'}}) //задаем параметры для маршрута
    },
    showUbilei() {
      this.$router.push({name: 'Subjects', params: {path_json: '/static/db_photo/coins_ussr/ussr_ubilei_id_1000.json'}}) //задаем параметры для маршрута
    },
  }
}
</script>

<style scoped>
.card {
  height: 100%;  
}
.names {
  background: transparent; /* прозрачный */
  border: 2px solid black;
  border-radius: 10px;
}
.logo {
  /* background: transparent; */
  border: 2px solid black;
  border-radius: 10px;
}
.logo:hover {
  cursor: pointer;
}
.btn-link {
  font-size: 1.2rem;
  color: black;
}
</style>