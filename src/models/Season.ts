import { urlFetch } from '@/helper/fetch';
import { Options } from '@/options';
import { useQuery } from '@vue/apollo-composable';

// @ts-ignore
import { getCurrentSeasonAnime } from './graphql/SeasonQuery.gql';
import { currentSeason, currentYear } from '@/helper/seasonFunctions';

const Season = {
  get url() {
    return `${Options.apiUrl}/seasons`;
  },

  getSeason: (year: number, season: string, page: number = 1) => {
    return urlFetch(`${Season.url}/${year}/${season}?page=${page}`)
  },

  getSeasonNow: (page: number = 1, perPage: number = 15) => {
    const variables = {
      season: currentSeason(),
      year: currentYear(),
      page,
      perPage
    }

    const { result } = useQuery(getCurrentSeasonAnime, variables);
    return result;
  },

  getSeasonUpcoming: (page: number = 1) => {
    return urlFetch(`${Season.url}/upcoming?page=${page}`);
  },

  getSeasonsList: () => {
    return urlFetch(`${Season.url}`);
  }
}

export default Season;