<template>
  <!-- Right aligned nav items -->
  <b-navbar-nav
    :class="{'ml-auto':getCurrentLanguageDirection == 'ltr','mr-auto':getCurrentLanguageDirection != 'ltr'}"
  >
    <b-nav-item-dropdown :text="$t('Language')">
      <b-dropdown-item
        v-for="lang in getLanguages"
        :key="lang.lang"
        @click="changeLanguage(lang)"
      >{{lang.lang}}</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getLanguages"]),
    ...mapGetters(["getCurrentLanguageDirection"])
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang.lang;
      this.$store.dispatch("setLanguage", lang);
      document.body.className = "";
      document.body.className = this.getCurrentLanguageDirection;
    }
  }
};
</script>
<style scoped>
.ml {
  margin-left: auto;
}
.mr {
  margin-right: auto;
}
</style>

