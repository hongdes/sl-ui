<template>
  <div class="hello">
    <button @click="startRecord">开始</button>
    <button @click="stopRecord">停止</button>
    <div class="recpowerx" ref="recpowerx" style="height:40px;background:#0B1;position:absolute;"></div>
    <div class="recpowert" ref="recpowert" style="padding-left:50px; line-height:40px; position: relative;"></div>

    <div class="pd waveBox">
      <div style="height:100px;width:300px;border:1px solid #ccc;box-sizing: border-box;display:inline-block" class="recwave"></div>
      <input type="checkbox" ref="recwaveSet" class="recwaveSet" checked>
    </div>
  </div>
</template>

<script>
  // import Recorder from 'recorderx';
  import {Howl, Howler} from 'howler';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      rec: null,
      RandomKes: {
        idx: 0
      }
    }
  },
  mounted(){
    let _self = this
    let type = 'mp3',
      bit = 16, //kbps，越大音质越好
      sample = 16000 //hz，越大细节越丰富
    let wave, waveSet = this.$refs.recwaveSet.checked
    console.log(wave,waveSet)
    this.rec = Recorder({
      type: type
      ,bitRate: bit
      ,sampleRate: sample
      ,onProcess:function(buffers,level,time,sampleRate){
        console.log(buffers, level);
        // $(".recpowerx").css("width",level+"%");
        // _self.recpowerx.style.width = level + "%";
        // // $(".recpowert").html(time+"/"+level);
        // _self.recpowert.innerHTML = time + "/" + level;
        waveSet && wave.input(buffers[buffers.length-1],level,sampleRate);
      }
    });//使用默认配置，mp3格式
    this.rec.open(function(){
      console.log("已打开:" + type +" " + bit + "kbps");
      wave = Recorder.WaveView({elem: ".recwave"});
    },function(e,isUserNotAllow){
      console.log((isUserNotAllow ? "UserNotAllow，" : "") + "打开失败：" + e);
    });


    var sound = new Howl({
      src: ['../../static/rec_code.mp3'],
      sprite: {
        blast: [0, 3000],
        laser: [4000, 1000],
        winner: [6000, 5000]
      }
    });
    sound.play();

// Change global volume.
    Howler.volume(0.5);

  },
  created() {

  },
  methods: {
    start(){
      let that = this;
      this.$nextTick(function () {
        that.rc = new Recorder(true);
          console.log(that.rc)
        that.rc.start();
        //可以用下面的代码来边录音边听
        const audio = new Audio()
        audio.autoplay = true
        this.rc.start().then(stream => {
          audio.srcObject = stream
          console.log(stream)
        })
        .catch(error => alert(error));
      })

    },
    stop(){
      let that = this;
      this.$nextTick(() => {

        that.rc.pause()
        that.rc.close()
        console.log(that.getRecord())
      })
      // this.rc.close()

    },
    startRecord(){
      let _this = this
      this.rec.start();
    },
    stopRecord(){
      let _this = this
      _this.rec.stop(function(blob,duration){//到达指定条件停止录音
        console.log(URL.createObjectURL(blob),"时长:"+duration+"ms");
        _this.rec.close();//释放录音资源
        //已经拿到blob文件对象想干嘛就干嘛：立即播放、上传

        /*立即播放例子*/
        var audio=document.createElement("audio");
        audio.controls=true;
        document.body.appendChild(audio);
        //简单的一哔
        audio.src=URL.createObjectURL(blob);
        audio.play();

      },function(msg){
        console.log("录音失败:"+msg);
      });
    },
    RandomKey(){
      return "randomkey" + (this.RandomKes.idx ++);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
