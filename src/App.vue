<template>
  <div id="app">
    <header id="cat-header">
      <img src="./assets/logo-1.svg" alt="">
    </header>
    <main class="feed">
      <button-caller :loading="isLoading" @buttonCat="catImg"></button-caller>
      <cat-feed :whiskasFeed="images"></cat-feed>
    </main>
    <footer>
      <i class="far fa-copyright"></i>
      <p>2018 Cat Generator</p>
    </footer>
  </div>
</template>

<script>
import ButtonCaller from './components/ButtonCaller.vue'
import CatFeed from './components/CatFeed.vue'

export default {
  name: 'app',
  data(){
    return {
      images: [],
      isLoading: false
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
* {
  box-sizing: border-box;
}
#app {
  text-align: center;
  font-family: 'Roboto', sans-serif;

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
  padding-top: 9rem;
  padding-bottom: 1rem;
  display: grid;
  justify-content: center;
  align-content:flex-start;
  min-height: 80vh;
}
</style>
