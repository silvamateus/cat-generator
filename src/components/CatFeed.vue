<template>
  <section>
      <header>How do you like your cats?</header>
      <div>
          <img :src="whiskasFeed" :alt="whiskasFeed">
      </div>
  </section>
</template>

<script>
export default {
  name: 'CatFeed',
  props:{
    'whiskasFeed' : String
  }
}
</script>
