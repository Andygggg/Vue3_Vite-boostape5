<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #e6e3fd">
      <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>
        <MakeSelect class="long"></MakeSelect>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script setup>
import MakeSelect from '../MakeComponents/MakeSelect.vue'
</script>

<style scoped>
.long {
  width: 30%;
}
</style>
