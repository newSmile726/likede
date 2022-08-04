<template>
  <div>
    <!-- 头部搜索 -->
    <div class="box-card">
      <el-row type="flex">
        <el-col :span="10">
          <el-row type="flex">
            <span class="messageInfo">工单编号:</span>
            <el-input v-model="WorkOrderNo" placeholder="请输入"> </el-input>
          </el-row>
        </el-col>

        <el-col class="message-col"
          >工单状态:
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
    <!-- 表单区域 -->
    <div class="form-fields">
      <div class="bar-btn">
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          class="newfn"
          >新建</el-button
        >
      </div>

      <template>
        <el-table :data="tableData" style="width: 100%" class="table-info">
          <el-table-column prop="date" label="序号"></el-table-column>
          <el-table-column prop="name" label="工单编号"></el-table-column>
          <el-table-column prop="address" label="设备编号"> </el-table-column>
          <el-table-column prop="address" label="工单类型"> </el-table-column>
          <el-table-column prop="address" label="工单方式"> </el-table-column>
          <el-table-column prop="address" label="工单状态"> </el-table-column>
          <el-table-column prop="address" label="运营人员"> </el-table-column>
          <el-table-column prop="address" label="创建日期"> </el-table-column>
          <el-table-column prop="caozuo" label="操作"> </el-table-column>
        </el-table>

        <div class="bottom-feature">
          <div class="message">
           <span>共200条记录</span>
           <span>第1/95页</span>
          </div>
          <div class="paging-btn">
            <el-button type="info" plain disabled='isdisabled'>上一页</el-button
            ><el-button type="info" plain>下一页</el-button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      isdisabled:true, // 分页按钮禁用
      WorkOrderNo: '', // 工单编号
      orderStatus: '', // 工单状态
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          caozuo: '查看详情'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          caozuo: '查看详情'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          caozuo: '查看详情'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          caozuo: '查看详情'
        }
      ],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
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
    .message{
      font-size: 16px;
      color: #DBDFE5;
      span{
        margin: 0 5px;
      }
    }
    .paging-btn{
      .el-button{
        background-color: #D5DDF8;
        color: #000;
      }
    }
  }
}
</style>
