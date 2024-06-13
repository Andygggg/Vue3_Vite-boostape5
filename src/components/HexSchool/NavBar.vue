<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg" style="background-color: #e6e3fd">
      <div class="container-fluid">
        <a class="navbar-brand">六角學院vue3最終作業</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(item, index) in MainMenu" :key="index">
              <span
                class="nav-link"
                :class="{ active: NowRouter.name === item.name }"
                @click="PushTo(item.name)"
                >{{ item.meta.title }}</span
              >
            </li>
            <li class="nav-item"><span class="nav-link" @click="Logout.userLogout">登出</span></li>
          </ul>
        </div>
        <div class="user_menu">
          <div class="user_picture">u</div>
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
import { computed } from 'vue'
import { userSignIn } from '@/stores/signIn.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const Logout = userSignIn()

const MainMenu = computed(() => {
  var Menu = router.currentRoute.value
  return Menu.matched[0].children
})
const NowRouter = computed(() => {
  var Now = router.currentRoute.value
  return Now
})

const PushTo = (path) => {
  router.push({ name: path })
}
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
.nav-item span {
  cursor: pointer;
  font-size: 16px;
}
.nav-item span:hover {
  color: black;
  font-weight: 600;
}
.active {
  color: black;
  font-weight: 600;
}
</style>
