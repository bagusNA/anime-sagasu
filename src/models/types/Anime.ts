import type { Media } from "./Media"
import type { Producers } from "./Producers"

export interface Anime extends Media {
  source?: string | null,
  episodes?: number | null,
  airing?: boolean | null,
  aired?: any | null,
  duration?: string | null,
  season?: string | null,
  year?: number | null,

  producers?: Producers[] | null, 
  studios?: Producers[] | null,

  broadcast?: {
    day?: string | null,
    time?: string | null,
    timezone?: string | null,
    string?: string | null,
  } | null,
  
  theme?: {
    openings?: String[] | null,
    endings?: String[] | null
  },
}