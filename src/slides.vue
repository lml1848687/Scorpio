<template>
  <div class="g-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span
        v-for="n in childrenLength"
        :key="n"
        :class="{active : selectedIndex === n-1}"
        @click="select(n-1)"
      >{{n}}</span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined
    };
  },
  mounted() {
    this.updateChildren();
    this.playAutomatically();
    this.childrenLength = this.$children.length;
  },
  updated() {
    this.updateChildren();
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) || 0;
    },
    names() {
      return this.$children.map(vm => vm.name);
    }
  },
  methods: {
    select(index) {
      this.lastSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[index]);
    },
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.playAutomatically();
    },
    playAutomatically() {
      if (this.timerId) {
        return;
      }
      let run = () => {
        let index = this.names.indexOf(this.getSelected());
        let newIndex = index - 1;
        if (newIndex === -1) {
          newIndex = this.names.length - 1;
        }
        if (newIndex === this.names.length) {
          newIndex = 0;
        }
        this.select(newIndex);
        this.timerId = setTimeout(run, 3000);
      };
      this.timerId = setTimeout(run, 3000);
    },
    pause() {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
    },
    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach(vm => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (this.timerId) {
          if (
            this.lastSelectedIndex === this.$children.length - 1 &&
            this.selectedIndex === 0
          ) {
            reverse = false;
          }
          if (
            this.lastSelectedIndex === 0 &&
            this.selectedIndex === this.$children.length - 1
          ) {
            reverse = true;
          }
        }

        vm.reverse = reverse;
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.g-slides {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    display: flex;
      justify-content: center;
      align-items: center;
    padding: 10px 0;
    > span {
      width: 1.2em;
      height: 1.2em;
      padding: 8px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #ddd;
      margin: 0 0.5em;
      &:hover{
        cursor: pointer;
      }
      &.active {
        background: red;
        color: white;
        &:hover{
          cursor: default;
        }
      }
      
    }
  }
}
</style>


