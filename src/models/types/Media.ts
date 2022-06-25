import type { Anime } from "./Anime"
import type { Genre } from "./Genre"
import type { Manga } from "./Manga"

export interface Media {
  mal_id: number,
  url: string,
  title: string,
  title_english?: string | null,
  title_japanese?: string | null,
  title_synonyms?: string[] | null,

  synopsis?: string | null,
  background?: string | null,
  type?: string | null,
  status?: string | null,

  rating?: string | null,
  score?: number | null,
  scored_by?: number | null,
  rank?: number | null,
  popularity?: number | null,
  members?: number | null,
  favorites?: number | null,

  genres?: Genre[] | null,
  explicit_genres?: Genre[] | null,
  themes?: Genre[] | null,
  demographics?: Genre[] | null,

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

  relations?: {
    relation?: string | null,
    entry?: Anime | Manga | null
  }[] | null,

  external?: {
    name?: string | null,
    url?: string | null
  }[] | null
}