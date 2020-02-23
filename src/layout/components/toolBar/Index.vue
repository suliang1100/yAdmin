<template>
  <div class="tool-bar">
    <div class="toll-bar-collapse" @click="handleMenuCollapsesToggle">
      <i :class=" menuCollapseStatus ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </div>
    <Breadcrumb />
    <Avatar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from './Breadcrumb';
import Avatar from './Avatar';
export default {
  name: 'ToolBar',
  components: {
    Breadcrumb,
    Avatar
  },
  computed: {
    ...mapGetters([
      'menuCollapseStatus'
    ])
  },
  methods: {
    handleMenuCollapsesToggle(){
      this.$store.dispatch('toggleMenuStatus');
    }
  }
}
</script>
<style lang="scss" scoped>
.tool-bar{
  width: 100%;
  height: 64px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  overflow: hidden;
  position: relative;
  .toll-bar-collapse{
    display: block;
    float: left;
    height: 64px;
    line-height: 64px;
    margin: 0 10px;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>