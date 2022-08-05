<template>
  <div>
    <template>
      <el-table :data="FormList" style="width: 100%" class="table-info">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="taskCode" label="工单编号"></el-table-column>
        <el-table-column prop="innerCode" label="设备编号"> </el-table-column>
        <el-table-column prop="taskType.typeName" label="工单类型">
        </el-table-column>
        <el-table-column prop="createType" label="工单方式"> </el-table-column>
        <el-table-column
          prop="taskStatusTypeEntity.statusName"
          label="工单状态"
        >
        </el-table-column>
        <el-table-column prop="userName" label="运营人员"> </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建日期"
        >
        </el-table-column>
        <el-table-column prop="caozuo" label="操作">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 底部信息区域 -->
      <div class="bottom-feature">
        <div class="message">
          <span>共200条记录</span>
          <span>第1/95页</span>
        </div>
        <div class="paging-btn">
          <el-button type="info" plain :disabled="isShow">上一页</el-button
          ><el-button type="info" plain>下一页</el-button>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'FromListInfo',
  data() {
    return {
      isShow: true // 分页按钮禁用
    }
  },
  props: {
    FormList: {
      type: Array,
      required: true
    },
    AllJobTypes: {
      type: Array,
      required: true
    }
  },
  filters: {
    modeInfo(value) {
      //无效
      return value === 0 ? '自动' : '手动'
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
  }
}
</script>
<style scoped lang="scss">
//表单区域css样式
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
</style>
