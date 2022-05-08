<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light" id="top-nav">
      <div class="container-fluid ">
        <a class="navbar-brand" href="/">LearnVue</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Learning Path</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><router-link to="/first" class="dropdown-item">Hello world</router-link></li>
                  <li><router-link to="/reactivity" class="dropdown-item">Reactivity demo</router-link></li>
                  <li><router-link to="/bind" class="dropdown-item">V-bind demo</router-link></li>
                  <li><router-link to="/model" class="dropdown-item">V-model demo</router-link></li>
                  <li><router-link to="/for" class="dropdown-item">V-for demo</router-link></li>                      
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
          </ul>
          <form class="d-flex">
            <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
            <button id= "login" class="btn btn-outline-success" type="submit">登入</button>
            <button id= "enroll" class="btn btn-outline-success" type="submit">註冊</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <body>
    <RouterView/>
  </body>
</template>

<style>
#top-nav {
  position: fixed;
  background-color: rgb(255, 235, 235);
  border-bottom:1px solid rgb(180, 180, 180);
  height:80px;
  width: 100%;
  font-size: 18px;
  padding-left:20px;
  padding-right:20px;
}

header + body{
    padding-top: 80px;
}

#login, #enroll{
  margin-right: 10px;
  border-radius: 5px;
}
</style>
