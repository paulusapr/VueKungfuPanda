<script setup lang="ts">
import MovieHeader from '@/components/movies/MovieHeader.vue'
import MovieDetail from '@/components/movies/MovieDetail.vue'
import MovieList from '@/components/movies/MovieList.vue'
import { useMovieStore } from '@/stores/movies.js'
import { storeToRefs } from 'pinia'
const { movies, selected } = storeToRefs(useMovieStore())
</script>

<template>
  <div className="home-container">
    <MovieHeader title="Movie Catalogue">
      <template #icon>
        🎥
      </template>
    </MovieHeader>
    <div className="home-content">
      <MovieDetail
        v-if="movies.length > 0"
        v-bind="movies.find((m) => m.id === selected) ?? movies[0]"
      />
      <MovieList />
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}
.home-container .home-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
</style>
