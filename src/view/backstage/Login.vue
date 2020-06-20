<template>
  <div class="login-page">
    <div class="page-content"></div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data(){
    return {}
  },
  mounted(){},
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .login-page {
    position: relative;
    z-index: 10;
    min-height: 540px;
    height: 100%;
    overflow: hidden;
    &:before {
      position: fixed;
      width: 100%;
      height: 100%;
      background-image: url('~@/assets/images/login.jpg');
      background-size: cover;
      background-position: center top;
      left: 0;
      content: '';
      z-index: -1;

    }
  }
</style>