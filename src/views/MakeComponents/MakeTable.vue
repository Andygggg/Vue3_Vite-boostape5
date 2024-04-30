<template>
  <div>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col" v-for="(item, index) in table_header" :key="index">
            {{ item.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, key1) in table_data" :key="key1">
          <td v-for="(col, key2) in table_header" :key="key2">
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
defineProps({
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
})
const getDominator = (anyway) => {
  return `cell(${anyway})`
}
</script>
