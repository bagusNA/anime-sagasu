import { urlFetch } from '@/helper/fetch';
import { Options } from '@/options';

const Season = {
  get url() {
    return `${Options.apiUrl}/seasons`;
  },

  getSeason: (year: number, season: string, page: number = 1) => {
    return urlFetch(`${Season.url}/${year}/${season}?page=${page}`)
  },

  getSeasonNow: (page: number = 1) => {
    return urlFetch(`${Season.url}/now?page=${page}`);
  },

  getSeasonUpcoming: (page: number = 1) => {
    return urlFetch(`${Season.url}/upcoming?page=${page}`);
  },

  getSeasonsList: () => {
    return urlFetch(`${Season.url}`);
  }
}

export default Season;