<template>
  <div class="g-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "GuluSubNav",
  data() {
    return {
      open: false
    };
  },
  methods: {
    onClick() {
      this.open = !this.open;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";
.g-sub-nav {
  position: relative;
  > span {
    padding: 10px 20px;
    display: block;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 2px;
    white-space: nowrap;
    background: white;
    box-shadow: 0 0 3px fade-out(black, 0.8);
    border-radius: $border-radius;
    background: $grey;
    color: $color;
    min-width: 8em;
  }
}
.g-sub-nav .g-sub-nav .g-sub-nav-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
}
</style>
