<template>
  <div id="app">
    <layout-composer
      :displayComponents="displayComponents"
      :config="config"
      editable
    />
  </div>
</template>

<script>
import config from '../config/layout.json'
import 'vue-layout-composer/dist/vue-layout-composer.css'

import MetodaTitle from './components/MetodaTitle'
import MetodaTextBlock from './components/MetodaTextBlock'
import MetodaImage from './components/MetodaImage'
import MetodaFigure from './components/MetodaFigure'

export default {
  name: 'app',
  data() {
    return {
      displayComponents: {
        'Title':      MetodaTitle,
        'TextBlock':  MetodaTextBlock,
        'Image':      MetodaImage,
        'Figure':     MetodaFigure,
      },
      config,
    }
  },
}
</script>

<style>
@font-face {
  font-family: "Crushed";
  src: url("~@/assets/Crushed.ttf");
}

@font-face {
  font-family: "Patrick Hand";
  src: url("~@/assets/PatrickHand-Regular.ttf");
}

@font-face {
  font-family: "Homemade Apple";
  src: url("~@/assets/HomemadeApple.ttf");
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 900px;
  margin: 0 auto;
}

@media only screen and (max-width: 600px) {
  #app {
    width: 100%;
  }
}
</style>
