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
          @click="dialogFormVisible = true"
          >新建</el-button
        >
        <el-button plain class="oldfn" @click="dialogFormVisibles = true"
          >工单配置</el-button
        >
      </div>
      <!-- 新建弹出层 -->
      <el-dialog
        title="新增工单"
        :visible.sync="dialogFormVisible"
        width="41%"
        class="dialog-info"
      >
        <el-form :model="form">
          <el-form-item label="设备编号" :label-width="formLabelWidth">
            <el-input
              v-model="form.EquipmentNumber"
              class="sb-bianhao"
              autocomplete="off"
              placeholder="请输入"
              maxlength="15"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item label="工单类型" :label-width="formLabelWidth">
            <el-select
              v-model="form.workordertype"
              placeholder="请选择"
              class="sb-bianhao"
            >
              <el-option label="补货工单" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="补货数量" :label-width="formLabelWidth">
            <i>补货清单</i>
          </el-form-item>
          <el-form-item label="运营人员" :label-width="formLabelWidth">
            <el-select
              v-model="form.personnel"
              placeholder="请选择"
              class="sb-bianhao"
            >
              <el-option label="无数据" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input
              v-model="form.resource"
              class="bz-bianhao"
              type="textarea"
              :rows="2"
              autocomplete="off"
              placeholder="请输入备注（不超过40字）"
              maxlength="40"
              show-word-limit
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false" class="navie"
            >取 消</el-button
          >
          <el-button
            type="primary"
            @click="dialogFormVisible = false"
            class="sure"
            >确 定</el-button
          >
        </div>
      </el-dialog>

      <!-- 工单配置弹出层 -->
      <el-dialog
        title="工单配置"
        :visible.sync="dialogFormVisibles"
        width="41%"
        class="dialog-infos"
        >
        <span>补货警戒线：</span>
        <template>
          <el-input-number
            v-model="num"
             class="buhuo-denger"
            controls-position="right"
            @change="handleChange"
            :min="1"
            :max="60"
          ></el-input-number>
        </template>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibles = false" class="navie"
            >取 消</el-button
          >
          <el-button
            type="primary"
            @click="dialogFormVisibles = false"
            class="sure"
            >确 定</el-button
          >
        </div>
      </el-dialog>

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
            <el-button type="info" plain disabled="isdisabled">上一页</el-button
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
      isdisabled: true, // 分页按钮禁用
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
      ],
      dialogTableVisible: false, //控制新增弹出层
      dialogTableVisibles: false, //控制工单配置弹出层
      dialogFormVisible: false, // 关闭新增弹层
      dialogFormVisibles: false, // 关闭工单配置弹层
      num: 1, //补货警戒线
      form: {
        EquipmentNumber: '', //设备编号
        workordertype: '',  //工单类型
        personnel:'', //运营人员
        resource: '', //备注
      }, //新增表单内容
      formLabelWidth: '120px'
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    //补货警戒线事件
    handleChange(value) {
      console.log(value)
    }
  }
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
// 新建弹出层css样式
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
.sb-bianhao {
  width: 396px;
}
.bz-bianhao {
  width: 396px;
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
// 工单配置弹层css样式
.dialog-infos{
  span{
    margin-left: 40px;
  }
.buhuo-denger{
  width: 396px;
  margin:30px 10px 
}
}

</style>
