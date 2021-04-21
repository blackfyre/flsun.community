<template>
  <div id="global-layout">
    <component :is="layout"/>
    <component v-if="CookieConsent" :is="CookieConsent"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CookieConsent: null,
    };
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  },
  mounted() {
    import("vue-cookie-law").then((module) => {
      this.CookieConsent = module.default;
    });
  },
}
</script>