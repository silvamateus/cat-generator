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
  div{
    width: 480px;
    height: 480px;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
