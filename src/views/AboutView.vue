<template>
    <AboutCom />
    <FooterCom />
</template>

<script>
import AboutCom from '@/components/AboutCom.vue'
import FooterCom from '@/components/FooterCom.vue'

export default {
  name: 'AboutView',
  components: {
    AboutCom,
    FooterCom
  },
  mounted() {  
      document.title = "Holafo - Sell Your Xtra Half | About";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
}
</script>