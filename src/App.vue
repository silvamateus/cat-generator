<template>
  <div id="app">
    <header>How do you like your cats?</header>
    <main class="feed">
    <button-caller @buttonCat="catImg"></button-caller>
    <cat-feed :whiskasFeed="image"></cat-feed>
    </main>
  </div>
</template>

<script>
import ButtonCaller from './components/ButtonCaller.vue'
import CatFeed from './components/CatFeed.vue'

export default {
  name: 'app',
  data(){
    return {
      image: ''
    }
  },
  components: {
    ButtonCaller,
    CatFeed
  },
  methods: {
    catImg: function() {
      this.image = ''
      fetch('https://cataas.com/c')
      .then(res =>  this.image = res.url)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.feed{
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-around;
}
</style>
