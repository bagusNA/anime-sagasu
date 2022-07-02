import { urlFetch } from '@/helper/fetch';
import { Options } from '@/options';

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

  getAnimeFullById: (id: number) => {
    return urlFetch(`${Anime.url}/${id}/full`);
  }
}

export default Anime;