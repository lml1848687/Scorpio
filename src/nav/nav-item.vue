<template>
  <div class="g-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "GuluNavItem",
  inject: ["root"],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  },
  created() {
    this.root.addItem(this);
  },
  methods: {
    onClick() {
      this.root.namePath = [];
      this.$parent.updateNamePath && this.$parent.updateNamePath();
      this.$emit("add:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";
.g-nav-item {
  padding: 10px 20px;
  position: relative;
  white-space: nowrap;
  &.selected {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid $blue;
      width: 100%;
    }
  }
}
.g-sub-nav .g-nav-item {
  color: $light-color;
  background: white;
  &.selected {
    background: #ddd;
    &::after {
      display: none;
    }
  }
}
</style>
