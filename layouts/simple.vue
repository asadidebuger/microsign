<template>
    <Nuxt />
</template>
<style>
</style>
<script>
  import {
    theme,
  } from "~/utils";
  export default {
      // name:'default',

      // head () {
      // 	console.log(this);
      //     // return {
			// 		//
      //     //     // title: this.$t(this.$route),
      //     //     // titleTemplate: '%s - '+this.$t('owner'),
      //     // }
      // },
      // ,
      // data(){
      //     // return{
      //     //     pageTitle:'null'
      //     // }
      // }
      // ,
      beforeMount() {
          const direction = theme.getDirection();
      if (direction==='rtl') {
        document.body.classList.add("rtl");
        document.dir = "rtl";
        document.body.classList.remove("ltr");
      } else {
        document.body.classList.add("ltr");
        document.dir = "ltr";
        document.body.classList.remove("rtl");
      }
    },

  }
</script>
