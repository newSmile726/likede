<template>
  <el-dialog
    title="工单配置"
    :visible="isConfiguration"
    width="41%"
    class="dialog-infos"
  >
  <!-- //内容区域插槽 -->
   <slot/>  
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('changeISShow')" class="navie"
        >取 消</el-button
      >
      <el-button type="primary" @click="$emit('changeISShow')" class="sure"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'ConfigGuration',
  data() {
    return {}
  },
  props:{
    isConfiguration:{
        type:Boolean,
        required: true
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style scoped lang='scss'>
//底部按钮
.dialog-footer {
  text-align: center;
  .navie {
    background-color: #fbf4f0;
    margin: 0 10px;
    height: 36px;
  }
  .sure {
    height: 36px;
    margin: 0 10px;
    background-color: #ff8136;
    border: 1px solid #ff8136;
  }
}
</style>
