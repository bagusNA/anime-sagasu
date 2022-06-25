export interface People {
  mal_id: number,
  name: string,
  given_name?: string | null,
  family_name?: string | null,
  alternate_names?: string[] | null,
  birthday?: string | null,
  favorites?: string | null,
  about?: string | null,
  url: string,
  website_url?: string | null,
  
  images?: {
    jpg?: {
      image_url?: string | null
    } | null
  } | null,
}