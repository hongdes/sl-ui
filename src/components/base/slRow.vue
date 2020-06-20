<template>
  <div class="sl-row" :style="{ 'margin-left': - gutter / 2 + 'px', 'margin-right': - gutter / 2 + 'px'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'row',
  data(){
    return {}
  },
  props: {
    gutter: { // 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。
      type: Number,
      default: 0
    },
  }
}
</script>
<style lang="scss" scoped>
  .sl-row {
    position: relative;
    box-sizing: border-box;
    &::before {
      content: '';
      display: table;
    }
  }
</style>