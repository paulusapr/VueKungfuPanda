<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div className="header">
    <slot name="icon"></slot>
    <span>{{ title }}</span>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: black;
  padding: 1rem 0;
  width: 100%;
  justify-content: center;
  font-size: 1.5rem;
}
.header span {
  font-weight: bold;
  margin: 0 0.5rem;
  color: white;
}
</style>
