<template>
  <div class="select_object">
    <div class="select_btn">
      <input type="text" v-model="target" placeholder="請填寫文字" />
      <i class="bx bx-search-alt"></i>
    </div>
    <ul class="option_menu">
      <li class="option" v-for="item in filterMenu" :key="item" @click="SearchTo(item)">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const MenuRouter = computed(() => {
  const Router = router.currentRoute.value
  const RouterList = Router.matched[0].children
  let FilterRouterList = []
  RouterList.forEach((partner) => {
    partner.children.forEach((child) => {
      FilterRouterList.push(child.meta.title)
    })
  })
  return FilterRouterList
})

const target = ref(null)
// const Menu = reactive(['test1', 'test2', 'test3'])
const selectBtnWidth = ref(null)
onMounted(() => {
  const optionMenu = document.querySelector('.select_object')
  const selectBtn = optionMenu.querySelector('.select_btn')

  if (selectBtn) {
    selectBtnWidth.value = selectBtn.offsetWidth + 'px'
  }

  selectBtn.addEventListener('click', () => {
    optionMenu.classList.toggle('active')
  })

  document.addEventListener('click', (event) => {
    // 當點擊時不包含.select_btn，移除active
    if (!event.target.closest('.select_btn')) {
      optionMenu.classList.remove('active')
    }
  })

  window.addEventListener('resize', function () {
    //window改變視窗大小執行一次function
    selectBtnWidth.value = selectBtn.offsetWidth + 'px'
  })
})

function SearchTo(value) {
  const Router = router.currentRoute.value
  const RouterList = Router.matched[0].children
  RouterList.forEach((Item) => {
    Item.children.forEach((item) => {
      if (item.meta.title.toLowerCase().includes(value)) {
        router.push({ name: item.name })
        target.value = null
      }
    })
  })
}
const filterMenu = computed(() => {
  if (target.value === null || target.value === '') {
    return []
  } else {
    return MenuRouter.value.filter((item) => item.toLowerCase().includes(target.value))
  }
})
</script>

<style scoped>
.select_object {
  width: 100%;
}
.select_btn {
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  position: relative;
  display: inline-block;
  width: 100%;
}
.select_btn input {
  width: 100%;
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 900;
  color: black;
  outline: none;
}
.select_btn input:focus {
  border: 1px solid;
  border-color: blueviolet;
}
.select_btn i {
  transform: 1s;
  position: absolute;
  right: 3px;
  top: calc(50% - 0.5em);
}
/* .select_object.active .select_btn i {
  transform: rotate(-180deg);
} */
.select_object .option_menu {
  position: absolute;
  width: v-bind(selectBtnWidth);
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  list-style: none;
  display: none;
  padding: 0%;
  border: 1px rgba(201, 201, 201, 0.671) solid;
}
.select_object.active .option_menu {
  display: block;
  margin: 0;
}
.option_menu .option {
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 0;
}
.option span {
  padding-left: 0.5rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  font-size: 1rem;
  font-weight: 600;
}
.option_menu .option:hover {
  background-color: #65b7e04f;
  border-radius: 8px;
}
</style>
