<template>
  <div class="header navbar">
    <div class="navbar-inner">
      <div class="inner-fluid">
        <a class="brand" href="javascript;">SLUI-LAB</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data(){
    return {}
  }
}
</script>
<style scoped lang="scss">
  .navbar {
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    padding: fixed;
    .navbar-inner {
      height: 60px;
      // background-image: -webkit-gradient(linear,0 0,0 100%,from(#222),to(#111));
      background: #4e4e4e url("./images/top-bg.jpg") repeat-x !important;
      box-shadow: 0 1px 10px rgba(0,0,0,.1);
      .inner-fluid {
        display: flex;
        align-items: center;
        height: 60px;
        padding: 0 20px;
        .brand {
          flex: 0 0 auto;
          width: 144px;
          height: 60px;
          padding: 0 35.5px;
          margin-left: -20px;
          font-family: myriadpro-light;
          font-size: 28px;
          font-weight: 400;
          line-height: 60px;
          background: #333;
          // background: #333;
        }
      }
    }
  }

</style>