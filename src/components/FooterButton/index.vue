<template>
  <div class="bottom-feature">
    <div class="message">
      <span>共{{ TotalData.totalCount }}条记录</span>
      <span>第{{ TotalData.pageIndex }}/{{ total }}页</span>
    </div>
    <div class="paging-btn">
      <el-button
        type="info"
        plain
        @click="previouspage"
        :disabled="isshowDisabled"
        >上一页</el-button
      ><el-button type="info" plain @click="nextpage">下一页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {}
  },
  props: {
    TotalData: {
      type: Object,
      required: true
    },
    pageIndex: {
      type: Number,
      required: true
    }
  },
  created() {},
  mounted() {},
  computed: {
    total() {
      //总共多少页
      return Math.floor(this.TotalData.totalCount / this.TotalData.pageSize)
    },
    isshowDisabled() {
      return this.pageIndex === 1 ? true : false
    }
  },
  methods: {
    nextpage() {
      this.$emit('addPageIndex')
      const page = {
        pageIndex: this.pageIndex
      }
      this.$emit('nextpage', page)
    },
    previouspage() {
      this.$emit('reducePageIndex')
      const page = {
        pageIndex: this.pageIndex
      }
      this.$emit('nextpage', page)
    }
  }
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
