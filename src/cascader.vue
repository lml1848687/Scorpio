<template>
	<div class="cascader">
		<div class="trigger" @click="popoverVisible=!popoverVisible">
      {{result|| '\&nbsp;'}}
		</div>
		<div class="popover-wrapper" v-if="popoverVisible">
			<cascader-items 
      :items="source" class="popover" 
      :height="popoverHeight" 
      :selected="selected"
      @update:selected="onUpdateSelected"></cascader-items>
		</div>
	</div>
</template>

<script>
  import CascaderItems from './cascader-items'

  export default {
    name: 'GuluCascader',
    components: {CascaderItems},
    props: {
      source: {
        type: Array
      },
			popoverHeight:{
        type:String
      },
      selected:{
        type: Array,
        default:()=>{return []}
      }
    },
    data() {
      return {
        popoverVisible: false,
        level1Selected:null,
        level2Selected:null
      }
    },
    computed:{
      result(){
        return this.selected.map((item)=>item.name).join('/')
      }
    },
    methods:{
      onUpdateSelected(newSelected){
        this.$emit('update:selected',newSelected)
      }
    }
  }
</script>

<style scoped lang="scss">
	@import "var";

	.cascader {
		position: relative;
		.trigger {
			height: $input-height;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
      min-width: 10em;
			border: 1px solid $border-color;
      border-radius: $border-radius;
		}

		.popover-wrapper {
			position: absolute;
      top: 100%;
      margin-top: 8px;
			left: 0;
			background: white;
			display: flex;
			@extend .box-shadow;
			.label {
				white-space: nowrap;
			}
		}
	}
</style>