<template>
  <div class="container" :class="{'isCollapseMenu': menuCollapseStatus}">
    <div class="sidebar-container">
      <SideBar />
    </div>
    <div class="main-container">
      <ToolBar />
      <Content />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ToolBar from './components/toolBar/Index'
import Content from './components/Content'
import SideBar from './components/sideBar/SideBar'
export default {
  name: 'Layout',
  components: {
    ToolBar,
    SideBar,
    Content
  },
  computed: {
    ...mapGetters([
      'menuCollapseStatus'
    ])
  },
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.container, .sidebar-container ,.main-container{
  height: 100%;
  overflow: hidden;
}
.container{
  width: 100%;
}
.sidebar-container{
  position: fixed;
  top: 0;
  left: 0;
  width: $sideBarWidth;
  height: 100%;
  background: $themeColor;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
}
.main-container{
  margin-left: $sideBarWidth;
}
.isCollapseMenu{
  .sidebar-container{
    width: $collapseSideBarWidth;
    transition: 0.2s;
  }
  .main-container{
    margin-left: $collapseSideBarWidth;
    transition: 0.2s;
  }
}
</style>
