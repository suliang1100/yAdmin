<template>
  <div class="side-bar">
    <Logo />
    <Menu />
  </div>
</template>

<script>
import Logo from './Logo';
import Menu from './Menu';
export default {
  name: 'SideBar',
  components: {
    Logo,
    Menu
  }
}
</script>
