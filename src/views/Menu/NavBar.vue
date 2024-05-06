<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #e6e3fd">
      <div class="container-fluid">
        <a class="navbar-brand">隨便玩玩bootstrap5</a>
        <MakeSelect class="long"></MakeSelect>
        <div class="user_menu">
          <div class="user_picture">123</div>
          <div class="user_data">
            <span>andy WU</span>
            <span>隨便玩玩</span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import MakeSelect from '../MakeComponents/MakeSelect.vue'
</script>

<style scoped>
.long {
  width: 30%;
}
.user_menu {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.user_picture {
  background-color: black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 1rem;
}
.user_data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.user_data span {
  font-weight: 500;
  color: black;
}
</style>
