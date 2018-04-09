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
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
