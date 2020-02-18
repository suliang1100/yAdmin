<template>
  <div class="tool-bar">
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <Breadcrumb />
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb';
export default {
  name: 'ToolBar',
  data(){
    return {
      isCollapse: false
    }
  },
  components: {
    Breadcrumb
  }
}
</script>
<style lang="scss" scoped>
.tool-bar{
  width: 100%;
  height: 64px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
</style>
