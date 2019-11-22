<template>
  <header class="container-fluid">
    <div class="row">
      <div class="col-lg-10 offset-lg-1 col-md-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent;">
          <span class="navbar-brand"><h1> {{ sitename }} </h1></span>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#"><router-link :to="{name: 'iMain'}">Главная</router-link><span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Монеты </a>
                <div class="dropdown-menu dropright" aria-labelledby="navbarDropdownMenuLink">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> СССР </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">1921 - 1957</a>
                    <a class="dropdown-item" href="#">1961 - 1991</a>
                    <a class="dropdown-item" href="#">Юбилейные</a>
                  </div>
                  <a class="dropdown-item disabled" href="#">Украина</a>
                  <a class="dropdown-item disabled" href="#">Россия</a>
                  <a class="dropdown-item disabled" href="#">Другие страны</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Зажигалки</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Ножи</a>
              </li>      
            </ul>
          </div>
        </nav>
      </div>
    </div>
    
  </header>
</template>
<script>
export default {
  name: 'my-header',
  data() {
    return {
      sitename: "Моя коллекция"
    }
  }
}
</script>
<style scoped>
  header {
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 1.2rem;
    background: transparent;
    margin-bottom: 10px;
  }
  .navbar {
    border: 2px solid black;
    border-radius: 10px; 
  }
  a {
    direction: none;
    color: black;
  }
</style>