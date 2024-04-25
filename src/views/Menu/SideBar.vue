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
        <!-- <li v-for="(item, index) in ChildRouter" :key="index">
          <div
            :class="{ active: ChooseChild.matched[2].name === item.name }"
            @click="PushTo(item.name)"
          >
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </div>
        </li> -->
        <li>
          <div class="footer">
            <i class="bx bx-log-out"></i>
            <span>登出</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.sidebar {
  width: 70px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: var(--main-color);
  z-index: 100;
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
.footer span {
  display: none;
}
.sidebar_menu a span:first-child {
  font-size: 1.5rem;
  padding-right: 1rem;
}
#nav-toggle:checked + .sidebar {
  width: 240px;
}
#nav-toggle:checked + .sidebar .sidebar_menu li .footer span {
  display: block;
  font-weight: 600;
  animation: show 2s;
  white-space: nowrap;
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
</style>
