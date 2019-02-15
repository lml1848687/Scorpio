<template>
  <div>
    <p>{{selected&&selected[0]&&selected[0].name|| '空'}}</p>
    <p>{{selected&&selected[1]&&selected[1].name|| '空'}}</p>
    <p>{{selected&&selected[2]&&selected[2].name|| '空'}}</p>
    <div style="padding:20px">
      <g-cascader :source.sync="source" popover-height="200px" 
      :selected.sync="selected"
      :load-data="loadData"></g-cascader>
    </div>
  </div>
</template>

<script>
import Cascader from "./cascader";
import db from "./db";

// function ajax1(parentId = 0, success, fail) {
//   let id = setTimeout(() => {
//     let result = db.filter(item => item.parent_id == parentId);
//     success(result);
//   }, 3000);
//   return id;
// }

function ajax (parentId=0){
  return new Promise((success,fail)=>{
    setTimeout(() => {
      let result= db.filter(item => item.parent_id == parentId);
      success(result);
    }, 2000);
    
  })
}
export default {
  name: "demo",
  components: { "g-cascader": Cascader },
  data() {
    return {
      selected: [],
      source: []
    };
  },
  created(){
    // ajax1(0,(result)=>{
    //   this.source = result
    // })
    ajax(0).then((result)=>{
      this.source = result
    })
  },
  methods:{
    loadData(node,fn){
      let {name,id,parent_id} = node
      ajax(id).then(result =>{
        fn(result)
      })
    },
    xxx(){
      ajax(this.selected[0].id).then(result=>{        
        let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]        
        this.$set(lastLevelSelected,'children',result)
        console.log(lastLevelSelected)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  --font-size: 14px;
}
body {
  font-size: var(--font-size);
}
</style>