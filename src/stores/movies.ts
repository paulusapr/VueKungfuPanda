import { defineStore } from 'pinia'

export type MovieType = {
  title: string;
  year: string;
  director: string;
  casts: string;
  genre: string;
  poster: string;
  id: string;
};

export const useMovieStore = defineStore("movie", {
  state: () => ({ movies: [] as MovieType[], selected: '' as string }),
  actions: {
    setMovie(movies: MovieType[]) {
      this.movies = movies;
    },
    changeMovie(movieId: string) {
      this.selected = movieId;
    },
  }
});
