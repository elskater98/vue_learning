<template>
  <h1>The user is {{ $route.params.id }}</h1>
</template>

<script>
export default {
  name: "User",
  props:['id'],
}
</script>

<style scoped>

</style>
