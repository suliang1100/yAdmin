<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
            <a @click.prevent="handleLink(item)">{{ item.name }}</a>
        </el-breadcrumb-item>
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
        if(!matched[0].path){
            matched[0].path = '/';
            matched[0].name = '首页';
        } else {
            this.breadcrumbList = matched;
        }
        this.breadcrumbList = matched;
      },

      handleLink(item){
        if(item.path !== this.$route.path) {
            this.$router.push(item.path);
        }
      }
  }
}
</script>
<style lang="scss" scoped>
.breadcrumb{
    display: block;
    height: 64px;
    line-height: 64px;
    .el-breadcrumb{
        height: 64px;
        line-height: 64px;
    }
}
</style>