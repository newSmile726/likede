<template>
  <div>
    <template>
      <el-table :data="FormList" style="width: 100%" class="table-info">
        <el-table-column
          type="index"
          label="序号"
          min-width="100"
        ></el-table-column>
        <el-table-column
          v-for="(item, index) in lableList"
          :key="index"
          :prop="item.value"
          :label="item.label"
          min-width="100"
        >
        </el-table-column>
        <el-table-column label="操作" min-width="100">
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
    </template>
  </div>
</template>
<script>
export default {
  name: 'FromListInfo',
  data() {
    return {}
  },
  props: {
    FormList: {
      type: Array,
      required: true
    },
    //标头对象
    lableList: {
      type: Array,
      required: true
    }
  },
  created() {},
  mounted() {},
  updated() {
    this.FormList.forEach((item) => {
     (item.createTime = item.updateTime.replace('T', ' ')),
        (item.createType = ['自动', '手动'][item.createType])
    })
  },
  computed: {},
  methods: {}
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
</style>
