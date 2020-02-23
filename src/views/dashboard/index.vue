<template>
  <div>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      value: new Date()
    }
  }
}
</script>