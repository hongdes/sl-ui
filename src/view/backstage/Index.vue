<template>
  <div class="home">
    <!-- <sl-row :gutter="20">
      <sl-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
      </sl-col>
      <sl-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
      </sl-col>
      <sl-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
      </sl-col>
      <sl-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
      </sl-col>
    </sl-row> -->

    <Header></Header>
    <div class="container row-fluid">
      <Slider></Slider>
      <Main></Main>
    </div>
  </div>
</template>
<script>
// import slRow from '@/components/base/slRow'
// import slCol from '@/components/base/slCol'
import Header from '@/components/basicPage/Header'
import Slider from '@/components/basicPage/Slider'
import Main from '@/components/basicPage/Main'
export default {
  name: 'Index',
  data(){
    return {}
  },
  mounted(){
    console.log("Index__")
  },
  components: {
    // slRow, slCol,
    Header, Slider, Main
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
    .grid-content {
      min-height: 32px;
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .home {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #32c2cd url("~@/components/basicPage/images/bg-default.jpg")!important;
      .row-fluid {
        display: flex;
        width: 100%;
        // margin-top: 60px;
      }
    }

</style>
<style lang="scss">
  @import "@/assets/css/common.scss";


</style>