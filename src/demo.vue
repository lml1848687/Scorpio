<template>
  <div>
    <s-button icon="settings">测试一下</s-button>
  </div>
</template>
<script>
import Button from "./button/button";
export default {
  components: {
    "s-button": Button
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>