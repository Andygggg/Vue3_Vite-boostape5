<template>
  <div class="table_container">
    <MakeTable
      :table_header="table"
      :table_data="table_data"
      table_scroll="60vh"
      :table_pagination="true"
      :table_page="4"
    >
      <template #cell(one)="data">
        <span>{{ data.value }}</span>
      </template>
      <template #cell(two)="data">
        <span style="color: rgb(255, 0, 242)">{{ data.item.two }}</span>
      </template>
    </MakeTable>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import MakeTable from '../../../views/MakeComponents/MakeTable.vue'

const table = reactive([
  { key: 'one', label: 'Number', sort: true, width: '200' },
  { key: 'two', label: 'name', sort: false },
  { key: 'date', label: '日期', sort: true },
  { key: 'four', label: '@', sort: false },
])
const table_data = reactive([
  { one: '1', two: 'Jacob', date: '2023/5/6', four: '@mdo' },
  { one: '2', two: 'Jacob', date: '2023/5/3', four: '@fat' },
  { one: '3', two: 'Jacob', date: '2023/5/1', four: '@mdo' },
  { one: '4', two: 'Jacob', date: '2023/5/3', four: '@fat' },
  { one: '5', two: 'Jacob', date: '2023/5/3', four: '@fat' },
  { one: '6', two: 'Jacob', date: '2023/5/4', four: '@fat' },
  { one: '7', two: 'Jacob', date: '2023/5/3', four: '@fat' },
  { one: '8', two: 'Jacob', date: '2023/5/2', four: '@fat' },
  { one: '9', two: 'Jacob', date: '2023/5/1', four: '@fat' },
  { one: '10', two: 'Jacob', date: '2023/5/6', four: '@mdo' },
  { one: '11', two: 'Jacob', date: '2023/5/3', four: '@fat' },
  { one: '12', two: 'Jacob', date: '2023/5/1', four: '@mdo' },
  { one: '13', two: 'Jacob', date: '2023/5/3', four: '@fat' },
  { one: '14', two: 'Jacob', date: '2023/5/3', four: '@fat' },
  { one: '15', two: 'Jacob', date: '2023/5/4', four: '@fat' },
  { one: '16', two: 'Jacob', date: '2023/5/3', four: '@fat' },
  { one: '17', two: 'Jacob', date: '2023/5/2', four: '@fat' },
  { one: '18', two: 'Jacob', date: '2023/5/1', four: '@fat' },
])
</script>

<style scoped>
.table_container {
  padding: 1rem 1rem 0 1rem;
}
</style>
