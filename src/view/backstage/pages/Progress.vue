<template>
  <div class="progress">
    <h3 class="title">进度条</h3>
    <div class="widget span6">
      <div class="widget-title">
        <span>线性进度条</span>
      </div>
      <div class="widget-body">
        <sl-progress class="progress-bar" :percentage="20" :format="format"></sl-progress>
        <sl-progress class="progress-bar" :percentage="percentage" :format="format1" :color="color1"></sl-progress>
       
      </div>
    </div>
    <div class="widget span6">
      <div class="widget-title">
        <span>圆环进度条</span>
      </div>
      <div class="widget-body">
        <sl-progress class="progress-bar" :percentage="20" :format="format" type="circle" :width="200"></sl-progress>
        
       
      </div>
    </div>
  </div>
</template>
<script>
import slProgress from "@/components/basicPage/progress"
export default {
  name: "Progress",
  components: {
    slProgress
  },
  data(){
    return {
      format: "20%",
      format1: '70%',
      percentage: 70,
      color1: '#6f7ad3'
    }
  }
}
</script>

<style scoped lang="scss">
  .progress {
    .progress-bar {
      margin-bottom: 30px;
    }
  }

</style>