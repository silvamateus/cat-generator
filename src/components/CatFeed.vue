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
  }

  img{
    transition: opacity 1s;
  }
  .cat-box {
    margin-top: 2rem;
    padding-top: 3rem;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: border .3s;
    border: transparent;
    background-color: #eee;
    box-shadow: 0 1px 2px 0 rgba(240, 110, 110, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);

    & img:hover {
      opacity: .8;
    }
    & .fa-heart:hover{
      color: #c42020;
    }
  }
  .fa-heart {
    color: #524f4f;
    font-size: 30px;
    margin-top: 2rem;
    margin-bottom: 3rem;
    margin-right: 2rem;
    align-self: flex-end;
    transition: all 1s ease-in-out;
  }
  img{
    width: 420px;
    max-height: 420px;
    margin-bottom: 1rem;
  }
</style>
