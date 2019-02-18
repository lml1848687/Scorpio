<template>
  <div class="wrapper">
    <g-slides :selected.sync="selected">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>
  </div>
</template>

<script>
import GSlides from "./slides";
import GSlidesItem from './slides-item';
export default {
  name: "demo",
  components: { GSlides ,GSlidesItem},
  data(){
    return{
      selected:'3'
    }
  },
  created(){

  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  margin: 20px;
}
.box {
  width: 100%;
  height: 150px;
  background: #ddd;
  border: 1px solid red;
}
// html {
//   --font-size: 14px;
// }
// body {
//   font-size: var(--font-size);
// }
</style>