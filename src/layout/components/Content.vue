<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>
<style lang="scss" scoped>
.content{
  width: 100%;
  min-height: calc(100% - 64px);
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
}
</style>
