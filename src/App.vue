<template>
  <!-- ================ header start ============= -->
  <div class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/">
          <div class="logo">
            <img loading="lazy" decoding="async" src="./assets/img/logo.jpeg" alt="Logo">
          </div>
        </router-link>
        <button class="navbar-toggler" style="outline: none; border: none;" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span><i class="fas fa-bars" style=" font-size: 25px; color: #447afb;"></i></span>
        </button>
        <!-- **************** this is responsive nav ber *************** -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="header-menu hidden">
            <div class="line"></div>
            <ul class="navbar-nav mr-auto">
              <li @click="PageSelect">
                <router-link to="/">Home</router-link>
              </li>
              <li @click="PageSelect">
                <router-link to="/about">About us</router-link>
              </li>
              <li @click="PageSelect">
                <router-link to="/privacy-policy">privacy policy</router-link>
              </li>
              <li @click="PageSelect">
                <router-link to="/contact">Contact us</router-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- **************** this is desktop nav ber *************** -->

        <div class="header-menu header-menu-hidden">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About us</router-link>
            </li>
            <li>
                <router-link to="/privacy-policy">privacy policy</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact us</router-link>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  </div>
  <router-view />
</template>

<style>
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';
  @import 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed&display=swap';
  @import '@/assets/css/main.css';

  .router-link-exact-active {
    color: #2D68FA !important;
  }
</style>

<script>
  export default {
    methods: {
      PageSelect(){
        let NavMenu = document.querySelector('#navbarSupportedContent');
        NavMenu.classList.remove('show');
      },
    }
  }
</script>
