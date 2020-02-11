<template>
  <div class="tool-bar">
    <Breadcrumb />
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb';
export default {
  name: 'ToolBar',
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
