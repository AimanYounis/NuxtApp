<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="/">Nateev Express</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link to="/about">{{$t('AboutUs')}}</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/careers">{{$t('Careers')}}</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/contactus">{{$t('ContactUs')}}</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
        <languageSwitcher/>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import languageSwitcher from "~/components/languageSwitcher.vue";
export default {
  data(){
    return{

    }
  },
  components: {
    languageSwitcher
  }
};
</script>
<style>
</style>
