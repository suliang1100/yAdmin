<template>
  <div class="menu">
    <el-menu
      class="side-menu"
      :class="{'isCollapse': menuCollapseStatus}"
      background-color="#001529"
      text-color="#f0f2f5"
      active-text-color="#ffd04b"
      :collapse="menuCollapseStatus"
    >
      <div v-for="(item, index) in routes" :key="index">
        <el-submenu :index="index.toString()" v-if="item.children">
            <template slot="title">
              <i class="iconfont" :class="item.icon"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item 
              v-for="(child, childIndex) in item.children" 
              :key="index + '-' + childIndex" 
              :index="index + '-' + childIndex"
              @click="handleLink(child)"
            >
              <span>{{child.name}}</span>
            </el-menu-item>
        </el-submenu>
        <el-menu-item :index="index.toString()" @click="handleLink(item)" v-else>
          <i class="iconfont" :class="item.icon"></i>
          <template slot="title" >
            <span>{{item.name}}</span>
          </template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Menu',
  computed: {
    routes(){
      return this.$router.options.routes[0].children;
    },
    ...mapGetters([
      'menuCollapseStatus'
    ])
  },
  methods: {
    handleLink(route){
      if(route.path !== this.$route.path) {
        this.$router.push(route.path)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.menu{
    padding: 10px 0;
    .side-menu{
      border: none;
      i{
        color: #f0f2f5;
        margin-right: 20px;
        font-size: 14px;
      }
    }
    .el-menu--collapse{
      width: $collapseSideBarWidth;
    }
}
</style>
<style lang="scss">
.menu{
  .isCollapse{
    .el-icon-arrow-right{
      display: none;
    }
    .iconfont{
      font-size: 18px !important;
      transition: 0.1s;
    }
  }
}
</style>
