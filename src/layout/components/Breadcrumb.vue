<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data(){
      return {
          breadcrumbList: null
      }
  },
  created(){
      this.getBreadcrumb();
  },
  watch: {
      $route(e){
        this.getBreadcrumb();
      }
  },
  methods: {
      getBreadcrumb(){
          let matched = this.$route.matched;
          if(matched[0].path !== '/'){
              this.breadcrumbList = [{ path: '/', name: '首页' }].concat(matched);
          } else {
              this.breadcrumbList = matched;
          }
      }
  }
}
</script>
<style lang="scss" scoped>
.breadcrumb{
    padding-left: 20px;
    .el-breadcrumb{
        height: 64px;
        line-height: 64px;
    }
}
</style>