<template>
  <div class="table_box">
    <table class="table table-light table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col" v-for="(item, index) in props.table_header" :key="index">
            <div v-if="item.sort">
              {{ item.label }}
              <span @click="sort(item.key)">click</span>
            </div>
            <div v-else>
              {{ item.label }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, key1) in getTable" :key="key1">
          <td v-for="(col, key2) in props.table_header" :key="key2">
            <slot :name="getDominator(col.key)" :item="row" :index="row[col.key]">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, toRaw, ref } from 'vue'

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
})

const getDominator = (anyway) => {
  return `cell(${anyway})`
}

const headKey = ref(null)

const getTable = computed(() => {
  const table = ref(toRaw(props.table_data))
  console.log(3)
  if (headKey.value === null) {
    console.log(1)
    return table.value
  } else {
    console.log(2)
    const sortTable = table.value.sort((a, b) => {
      return a[headKey.value] > b[headKey.value] ? 1 : -1
    })
    return sortTable
  }
})

const sort = (key) => {
  headKey.value = key
}
</script>

<style scoped>
.table_box {
  height: v-bind(table_scroll);
  width: 100%;
  overflow: auto;
}
.table_box table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgb(212, 212, 212);
  min-width: 1100px;
  overflow-x: scroll;
}
.table_box th {
  background-color: var(--main-color);
  padding: 1rem;
  color: #ffffff;
  font-size: 1.1rem;
  text-align: center;
}
.table_box thead {
  position: sticky;
  top: 0;
}
.table_box td {
  padding: 1rem;
  text-align: center;
  color: black;
  font-size: 1rem;
  font-weight: 500;
}
.table_box tbody tr:nth-of-type(odd) {
  background-color: rgba(221, 221, 221, 0.8) !important;
}
</style>
