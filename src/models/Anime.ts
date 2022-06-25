import { urlFetch } from '@/helper/fetch';
import { Options } from '@/options';

const Anime = {
  get url() {
    return `${Options.apiUrl}/anime`;
  },

  getSearch: (query: string) => {
    return urlFetch(`${Anime.url}?q=${query}`);
  }
}

export default Anime;