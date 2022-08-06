<template>
  <div class="bottom-feature">
    <div class="message">
      <span>共200条记录</span>
      <span>第1/95页</span>
    </div>
    <div class="paging-btn">
      <el-button type="info" plain>上一页</el-button
      ><el-button type="info" plain>下一页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style scoped lang="scss">
.bottom-feature {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px;
  .message {
    font-size: 16px;
    color: #dbdfe5;
    span {
      margin: 0 5px;
    }
  }
  .paging-btn {
    .el-button {
      background-color: #d5ddf8;
      color: #000;
    }
  }
}
</style>
