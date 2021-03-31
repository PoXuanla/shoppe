<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      custom : process.env.VUE_APP_CUSTOMPATH
    }
  },
  created(){
    const api = `${process.env.NODE_ENV}/rapi/${process.env.VUE_APP_CUSTOMPATH}/products`;
    console.log(process.env.VUE_APP_CUSTOMPATH)
  },
}
</script>

<style lang="sass">
 @import "./assets/all.scss"
</style>
