<template>
  <div class="audio-player">
    <div class="play-pause-btn" @click="playAudio">
      <i class="icon iconfont icon-bofang" v-if="!playStatus"></i>
      <i class="icon iconfont icon-bofang1" v-else></i>
    </div>
    <div class="controls">
      <span class="controls__current-time">{{ currentTime }}</span>
      <div class="controls__slider slider" @click="jumpTime" ref="Slider">
        <div class="controls__progress progress" :style="{ width: progressWidth }">
          <span class="progress__pin"></span>
        </div>
      </div>
      <span class="controls__total-time">{{ audioDuration }}</span>
    </div>
    <div class="volume">
      <div class="volume_button" @click.stop="openVoume">
        <i class="icon iconfont icon-android-volume-up volume-icon" :class="{ 'openVolume': isOpenVoume }"></i>
      </div>
      <div class="volume__controls" :style="{ opacity: isOpenVoume ? 1 : 0 }">
        <div class="volume__slider" @click.stop="jumpVolume">
          <div class="volume__progress" :style="{ height: curVolumne * 100 + '%' }">
            <div class="volume__pin"></div>
          </div>
        </div>
      </div>
    </div>
    <audio :src="audioUrl" ref="audio" @canplay="getDuration"
     @play="ready" @error="error" @timeupdate="updateTime"
           @ended="ended"></audio>
           
  </div>
</template>
<script>
export default {
  name: "Index",
  data(){
    return {
      progressWidth: 0,
      audioUrl: require('./example-2.mp3'),
      playStatus: false,
      audioDuration: '00:00',
      currentTime: '00:00',
      isOpenVoume: false,
      curVolumne: 0
    }
  },
  created(){
    console.log(this.audioUrl)
  },
  methods: {
    jumpTime(e){
      // console.log(e)
      const audio = this.$refs.audio
      const w = this.$refs.Slider.offsetWidth
      const duration = this.$refs.audio.duration
      this.progressWidth = (e.offsetX / w) * 100 + '%'
      const currentTime = e.offsetX / w * duration
      console.log(currentTime)
      audio.currentTime = currentTime;
      audio.play();
    },
    ready(){
      console.log('kaishizhong')
    },
    error(){
      console.log('error')
    },
    updateTime(e){
      const curTime = e.target.currentTime;
      const duration = this.$refs.audio.duration
      let ch = Math.floor(curTime / 3600);
      let cm = Math.floor(curTime / 60);
      let cs = Math.floor(curTime % 60);

      //三目运算
      ch = ch < 0 ? "0" + ch : ch;
      cm = cm < 10 ? "0" + cm : cm;
      cs = cs < 10 ? "0" + cs : cs;
      this.currentTime = cm + ':' + cs
      this.progressWidth = (curTime / duration) * 100 + '%'
    },
    ended(){
      console.log('ended')
      this.playStatus = false
    },
    getDuration(){
      // console.log(this.$refs.audio.duration)
      const duration = this.$refs.audio.duration
      let ch = Math.floor(duration / 3600);
      let cm = Math.floor(duration / 60);
      let cs = Math.floor(duration % 60);

      //三目运算
      ch = ch < 0 ? "0" + ch : ch;
      cm = cm < 10 ? "0" + cm : cm;
      cs = cs < 10 ? "0" + cs : cs;
      this.audioDuration = cm + ':' + cs
    },
    playAudio(){
      const audio = this.$refs.audio
      if(!this.playStatus){
        audio.play()
        this.playStatus = true
      }else {
        audio.pause();
        this.playStatus = false
      }
    },
    openVoume(){
      this.isOpenVoume = !this.isOpenVoume
    },
    jumpVolume(e){

      console.log(e)
      const offsetY = e.offsetY
      const clientHeight = e.target.clientHeight
      const audio = this.$refs.audio
      this.curVolumne = 1 - offsetY / clientHeight
      audio.volume = this.curVolumne
    }
  }
}
</script>
<style scoped lang="scss">
  .audio-player {
    height: 56px;
    padding: 0 10px;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,.07);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .play-pause-btn {
      cursor: pointer;
    }
    .icon {
      color: rgb(86, 101, 116);
    }
    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 12px;
      margin-right: 12px;
      width: 100%;
      .controls__current-time, .controls__total-time {
        font-family: Roboto,sans-serif;
        font-size: 16px;
        line-height: 18px;
        color: #55606e;
      }
      .controls__current-time {
        width: 50px;
      }
      .controls__slider {
        height: 4px;
        background: #d8d8d8;
        border-radius: 4px;
        flex-grow: 1;
        position: relative;
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;
        .controls__progress {
          background: #44bfa3;
          border-radius: inherit;
          position: absolute;
          height: 100%;
          left: 0;
          top: 0;
          // transition: width .8s;
          .progress__pin {
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 100%;
            pointer-events: all;
            box-shadow: 0 1px 1px 0 rgba(0,0,0,.32);
            right: -8px;
            top: -6px;
            background-color: #44bfa3;
          }
        }
      }
    }
    .volume {
      position: relative;
      .volume-icon {
        font-size: 24px;
        cursor: pointer;
        &.openVolume {
          color: #44bfa3;
        }
      }
      .volume__controls {
        width: 30px;
        height: 135px;
        background-color: rgba(0,0,0,.62);
        border-radius: 7px;
        position: absolute;
        display: flex;
        align-items: center;
        bottom: 32px;
        left: -3px;
        flex-direction: column;
        .volume__slider {
          margin-top: 12px;
          margin-bottom: 12px;
          width: 6px;
          border-radius: 3px;
          position: relative;
          flex-grow: 1;
          background-color: #d8d8d8;
          cursor: pointer;
          .volume__progress {
            position: absolute;
            border-radius: inherit;
            width: 100%;
            bottom: 0;
            background-color: #44bfa3;
            pointer-events: none;
            .volume__pin {
              height: 16px;
              width: 16px;
              border-radius: 8px;
              background-color: #44bfa3;
              position: absolute;
              pointer-events: all;
              box-shadow: 0 1px 1px 0 rgba(0,0,0,.32);
              left: -5px;
              top: -8px;
            }
          }
        }
      }
    }
  }
</style>