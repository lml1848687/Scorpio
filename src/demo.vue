<template>
  <div>
    <s-button>默认按钮</s-button>
    <s-button icon="settings" icon-position="right">默认按钮</s-button>
    <s-button :loading="loading" @click="loading=!loading">默认按钮</s-button>
    <s-button disabled>默认按钮</s-button>
    <s-button-group>
      <s-button icon="left">上一页</s-button>
      <s-button icon="right" icon-position="right">下一页</s-button>
    </s-button-group>
  </div>
</template>
<script>
import Button from "../src/button/button";
import ButtonGroup from "../src/button/button-group";

export default {
  name: "demo",
  components: { "s-button": Button, "s-button-group": ButtonGroup },
  data() {
    return {
      loading: true
    };
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