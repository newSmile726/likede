<template>
  <el-dialog
    title="新增工单"
    :visible="isShow"
    width="41%"
    class="dialog-info"
  >
    <slot />
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('isShowFn')" class="navie"
        >取 消</el-button
      >
      <el-button type="primary" @click="$emit('isShowFn')" class="sure"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'MyDialog',
  data() {
    return {}
  },
  props:{
    isShow:{
      type:Boolean,
      required:true
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style scoped lang='scss'>
::v-deep .el-dialog__title {
  font-size: 16px;
  font-weight: 700;
  color: #333333;
}
::v-deep .el-form-item__label {
  font-weight: 400;
}
::v-deep .el-dialog {
  border-radius: 10px;
}
::v-deep .el-dialog__body {
  padding: 0 23px;
}
//按钮
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
