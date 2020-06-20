<template>
  <div class="home">
    <sl-row :gutter="20">
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
    </sl-row>
  </div>
</template>
<script>
import slRow from '@/components/base/slRow'
import slCol from '@/components/base/slCol'
export default {
  name: 'Index',
  data(){
    return {}
  },
  mounted(){},
  components: {
    slRow, slCol
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
</style>