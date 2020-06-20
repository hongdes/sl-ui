<template>
  <div class="ch-banner">
    <header-box></header-box>
  </div>
</template>

<script>
  import HeaderBox from '@/components/HeaderBox'
  export default {
    name: "BannerBox",
    components: {
      HeaderBox,
    }
  }
</script>

<style scoped lang="scss">
  .ch-banner {
    height: 520px;
    position: relative;
    width: 100%;
  }
</style>
