<template>
  <div>
    <div class="table_box">
      <table class="table-striped table-bordered">
        <thead>
          <tr>
            <th
              scope="col"
              v-for="(item, index) in props.table_header"
              :key="index"
              :width="item.width"
            >
              <div v-if="item.sort" class="sort_header">
                {{ item.label }}
                <div class="sort_icon">
                  <span @click="sort('rise', item.key)"><i class="bx bxs-up-arrow"></i></span>
                  <span @click="sort('down', item.key)"><i class="bx bxs-down-arrow"></i></span>
                </div>
              </div>
              <div v-else>
                {{ item.label }}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, key1) in tablePage" :key="key1">
            <td v-for="(col, key2) in props.table_header" :key="key2">
              <slot :name="getDominator(col.key)" :item="row" :value="row[col.key]">
                {{ row[col.key] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="GUI_box" v-show="props.table_pagination && props.table_data.length > 0">
      <span @click="prevPage"><i class="bx bxs-chevrons-left"></i></span>
      <div
        v-for="num in limitPage"
        :key="num"
        :class="{ number_active: num === currentPage }"
        @click="goPage(num)"
      >
        {{ num }}
      </div>
      <span @click="nextPage"><i class="bx bxs-chevrons-right"></i></span>
    </div>
  </div>
</template>

<script setup>
import { computed, toRaw, ref, watch } from 'vue'

const props = defineProps({
  table_header: {
    type: Array,
    default() {
      return []
    },
    required: true,
  },
  table_data: {
    type: Array,
    default() {
      return []
    },
    require: true,
  },
  table_scroll: {
    type: String,
    default() {
      return '100%'
    },
  },
  table_pagination: {
    type: Boolean,
    default() {
      return false
    },
  },
  table_page: {
    type: Number,
    default() {
      return 5
    },
  },
})

//表格slot命名
const getDominator = (anyway) => {
  return `cell(${anyway})`
}

//表格排序功能
const headKey = ref(null)
const valSort = ref(null)
const table = ref()
const allPage = ref()
const dataLimit = ref(props.table_page)
watch(
  () => props.table_data,
  (newTableData) => {
    table.value = toRaw(newTableData)
    allPage.value = Math.ceil(table.value.length / dataLimit.value)
    // console.log('Data loaded:', table.value.length)
  },
  { immediate: true }, // 立即执行一次，以确保初始数据被捕获
)

const getTable = computed(() => {
  // console.log('Table length:', table.value.length)
  if (valSort.value === 'rise') {
    return [...table.value].sort((a, b) => (a[headKey.value] > b[headKey.value] ? 1 : -1))
  } else if (valSort.value === 'down') {
    return [...table.value].sort((a, b) => (a[headKey.value] < b[headKey.value] ? 1 : -1))
  } else {
    return table.value
  }
})

const sort = (val, key) => {
  if (val === valSort.value) {
    headKey.value = null
    valSort.value = null
  } else {
    headKey.value = key
    valSort.value = val
  }
}

//表格分頁功能
const currentPage = ref(1)
const initNumber = ref(0)

const nextPage = () => {
  if (currentPage.value < allPage.value) {
    currentPage.value++
    initNumber.value = initNumber.value + dataLimit.value
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    initNumber.value = initNumber.value - dataLimit.value
  }
}

const goPage = (num) => {
  currentPage.value = num
  if (num == 1) {
    initNumber.value = 0
  } else {
    initNumber.value = (num - 1) * dataLimit.value
  }
}
const tablePage = computed(() => {
  if (props.table_pagination) {
    return getTable.value.slice(initNumber.value, initNumber.value + dataLimit.value)
  } else {
    return getTable.value
  }
})

const limitPage = computed(() => {
  if (allPage.value === 0) {
    return 1
  } else {
    let limit_pages = []
    const limit_number = 4
    let start = currentPage.value - limit_number / 2
    let end = currentPage.value + limit_number / 2

    if (allPage.value <= 1 + limit_number) {
      start = 1
      end = allPage.value
    } else if (currentPage.value >= allPage.value - limit_number) {
      start = allPage.value - limit_number
      end = allPage.value
    } else if (start < 1 + limit_number) {
      start = 1
      end = 1 + limit_number
    }

    for (let index = start; index <= end; index++) {
      limit_pages.push(index)
    }
    return limit_pages
  }
})
</script>

<style scoped>
/* 表格 */
.table_box {
  max-height: v-bind(table_scroll);
  width: 100%;
  overflow: auto;
}
.table_box table {
  height: 100%;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgb(212, 212, 212);
  min-width: 1100px;
  overflow-x: scroll;
}
.table_box th {
  background-color: var(--main-color);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  padding: 0.8rem 0 0.8rem 0;
}
.table_box thead {
  position: sticky;
  top: 0;
  z-index: 10;
}
.table_box td {
  padding: 1rem;
  text-align: center;
  vertical-align: middle;
  color: black;
  font-size: 1rem;
  font-weight: 500;
}
.table_box tbody tr:nth-of-type(odd) {
  background-color: #f3f3f3 !important;
}
/* 表格排序icon */
.sort_header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sort_icon {
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
}
.sort_icon span {
  font-size: 0.6rem;
  width: 10px;
  height: 10px;
  cursor: pointer;
}
/* 分頁 */
.GUI_box {
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.GUI_box div {
  background-color: rgb(255, 169, 39);
  color: #fff6f6;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: 0 1% 0 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 900;
  cursor: pointer;
  transition: 1s;
  -webkit-transition: 1s;
}
.GUI_box div:hover {
  background-color: rgb(255, 117, 5);
  transform: scale(1.5, 1.5);
}
.GUI_box span {
  display: flex;
  align-items: center;
}
.GUI_box span i {
  padding: 0 0.5rem 0 0.5rem;
  font-size: 2rem;
  cursor: pointer;
}
.number_active {
  background-color: rgb(255, 117, 5) !important;
}
</style>
