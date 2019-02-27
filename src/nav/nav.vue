<template>
  <div class="g-nav">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "GuluNav",
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.updatedChildren();
    this.listenToChildren();
  },
  updated() {
    this.updatedChildren();
  },
  computed: {
    items() {
      return this.$children.filter(vm => vm.$options.name === "GuluNavItem");
    }
  },
  methods: {
    updatedChildren() {
      this.items.forEach(vm => {
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on("add:selected", name => {
          if (this.multiple) {
            if (this.selected.indexOf(name) < 0) {
              let copy = JSON.parse(JSON.stringify(this.selected));
              copy.push(name);
              this.$emit("update:selected", copy);
            }
          } else {
            this.$emit("update:selected", [name]);
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.g-nav {
  display: flex;
  border: 1px solid red;
}
</style>
