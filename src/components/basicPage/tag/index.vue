<template>
  <span :class="`sl-tag sl-tag--${type} ${isRemover ? 'sl-zomm-in-center-leave' : ''}`">
    <slot></slot>
    <i v-if="closable" class="icon iconfont icon-cha sl-close" @click="handleClose"></i>
  </span>
</template>
<script>
export default {
  name: "index",
  data(){
    return {
      isRemover: false,
    }
  },
  props: {
    type: {
      type: String,
      default: 'light'
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  created(){
  },
  methods: {
    handleClose(){
      this.$emit('close')
      this.isRemover = true
    }
  }
}
</script>
<style scoped lang="scss">
  .sl-tag {
    box-sizing: border-box;
    display: inline-block;
    height: 32px;
    padding: 0 10px;
    font-size: 12px;
    line-height: 30px;
    color: #409eff;
    white-space: nowrap;
    background-color: #ecf5ff;
    border: 1px solid #d9ecff;
    border-radius: 4px;
    .sl-close:hover {
      color: #fff;
      background-color: #409eff;
    }
    &.sl-tag--success {
      color: #67c23a;
      background-color: #f0f9eb;
      border-color: #e1f3d8;
      .sl-close:hover {
        background-color: #67c23a;
      }
    }
    &.sl-tag--info {
      color: #909399;
      background-color: #f4f4f5;
      border-color: #e9e9eb;
      .sl-close:hover {
        background-color: #909399;
      }
    }
    &.sl-tag--warning {
      color: #e6a23c;
      background-color: #fdf6ec;
      border-color: #faecd8;
      .sl-close:hover {
        background-color: #e6a23c;
      }
    }
    &.sl-tag--danger {
      color: #f56c6c;
      background-color: #fef0f0;
      border-color: #fde2e2;
      .sl-close:hover {
        background-color: #f56c6c;
      }
    }
    .sl-close {
      position: relative;
      top: -1px;
      right: -5px;
      width: 16px;
      height: 16px;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      border-radius: 50%;
    }
  }

</style>