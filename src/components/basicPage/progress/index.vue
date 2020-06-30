<template>
  <div>
    <div role="progressbar" class="sl-progress" v-if="type === 'line'">
      <div class="sl-progress-bar">
        <div class="sl-progress-bar__outer" :style="{ height: strokeWidth + 'px' }">
          <div class="sl-progress-bar__inner" :style="{ backgroundColor: color, width: percentage + '%' }"></div>
        </div>
      </div>
      <span class="sl-progress_text" v-if="format" v-html="format"></span>
    </div>
    <div role="progressbar" class="sl-progress" v-if="type === 'circle'">
      <div class="el-progress-circle" :style="{ width: width + 'px', height: width + 'px' }">
        <svg viewBox="0 0 100 100"> 
         <path d="
        M 50 50
        m 0 -47
        a 47 47 0 1 1 0 94
        a 47 47 0 1 1 0 -94
        " stroke-width="4.8" stroke="#e5e9f2" fill="none"/>
        <path d="
        M 50 50
        m 0 -47
        a 47 47 0 1 1 0 94
        a 47 47 0 1 1 0 -94
        " stroke="#e6a23c" fill="none" stroke-linecap="round" stroke-width="4.8"
        style="stroke-dasharray: 206.717px, 295.31px; stroke-dashoffset: 0px; transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s;"></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data(){
    return{}
  },
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 126
    },
    format: {//表示进度条文字 内容
      type: String,
      default: ''
    },
    type: { //进度条类型  line/circle/dashboard
      type: String,
      default: 'line'
    },
    color: {
      type: String,
      default: '#f56c6c'
    },
    strokeWidth: {
      type: Number,
      default: 6
    }
  }
}
</script>
<style scoped lang="scss">
  .sl-progress {
    position: relative;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    line-height: 1;
    .sl-progress-bar {
      flex-grow: 1;
      padding-right: 10px;
      vertical-align: middle;
      .sl-progress-bar__outer {
        position: relative;
        overflow: hidden;
        vertical-align: middle;
        background-color: #ebeef5;
        border-radius: 100px;
        .sl-progress-bar__inner {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: inherit;
        }
      }
    }
    .sl-progress_text {
      font-size: 14px;
      color: #606266;
    }
  }

</style>