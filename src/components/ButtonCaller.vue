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
    text-align: center;
    white-space: nowrap;
    max-width: 480px;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: calc(389px/2);
    padding-right: calc(400px/2);
    border: 0;
    background-color: #03A678;
    color: #ECF0F1;
    transition: opacity 1s;
    &:disabled, &:disabled:hover {
      cursor: not-allowed;
      opacity: .4;
    }
    &:hover {
      opacity: .7;
    }
  }
</style>
