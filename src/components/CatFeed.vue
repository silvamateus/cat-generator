<template>
<div>
    <img :src="whiskasFeed" :alt="whiskasFeed">
</div>
</template>

<script>
export default {
  name: 'CatFeed',
  props:{
    'whiskasFeed' : String
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
