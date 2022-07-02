import type { Category } from "./types/Category";
import Anime from "./Anime";
import Manga from "./Manga";

export const categories: Category[] = [
  {
    id: 0,
    name: 'All',
    search: async (query: string) => {
      return await (await Anime.getSearch(query)).data;
    },
  },
  {
    id: 1,
    name: 'Anime',
    search: async (query: string) => {
      return await (await Anime.getAnimeSearch(query)).data;
    },
  },
  {
    id: 2,
    name: 'Movie',
    search: async (query: string) => {
      return await (await Anime.getMovieSearch(query)).data;
    },
  },
  {
    id: 3,
    name: 'Manga',
    search: async (query: string) => {
      return await (await Manga.getSearch(query)).data;
    },
  },
  {
    id: 4,
    name: 'Light Novel',
    search: async (query: string) => {
      return await (await Manga.getNovelSearch(query)).data;
    },
  }
];
