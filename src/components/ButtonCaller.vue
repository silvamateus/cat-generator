<template>
  <button class="cat-btn" @click="callCat" :disabled="loading">
    <i class="fas fa-spinner fa-spin"></i>
    <span>{{buttonText}}</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonCaller',
  data(){
    return {
      buttonText: 'Adiciona Gatos'
    }
  },
  props: {
    loading: Boolean
  },
  methods:{
    callCat: function(e){
      this.$emit('buttonCat', e)
    }
  },
  watch: {
    loading: function(val) {
      val?
      this.buttonText = 'Loading...'
      :this.buttonText = 'Adicione Gatos'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cat-btn{
    display: flex;
    font-size: 27px;
    white-space: nowrap;
    max-width: 480px;
    min-width: 480px;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: calc(310px/2);
    padding-right: calc(400px/2);
    border: 0;
    background-color: #03A678;
    color: #ECF0F1;
    box-shadow: 0 1px 2px 0 rgba(240, 110, 110, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    transition: opacity 1s ease-in-out;
    &:disabled, &:disabled:hover {
      cursor: not-allowed;
      opacity: .4;
    }
    &:hover {
      opacity: .6;
    }
  }

.cat-btn .fa-spinner {
  display: none;
}
.cat-btn[disabled] .fa-spinner {
  display: block;
  margin-right: 4px;
}

.fa-spinner {
  transition: all 1;
  //transform: 
}
</style>
