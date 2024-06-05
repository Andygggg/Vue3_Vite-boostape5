<template>
  <input type="checkbox" id="nav-toggle" style="display: none" />
  <div class="sidebar">
    <div class="sidebar_brand">
      <h2>
        <label for="nav-toggle">
          <i class="bx bx-menu-alt-left"></i>
        </label>
      </h2>
    </div>

    <div class="sidebar_menu">
      <ul>
        <li v-for="(item, index) in MenuRouter" :key="index">
          <div :class="{ active: ChooseChild.matched[1].name === item.Head.name }">
            <i :class="item.Head.meta.icon"></i>
            <span>{{ item.Head.meta.title }}</span>
          </div>
          <div
            class="child_menu"
            v-for="(child, i) in item.Children"
            :key="i"
            @click="PushTo(child.name)"
          >
            {{ child.meta.title }}
          </div>
        </li>
        <li>
          <div class="footer" @click="signOut">
            <i class="bx bx-log-out"></i>
            <span>登出</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const MenuRouter = computed(() => {
  var Menu = router.currentRoute.value
  if (Menu.matched[0].children) {
    const All = Menu.matched[0].children.filter((choose) => choose.meta.isOnHeader === true)
    const FilterMenu = []
    All.forEach((menu) => {
      let items = {
        Head: menu,
        Children: menu.children.filter((choose) => choose.meta.isOnSidebar === true),
      }
      FilterMenu.push(items)
    })
    return FilterMenu
  } else {
    return []
  }
})

const ChooseChild = computed(() => {
  var Now = router.currentRoute.value
  return Now
})

const PushTo = (path) => {
  router.push({ name: path })
}

const signOut = () => {
  router.push({ name: 'SignIn' })
}
</script>

<style scoped>
.sidebar {
  width: 70px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: var(--main-color);
  z-index: 9999;
  transition: all 400ms ease;
}
.sidebar_brand {
  height: 70px;
  padding: 1.5rem;
  color: #ffffff;
}
.sidebar_brand span {
  display: inline-block;
  padding-right: 1rem;
}
.sidebar_menu {
  margin-top: 1rem;
}
.sidebar_menu ul {
  padding: 0%;
}
.sidebar_menu li {
  width: 100%;
  padding: 1rem 0 1rem 0;
  list-style: none;
}
.sidebar_menu div {
  color: #ffffff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
  cursor: pointer;
}
.active {
  background-color: #ffffff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 30px 0px 0px 30px;
  color: var(--main-color) !important;
}
.sidebar_menu li div i {
  font-size: 1.5rem;
  padding: 0 1.5rem 0 1.5rem;
}
.footer {
  position: absolute;
  bottom: 0;
  padding-bottom: 2rem;
}
.sidebar_menu li div span {
  display: none;
}
.sidebar_menu li .child_menu {
  /* display: none; */
  /* position: relative;
  right: 100px; */
  color: #ffffff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  visibility: hidden;
  opacity: 0;
  height: 0px;
  transition: height 50ms ease-in-out;
}
.sidebar_menu a span:first-child {
  font-size: 1.5rem;
  padding-right: 1rem;
}
#nav-toggle:checked + .sidebar {
  width: 240px;
}
#nav-toggle:checked + .sidebar .sidebar_menu li div span {
  display: block;
  font-weight: 600;
  animation: show 1s;
  white-space: nowrap;
}
#nav-toggle:checked + .sidebar .sidebar_menu li:hover .child_menu {
  height: 100%;
  opacity: 1;
  visibility: visible;
  padding-top: 1rem;
  animation: showY 1s;
}
@keyframes show {
  from {
    opacity: 0;
    transform: translateX(240px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes showY {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
