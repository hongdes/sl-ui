<template>
  <div class="tag">
    <h3 class="title">Tag 标签</h3>
    <div class="widget span6">
      <div class="widget-title">基础用法</div>
      <div class="widget-body"> 
        <sl-tag>标签一</sl-tag>
        <sl-tag type="success">标签二</sl-tag>
        <sl-tag type="info">标签三</sl-tag>
        <sl-tag type="warning">标签四</sl-tag>
        <sl-tag type="danger">标签五</sl-tag>
      </div>
    </div>
    <div class="widget span6">
      <div class="widget-title">可移除标签</div>
      <div class="widget-body"> 
        <sl-tag closable>标签一</sl-tag>
        <sl-tag closable type="success">标签二</sl-tag>
        <sl-tag closable type="info">标签三</sl-tag>
        <sl-tag closable type="warning">标签四</sl-tag>
        <sl-tag closable type="danger">标签五</sl-tag>
      </div>
    </div>

    <div class="widget span6">
      <div class="widget-title">动态编辑标签</div>
      <div class="widget-body"> 
        <sl-tag 
        :key="tag" 
        v-for="tag in list" 
        closable 
        @close="handleClose(tag)">{{ tag }}</sl-tag>
        
      </div>
    </div>
  </div>
</template>
<script>
import slTag from "@/components/basicPage/tag"
export default {
  name: "Tag",
  data(){
    return {
      list: ['标签一', '标签二', '标签三']
    }
  },
  components: {
    slTag
  },
  props: {
    
  },
  methods: {
    handleClose(tag){
      this.list.splice(this.list.indexOf(tag), 1);
    }
  }
}
</script>