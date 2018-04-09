<template>
  <div id="app">
    <header id="cat-header">
      <img src="./assets/logo-1.svg" alt="">
      <h1>Gerador de gatos</h1>
    </header>
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
      this.isLoading = true
      fetch('https://cataas.com/c')
      .then(res =>  res.blob())
      .then(blob => {
        this.images.push(URL.createObjectURL(blob))
      })
      .finally(setTimeout(() => this.isLoading = false, 1000))
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
}
#cat-header, footer {
  background-color: #fefefe;
  color: #aaa;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;

}
body {
  margin: 0;
  background-color: #D2D7D3;
  color: #eee;
  height: 100%;
}
footer {
  position: relative;
  bottom: -4rem;
  width:100%;
  word-spacing: 1px;
}
#cat-header {
  position: fixed;
  width: 100%;
  z-index: 1;
  & > img {
    flex-basis: 15%;
  }
  & > h1 {
    flex-basis: 68%;
  }

}

.feed{
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-around;
}
</style>
