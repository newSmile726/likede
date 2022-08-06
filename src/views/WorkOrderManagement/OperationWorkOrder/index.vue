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
          @click="isShow = true"
          >新建</el-button
        >
        <el-button plain class="oldfn" @click="isConfiguration = true"
          >工单配置</el-button
        >
      </div>
      <!-- 表单内容区域 -->
      <FromList
        :FormList="FormList"
        :AllJobTypes="AllJobTypes"
        :lableList="lableList"
      ></FromList>
      <!-- 表单分页按钮 -->
      <FooterButton></FooterButton>
    </div>
    <!-- 新增弹出层 -->
    <MyDialog :isShow="isShow" @isShowFn="isShow = false">
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
            class="sb-bianhao"
            type="textarea"
            :rows="2"
            autocomplete="off"
            placeholder="请输入备注（不超过40字）"
            maxlength="40"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
    </MyDialog>
    <!-- 工单配置弹出层 -->
    <ConfigGuration
      :isConfiguration="isConfiguration"
      @changeISShow="isConfiguration = false"
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
    </ConfigGuration>
  </div>
</template>
<script>
import SearchTitle from '@/components/SearchTitle'
import FromList from '@/components/FromList'
import MyDialog from '@/components/MyDialog'
import ConfigGuration from './components/ConfigGuration'
import FooterButton from '@/components/FooterButton'
import { GetAllJobTypesApi, SearchAllJobTypesApi } from '@/api'
export default {
  name: 'operation',
  components: { SearchTitle, FromList, MyDialog, ConfigGuration, FooterButton },
  data() {
    return {
      lableList: [
        { label: '工单编号', value: 'taskCode' },
        { label: '设备编号', value: 'innerCode' },
        { label: '工单类型', value: 'taskType.typeName' },
        { label: '工单方式', value: 'createType' },
        { label: '工单状态', value: 'taskStatusTypeEntity.statusName' },
        { label: '运营人员', value: 'userName' },
        { label: '创建日期', value: 'createTime' }
      ],
      label: { b1: '工单编号', b2: '工单状态' },
      FormList: [], //接收表单数据
      AllJobTypes: [], // 工单类型
      isShow: false, //控制新增弹出层
      isConfiguration: false, // 控制工单配置弹层
      num: 1, //补货警戒线
      form: {
        EquipmentNumber: '', //设备编号
        workordertype: '', //工单类型
        personnel: '', //运营人员
        resource: '' //备注
      }, //新增表单内容
      formLabelWidth: '120px'
    }
  },
  created() {
    this.GetAllJobTypes()
    this.SearchAllJobTypes()
  },
  mounted() {},
  computed: {},
  methods: {
    //补货警戒线事件
    handleChange(value) {
      console.log(value)
    },
    async GetAllJobTypes() {
      const res = await GetAllJobTypesApi()
      // console.log(res)
      this.AllJobTypes = res
    },
    async SearchAllJobTypes() {
      const res = await SearchAllJobTypesApi()
      // console.log(res)
      this.FormList = res.currentPageRecords
    }
  }
}
</script>
<style scoped lang="scss">
//新增按钮 工单配置按钮css样式
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
  width: 100%;
}

// 工单配置弹层css样式
.dialog-infos {
  span {
    margin-left: 40px;
  }
  .buhuo-denger {
    width: 100%;
    margin: 30px 10px;
  }
}
</style>
