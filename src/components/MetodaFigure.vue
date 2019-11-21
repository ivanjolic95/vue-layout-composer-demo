<template>
  <lc-cell
    :key="config.id"
    :display="config.display"
    :id="config.id"
    :config="config"
    :editable="editable && !contentEditable"
    :layout-orientation="layoutOrientation"
    :is-first-child="isFirstChild"
    @edit:content="editContent"
    @delete:content="$emit('delete:content')"
  >
    <div class="MetodaFigure" :style="style">
      <div
        :contenteditable="contentEditable"
        @keydown.enter="updateText"
        @focusout="updateText"
        :draggable="contentEditable"
        @dragstart.prevent.stop
        @drag.prevent.stop
        @focus="onFocus"
        ref="text"
      >
        {{ internalText }}
      </div>
    </div>
  </lc-cell>
</template>

<script>
export default {
  name: 'MetodaFigure',
  props: {
    initialConfig:      Object,
    text:               String,
    background:         String,
    fontFamily:         String,
    color:              String,
    editable:           Boolean,
    layoutOrientation:  String,
    isFirstChild:       Boolean,
  },
  data() {
    return {
      internalText: this.text,
      config:       {},
      contentEditable:  false,
    }
  },
  created() {
    this.config = {
      ...this.initialConfig,
    }
  },
  watch: {
    internalText() {
      this.config.props.text = this.internalText
    },
  },
  computed: {
    style() {
      const { background, fontFamily, color } = this

      if (!background && !fontFamily && !color) return {}

      return {
        background,
        fontFamily,
        color,
      }
    }
  },
  methods: {
    getConfig() {
      return this.config
    },
    editContent() {
      this.contentEditable = true
      setTimeout(() => this.$refs.text.focus(), 0)
    },
    onFocus(event) {
      this.setEndOfContenteditable(event.target)
    },
    updateText(event) {
      this.internalText = event.target.textContent.trim()
      this.contentEditable = false
    },
    setEndOfContenteditable(contentEditableElement) {
      let range,selection;
      
      if(document.createRange) {
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      } else if(document.selection) { 
        range = document.body.createTextRange();
        range.moveToElementText(contentEditableElement);
        range.collapse(false);
        range.select();
      }
    }
  }
}
</script>

<style scoped>
.MetodaFigure {
  height: 100%;
  min-height: 50px;
  line-height: 50px;
  font-family: "Patrick Hand";
  color: #3096f3;
}

.MetodaFigure div {
  margin: 0;
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;
  font-size: 20px;
}
</style>
