<template>
  <div class="ch-topbar">
    <a href="javascript:;">
      <div class="logo">
        <i></i>
      </div>
    </a>
    <div class="navs">
      <a href="javascript:;" class="item" v-for="item in list">
        {{item.name}}
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    name: "HeaderBox",
    data(){
      return{
        list: [
          {name: '首页', index: ''},
          {name: '产品服务', index: ''},
          {name: '服务案例', index: ''},
          {name: '产品体验', index: ''},
          {name: '渠道代理', index: ''},
          {name: '关于我们', index: ''},
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
  .ch-topbar {
    display: flex;
    align-items: center;
    position: absolute;
    align-content: center;
    left: 0;
    top: 47px;
    width: 100%;
    a {
      .logo {
        margin-left: 72px;
        i {
          width: 125px;
          height: 46px;
          background-image: url("../assets/img/logos.png");
          display: inline-block;
        }

      }
    }
    .navs {
      text-align: center;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      a.item {
        display: inline-block;
        margin: 12px 0 10px;
        min-width: 100px;
        text-align: center;
        color: #fff;
      }
    }
  }
</style>
