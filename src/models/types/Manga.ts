import type { Magazine } from "./Magazine";
import type { Media } from "./Media";
import type { People } from "./People";

export interface Manga extends Media {
  chapters?: number | null,
  volumes?: number | null,
  publishing?: boolean | null,
  published?: {
    from?: string | null,
    to?: string | null,
    prop?: {
      from?: {
        day?: number | null,
        month?: number | null,
        year?: number | null,
      } | null,
      to?: {
        day?: number | null,
        month?: number | null,
        year?: number | null,
      } | null,
    } | null,
    string?: string | null,
  } | null,
  authors?: People[] | null,
  serializations?: Magazine[] | null,
}