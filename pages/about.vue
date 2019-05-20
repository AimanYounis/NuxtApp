<template>
  <div>
    <h1>{{getCurrentLanguage}}</h1>
    <h2>{{$t('Hello')}}</h2>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCurrentLanguage"])
  }
};
</script>
<style>
</style>

