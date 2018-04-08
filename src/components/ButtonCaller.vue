<template>
  <button  @click="callCat">Olar</button>
</template>

<script>
export default {
  name: 'ButtonCaller',
  methods:{
    callCat: function(e){
      this.$emit('buttonCat', e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  button{
    width: 10rem;
    height: 10rem;
  }
</style>
