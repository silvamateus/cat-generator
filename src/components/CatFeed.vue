<template>
<div id="cats">
  <div class="cat-box" v-for="(whisk,id) in whiskasFeed" :key="id">
    <img :src="whisk" :alt="whisk">
    <i class="fas fa-heart"></i>
</div>
</div>
</template>

<script>
export default {
  name: 'CatFeed',
  props:{
    'whiskasFeed' : Array
  }
}
</script>


<style lang="scss" scoped>
  #cats {
    max-width: 480px;
    box-shadow: 0 1rem 2rem 0 rgba(240, 110, 110, 0.2), 0 1rem 2rem 0 rgba(0, 0, 0, 0.19);
    background-color: #bdc3c7;
  }
  .cat-box {
    padding-top: 1rem;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: border .3s;
    border: transparent;
    
    &:hover{
      border-style: solid;
      border-color: #fff;
      border-width:  0 1px 1px;
    }
    & img:hover {
      opacity: .8;
    }
    & .fa-heart:hover{
      opacity: .8;
  }
  }
  .fa-heart {
    color: rgb(255, 0, 0);
    font-size: 30px;
    margin-bottom: 1rem;
  }
  img{
    width: 420px;
    max-height: 420px;
    margin-bottom: 1rem;
  }
</style>
