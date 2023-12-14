<script setup lang="ts">
import { useMovieStore } from '@/stores/movies.js';
import { storeToRefs } from 'pinia';
const { changeMovie } = useMovieStore();
const { selected } = storeToRefs(useMovieStore());
</script>

<template>
  <div className="movie-list">
    <button @click="changeMovie(item.id)" :class="{ active: item.id === selected }" type="button" v-for="item in movie" v-bind:key="item.id">
      {{ item.title }}
    </button>
  </div>
</template>

<script lang="ts">
import { get } from '@/utils/client';
import type { MovieType } from '@/stores/movies.js';

export default {
  name: "App",
  data() {
    return {
      movie: [] as MovieType[],
    };
  },
  methods: {
    async getMovies() {
      const { data } = await get("http://localhost:5173/movies.json");
      this.movie = data;
      const { setMovie, changeMovie } = useMovieStore();
      setMovie(data);
      changeMovie(data[0].id);
    },
  },
  beforeMount() {
    this.getMovies();
  }
};
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  flex: 1;
  background-color: #ececec;
}
.movie-list button {
  border: none;
  outline: none;
  background: none;
  text-align: left;
  padding: 0.2rem 1rem;
  cursor: pointer;
}

.movie-list button:hover, button.active {
  background-color: #acb2c1;
  font-weight: bold;
}
</style>
