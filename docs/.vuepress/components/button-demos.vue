<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings" icon-position="right">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <pre><code>{{contents}}</code></pre>
  </div>
</template>
<script>
import Button from "../../../src/button/button";
export default {
  components: {
    "g-button": Button
  },
  data() {
    return {
      contents: `<g-button >默认按钮</g-button>
<g-button icon="settings" icon-position="right">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
`
    };
  }
};
</script>