<template>
  <div class="menu">
    <el-menu
    class="side-menu"
      background-color="#001529"
      text-color="#f0f2f5"
      active-text-color="#ffd04b"
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
          <template slot="title" >
            <i class="iconfont" :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    routes(){
      return this.$router.options.routes[0].children;
    }
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
.menu{
    padding: 10px 0;
    .side-menu{
      border: none;
      i{
        color: #f0f2f5;
        margin-right: 10px;
        font-size: 14px;
      }
    }
}
</style>
