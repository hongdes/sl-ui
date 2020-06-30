<template>
  <div class="main-content">
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data(){
    return {}
  }
}
</script>
<style scoped lang="scss">
  .main-content {
    flex: 1;
    background: #f7f7f7 url(./images/body-bg.png);
    box-shadow: 0 0 10px #757575;
    .container-fluid {
      padding-right: 20px;
      padding-left: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }

</style>