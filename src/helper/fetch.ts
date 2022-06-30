export async function urlFetch(url: string) {
  let data: any;
      
  await fetch(url)
    .then(res => res.json())
    .then(json => data = json)
    .catch(err => console.error(err))

  return data;
}