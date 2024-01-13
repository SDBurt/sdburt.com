export default async function fetcher<JSON = any>(input, init?): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}
