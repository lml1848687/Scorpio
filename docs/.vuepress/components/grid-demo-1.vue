<template>
  <div style="padding-top: 16px;">
    <s-row class="demoRow">
      <s-col span="8">
        <div class="demoCol">8</div>
      </s-col>
      <s-col span="8">
        <div class="demoCol">8</div>
      </s-col>
      <s-col span="8">
        <div class="demoCol">8</div>
      </s-col>
    </s-row>
    <s-row class="demoRow">
      <s-col span="6">
        <div class="demoCol">6</div>
      </s-col>
      <s-col span="6">
        <div class="demoCol">6</div>
      </s-col>
      <s-col span="6">
        <div class="demoCol">6</div>
      </s-col>
      <s-col span="6">
        <div class="demoCol">6</div>
      </s-col>
    </s-row>
    <s-row class="demoRow">
      <s-col span="4">
        <div class="demoCol">4</div>
      </s-col>
      <s-col span="4">
        <div class="demoCol">4</div>
      </s-col>
      <s-col span="4">
        <div class="demoCol">4</div>
      </s-col>
      <s-col span="4">
        <div class="demoCol">4</div>
      </s-col>
      <s-col span="4">
        <div class="demoCol">4</div>
      </s-col>
      <s-col span="4">
        <div class="demoCol">4</div>
      </s-col>
    </s-row>
    <s-row class="demoRow">
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
      <s-col span="2">
        <div class="demoCol">2</div>
      </s-col>
    </s-row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import SRow from "../../../src/grid/row";
import SCol from "../../../src/grid/col";

export default {
  components: { SRow, SCol },
  data() {
    return {
      content: `
          * {
            box-sizing: border-box;
          }

          <s-row class="demoRow">
            <s-col span="8">
              <div class="demoCol">8</div>
            </s-col>
            <s-col span="8">
              <div class="demoCol">8</div>
            </s-col>
            <s-col span="8">
              <div class="demoCol">8</div>
            </s-col>
          </s-row>

          <s-row class="demoRow">
            <s-col span="6">
              <div class="demoCol">6</div>
            </s-col>
            <s-col span="6">
              <div class="demoCol">6</div>
            </s-col>
            <s-col span="6">
              <div class="demoCol">6</div>
            </s-col>
            <s-col span="6">
              <div class="demoCol">6</div>
            </s-col>
          </s-row>

          <s-row class="demoRow">
            <s-col span="4">
              <div class="demoCol">4</div>
            </s-col>
            <s-col span="4">
              <div class="demoCol">4</div>
            </s-col>
            <s-col span="4">
              <div class="demoCol">4</div>
            </s-col>
            <s-col span="4">
              <div class="demoCol">4</div>
            </s-col>
            <s-col span="4">
              <div class="demoCol">4</div>
            </s-col>
            <s-col span="4">
              <div class="demoCol">4</div>
            </s-col>
          </s-row>

          <s-row class="demoRow">
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
            <s-col span="2">
              <div class="demoCol">2</div>
            </s-col>
          </s-row>
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>