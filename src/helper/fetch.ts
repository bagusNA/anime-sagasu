export async function urlFetch(url: string) {
  let data: any,
      error: any;
      
  await fetch(url)
    .then(res => res.json())
    .then(json => data = json)
    .catch(err => error = err);

  return { data, error };
}