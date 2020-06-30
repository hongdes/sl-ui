<template>
  <div class="mtEditor">
    <h3 class="title">公式编辑器</h3>
    <div class="widget span6">
      <div class="widget-title"></div>
      <div class="widget-body">
        <div class="meditor-content">
          <div class="input-area editor" id="editor"></div>
        </div>
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mtEditor",
  data(){
    return {}
  },
  mounted(){
    const btns = new window.Formular({  subjectId: 2, stage: 40 });
    console.log(btns)
    const editor = new window.MtEditor({
      id:'editor',
      tabs: [],
      btns: btns
    }, function () {
     console.log(editor.answerMathField.latex())
    })
  }
}
</script>
<style scoped lang="scss">
  .mtEditor {
    .title {
      margin: 13px 0 8px;
      font-family: myriadpro-light;
      font-size: 24px;
      font-weight: 400!important;
    }
    .meditor-content {
      min-height: 80px;
      padding-right: 10px;
      padding-left: 10px;
      cursor: pointer;
      border: 1px solid #030303;
    }
    .input-area {
      width: 100%;
      min-height: 80px;
    }
  }

</style>