import { urlFetch } from '@/helper/fetch';
import { Options } from '@/options';

const Manga = {
  get url() {
    return `${Options.apiUrl}/manga`;
  },

  getSearch: (query: string) => {
    return urlFetch(`${Manga.url}?q=${query}`);
  },

  getMangaFullById: (id: number) => {
    return urlFetch(`${Manga.url}/${id}/full`);
  }
}

export default Manga;