import { urlFetch } from '@/helper/fetch';
import { Options } from '@/options';
import { useQuery } from '@vue/apollo-composable';

import type { Ref } from 'vue';
// @ts-ignore
import { getAnime } from './graphql/AnimeQuery.gql';

const Anime = {
  get url() {
    return `${Options.apiUrl}/anime`;
  },

  getSearch: (query: string) => {
    return urlFetch(`${Anime.url}?q=${query}&sfw=true`);
  },
  
  getAnimeSearch: (query: string) => {
    return urlFetch(`${Anime.url}?q=${query}&type=tv&sfw=true`);
  },
  
  getMovieSearch: (query: string) => {
    return urlFetch(`${Anime.url}?q=${query}&type=movie&sfw=true`);
  },

  getAnimeFullById: (id: number): Ref<any> => {
    const { result } = useQuery(getAnime, { id });

    return result;
  },

  getAnimeCharacters: async (id: number) => {
    return (await urlFetch(`${Anime.url}/${id}/characters`)).data;
  }
}

export default Anime;