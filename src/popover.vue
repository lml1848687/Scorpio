<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        width,
        height,
        top,
        left
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return
      } if(this.$refs.contentWrapper &&
      (
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      )){
        return
      }else {
        this.close();
      }
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
      document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
  background: white;
  transform: translateY(-100%);
  padding:0.5em 1em;
  margin-top: -10px;
  max-width: 20em;
  word-break: break-all;
  &::before{
    content: '';
    display: block;
    border: 10px solid transparent;
    border-top-color: black;
    width: 0;
    height: 0;
    position:absolute;
    top: 100%;
    left: 10px;
  }
  &::after{
    content: '';
    display: block;
    border: 10px solid transparent;
    border-top-color: white;
    width: 0;
    height: 0;
    position:absolute;
    top: calc(100% - 1px);
    left: 10px;
  }
}
</style>
