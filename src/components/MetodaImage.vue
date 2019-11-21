<template>
  <lc-cell
    :key="config.id"
    :display="config.display"
    :id="config.id"
    :config="config"
    :editable="editable && !contentEditable"
    :layout-orientation="layoutOrientation"
    :is-first-child="isFirstChild"
    @edit:content="contentEditable = true"
    @delete:content="$emit('delete:content')"
  >
    <div class="MetodaImage">
      <div v-if="contentEditable" class="MetodaImage__Form">
        <input type="text" v-model="internalUrl" autofocus />
        <button @click="updateUrl">Save</button>
      </div>
      <img :src="url" :draggable="false" />
    </div>
  </lc-cell>
</template>

<script>
export default {
  name: 'MetodaImage',
  props: {
    initialConfig:      Object,
    url:                String,
    editable:           Boolean,
    layoutOrientation:  String,
    isFirstChild:       Boolean,
  },
  data() {
    return {
      internalUrl:      this.url,
      config:           {},
      contentEditable:  false,
    }
  },
  created() {
    this.config = {
      ...this.initialConfig,
    }
  },
  watch: {
    internalUrl() {
      this.config.props.url = this.internalUrl
    },
  },
  methods: {
    getConfig() {
      return this.config
    },
    updateUrl() {
      this.contentEditable = false
    },
  }
}
</script>

<style scoped>
.MetodaImage {
  height: 100%;
  min-height: 12px;
  box-sizing: border-box;
  border: 2px solid rgb(252, 228, 236);
  border-radius: 5px;
}

.MetodaImage__Form {
  display: flex;
  background: #fff;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
}

.MetodaImage__Form input {
  flex-grow: 2;
}

img {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
