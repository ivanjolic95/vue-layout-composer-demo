<template>
  <lc-cell
    :display="{
      weight: 1,
    }"
    :id="config.id"
    :config="config"
    editable
  >
    <div class="Item" :style="style" @click="onClick">
      {{ content }}
    </div>
  </lc-cell>
</template>

<script>
export default {
  name: 'Item',
  props: {
    config:     Object,
    content:    String,
    background: String,
  },
  computed: {
    style() {
      const { background } = this

      return {
        background,
      }
    }
  },
  methods: {
    onClick() {
      console.log('clicked')
    }
  }
}
</script>

<style>
.Item {
  height: 100%;
  min-height: 50px;
  line-height: 50px;
}
</style>
