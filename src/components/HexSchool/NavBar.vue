<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #e6e3fd">
      <div class="container-fluid">
        <a class="navbar-brand">六角學院vue3最終作業</a>
        <div class="user_menu">
          <div class="user_picture" @click="Logout.userLogout">登出</div>
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
import { userSignIn } from '@/stores/signIn.js'
const Logout = userSignIn()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
.navbar-brand {
  font-family: 'Noto Sans TC', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
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
  font-family: 'Noto Sans TC', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
