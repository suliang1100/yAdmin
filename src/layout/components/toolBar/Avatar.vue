<template>
  <div class="avatar">
    <el-avatar class="avatar-icon" size="large" :src="require('@/assets/avatar.jpg')"></el-avatar>
    <el-dropdown>
        <span class="el-dropdown-link">
            苏亮<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>用户设置</el-dropdown-item>
            <el-dropdown-item>退出用户</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  data(){
      return {
          
      }
  }
}
</script>
<style lang="scss" scoped>
.avatar{
    position: absolute;
    height: 40px;
    line-height: 40px;
    right: 10px;
    top: 12px;
    display: -webkit-flex;
    display: flex;
    .avatar-icon{
        margin-right: 10px;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #333;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
}
</style>