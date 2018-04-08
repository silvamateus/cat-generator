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
  section{
    width: 30rem;
  }
</style>
