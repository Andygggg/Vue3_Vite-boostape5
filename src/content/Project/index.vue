<template>
  <div class="menu_container">
    <div class="menu_left">
      <SideBar />
    </div>
    <div class="menu_right">
      <NavBer />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import SideBar from '../../views/Menu/SideBar.vue'
import NavBer from '../../views/Menu/NavBar.vue'
</script>

<style scoped>
.menu_container {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
}
.menu_left {
  width: 70px;
  z-index: 100;
}
.menu_right {
  width: calc(100vw - 70px);
  flex-grow: 1;
  overflow-y: auto;
}
</style>
