<template>
  <div class="box-card">
    <el-row type="flex">
      <el-col :span="10">
        <el-row type="flex">
          <span class="messageInfo">{{label.b1}}:</span>
          <el-input v-model="WorkOrderNo" placeholder="请输入"> </el-input>
        </el-row>
      </el-col>

      <el-col class="message-col"
        >{{label.b2}}:
        <template>
          <el-select v-model="orderStatus" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
        <el-button type="primary" icon="el-icon-search" class="btnFn"
          >查询</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'SearchTitle',
  data() {
    return {
      WorkOrderNo: '', // 工单编号
      orderStatus: '', // 工单状态
      options: [
        {
          value: '选项1',
          label: '待办'
        },
        {
          value: '选项2',
          label: '进行'
        },
        {
          value: '选项3',
          label: '取消'
        },
        {
          value: '选项4',
          label: '完成'
        }
      ]
    }
  },
  props:{
    label:{
      type: Object,
      required: true
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
</style>
