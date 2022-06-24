import type { Genre } from "./Genre"
import type { Producers } from "./Producers"

export interface Anime {
  mal_id: number,
  url: string,
  title: string,
  title_english?: string | null,
  title_japanese?: string | null,
  title_synonyms?: string[] | null,
  synopsis?: string | null,
  background?: string | null,
  
  images?: {
    jpg?: {
      image_url?: string | null,
      small_image_url?: string | null,
      large_image_url?: string | null,
    } | null,
    webp?: {
      image_url?: string | null,
      small_image_url?: string | null,
      large_image_url?: string | null,
    } | null,
  } | null,

  type?: string | null,
  source?: string | null,
  episodes?: number | null,
  status?: string | null,
  airing?: boolean | null,
  aired?: any | null,
  duration?: string | null,
  season?: string | null,
  year?: number | null,

  rating?: string | null,
  score?: number | null,
  scored_by?: number | null,
  rank?: number | null,
  popularity?: number | null,
  members?: number | null,
  favorites?: number | null,

  broadcast?: {
    day?: string | null,
    time?: string | null,
    timezone?: string | null,
    string?: string | null,
  } | null,
  producers?: Producers[] | null, 
  studios?: Producers[] | null,
  genres?: Genre[] | null,
  explicit_genres?: Genre[] | null,
  themes?: Genre[] | null,
  demographics?: Genre[] | null,
}