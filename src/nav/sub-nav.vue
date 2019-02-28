<template>
  <div class="g-sub-nav" :class="{active}" v-click-outside="close">
    <span class="g-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="g-sub-nav-icon" :class="{open}">
        <g-icon name="right"></g-icon>
      </span>
    </span>
    <div class="g-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
import ClickOutside from "../click-outside.js";
import GIcon from "../../src/icon";
export default {
  name: "GuluSubNav",
  directives: { ClickOutside },
  components: { GIcon },
  inject: ["root"],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
    }
  },
  methods: {
    close() {
      this.open = false;
    },
    onClick() {
      this.open = !this.open;
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      } else {
        //this.root.namePath = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";
.g-sub-nav {
  position: relative;
  &.active {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid $blue;
      width: 100%;
    }
  }
  &-label {
    padding: 10px 20px;
    display: block;
  }
  &-icon {
    display: none;
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
.g-sub-nav .g-sub-nav {
  &.active {
    &::after {
      display: none;
    }
  }
  .g-sub-nav {
    &-popover {
      top: 0;
      left: 100%;
      margin-left: 8px;
    }
    &-icon {
      display: inline-flex;
      margin-left: 0.5em;
      transition: transform 250ms;
      svg {
        fill: $light-color;
      }
      &.open {
        transform: rotate(180deg);
      }
    }
    &-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
