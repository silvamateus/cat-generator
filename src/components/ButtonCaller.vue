<template>
  <button  @click="callCat" :disabled="loading">
    <i v-if="isLoading" class="fas fa-spinner"></i>
    <span v-else>Adicione Gatos</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonCaller',
  props: {
    loading: Boolean
  },
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
