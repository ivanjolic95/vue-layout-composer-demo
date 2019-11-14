<template>
  <div id="app">
    <div class="site-title">Bugs of the City</div>
    <layout-composer
      :displayComponents="displayComponents"
      :config="config"
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

@font-face {
  font-family: "Lilita One";
  src: url('~@/assets/LilitaOne-Regular.ttf');
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 900px;
  margin: 0 auto;
}

.site-title {
  font-family: 'Lilita One',cursive;
  font-size: 50px;
  color: #8fcff4;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  #app {
    width: 100%;
  }
}
</style>
