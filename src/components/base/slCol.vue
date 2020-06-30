<template slot-scope="{ gutter }">
  <div  :class="[ 'sl-col',  `sl-col-${span}`]" :style="{ 'padding-right': gutter ? gutter / 2 + 'px' : '' }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'slCol',
  data(){
    return {}
  },
  created(){
    console.log(this.gutter)
  },
  components: {},
  props: {
    span: Number | String,
    
  }
}
</script>
<style lang="scss" scoped>
  [class*=sl-col-] {
    float: left;
    box-sizing: border-box;
  }
  .sl-col-24 {
    width: 100%;
  }
  .sl-col-12 {
    width: 50%;
  }
  .sl-col-8 {
    width: 33.33333%;
  }
  .sl-col-6 {
    width: 25%;
  }
  .sl-col-4 {
    width: 16.66667%;
  }
</style>