<template>
  <div class="voice">
    <h3 class="title">音频播放器组件</h3>
    <div class="widget span6">
      <div class="widget-title"></div>
      <div class="widget-body">
        <Audio />
      </div>
    </div>
  </div>
</template>
<script>
import Audio from '@/components/basicPage/audio'
export default {
  name: "Voice",
  data(){
    return {}
  },
  components: {
    Audio
  }
}
</script>
<style scoped lang="scss">
  .voice {
    h3.title {
      font-weight: 400!important;
      margin: 13px 0 8px;
      font-family: myriadpro-light;
      font-size: 24px;
    }
    
  }
</style>