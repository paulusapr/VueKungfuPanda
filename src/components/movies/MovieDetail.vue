<script setup lang="ts">
import type { MovieType } from '@/stores/movies.js';
defineProps<MovieType>()
</script>

<template>
  <div className="movie-detail">
    <img :src="poster" alt='movie-picture' />
    <h3>
      {{ title }} ({{ year }})
    </h3>
    <div className="author">
      <div className="dt-author">
        <h4>Director:</h4>
        <h4>{{ director }}</h4>
      </div>
      <div className="dt-author">
        <h4>Casts:</h4>
        <h4>{{ casts }}</h4>
      </div>
      <div className="dt-author">
        <h4>Genre:</h4>
        <h4>{{ genre }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-detail {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 1rem;
}
.movie-detail img { 
  object-fit: contain;
  width: 100%;
  border-radius: 5%;
}

.movie-detail h3 {
  margin: 1rem 0;
}

.movie-detail .author {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.movie-detail .author .dt-author {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
}
.movie-detail .author .dt-author h4 {
  font-weight: normal;
}
.movie-detail .author .dt-author h4:first-child {
  font-weight: bold;
  margin-right: 0.5rem !important;
}
</style>
