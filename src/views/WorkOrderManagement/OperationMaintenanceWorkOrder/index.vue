<template>
  <div>
    <!-- 头部搜索 -->
    <SearchTitle :label="label"></SearchTitle>
    <!-- 表单区域 -->
    <div class="form-fields">
      <div class="bar-btn">
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          class="newfn"
          @click="isShowDialog = true"
          >新建</el-button
        >
      </div>
      <MyDialog :isShow='isShowDialog' @isShowFn="isShowDialog = false"> 
        <span>表单内容</span>
      </MyDialog>
      <!-- 表单内容区域 -->
      <FromList></FromList>
    </div>
  </div>
</template>
<script>
import SearchTitle from '@/components/SearchTitle'
import FromList from '@/components/FromList'
import MyDialog from '@/components/MyDialog'
export default {
  name: '',
  components: { SearchTitle, FromList, MyDialog },
  data() {
    return {
      label: { b1: '工单编号', b2: '工单状态' },
      isShowDialog: false, //控制新增弹出层
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style scoped lang="scss">
// 搜索区域css样式
.box-card {
  height: 64px;
  margin: 15px 0;
  line-height: 64px;
  padding-left: 15px;
  background-color: #fff;
  color: #606266;
  .messageInfo {
    width: 119px;
    margin-right: 15px;
  }
  .message-col {
    margin-left: 15px;
  }
  .btnFn {
    margin-left: 8px;
  }
  .el-button--primary {
    background-color: #5f84ff;
  }
}
::v-deep .el-card__body {
  padding: 0;
}
//表单区域css样式
.form-fields {
  padding: 20px 15px 19px 17px;
  background-color: #fff;
  .bar-btn {
    margin-bottom: 20px;
    .newfn {
      width: 80px;
      height: 36px;
      font-size: 14px;
      padding: 0;
      background-color: #ff6927;
      border: 1px solid #ff6927;
    }
    .oldfn {
      width: 80px;
      height: 36px;
      padding: 0;
      background-color: #fbf4f0;
    }
  }
  ::v-deep.el-table th {
    background-color: #f3f6fb;
    font-size: 14px;
    color: #666666;
    font-weight: 400;
  }
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
}
</style>
