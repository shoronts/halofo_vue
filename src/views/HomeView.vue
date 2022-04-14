<template>
  <HomeCom />
  <FooterCom />
</template>

<script>
import HomeCom from '@/components/HomeCom.vue'
import FooterCom from '@/components/FooterCom.vue'

export default {
  name: 'HomeView',
  components: {
    HomeCom,
    FooterCom
  },
  mounted() {  
      document.title = "Holafo - Sell Your Xtra Half | Home";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
}
</script>
