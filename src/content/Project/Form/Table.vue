<template>
  <div class="table_container">
    <MakeTable :table_header="table" :table_data="table_data">
      <template #cell(one)="data">
        <span>{{ data.index }}</span>
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
  { key: 'one', label: 'Number' },
  { key: 'two', label: 'name' },
  { key: 'three', label: 'name2' },
  { key: 'four', label: '@' },
])
const table_data = reactive([
  { one: '0', two: 'Mark', three: 'Otto', four: '	@mdo' },
  { one: '1', two: 'Jacob', three: 'Thornton', four: '@fat' },
])
</script>

<style scoped>
.table_container {
  padding: 0 1rem 0 1rem;
}
</style>
