export function toUrl(url: string) {
  return new URL(url)
}

export function getSearchQuery(url: string, what: string) {
  const urlObj = toUrl(url)
  return urlObj.searchParams.get(what) + ''
}
