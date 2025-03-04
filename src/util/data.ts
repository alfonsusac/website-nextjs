import { contributors } from "@/_content/contributors";
import { writeFile } from "fs/promises";
import { cacheLife } from "next/dist/server/use-cache/cache-life";

async function getRepos() {
  "use cache"
  const response = await fetch('https://api.github.com/orgs/reactjs-id/repos', {
    headers: { Authorization: `token ${ process.env.GITHUB_TOKEN }` }
  });
  return await response.json() as {
    id: number,
    name: string,
    full_name: string,
    html_url: string,
    description: string,
  }[]
}

export async function getAllGitHubContributors() {
  "use cache"
  cacheLife("max")
  if (process.env.NODE_ENV !== 'development') return
  const repos = await getRepos();
  const newContributors = new Set<string>()
  for (const repo of repos) {
    try {
      const response = await fetch(`https://api.github.com/repos/${ repo.full_name }/contributors`, {
        headers: { Authorization: `token ${ process.env.GITHUB_TOKEN }` }
      });
      if (response.status !== 200) continue
      const json = await response.json() as {
        login: string,
        id: number,
        avatar_url: string,
        html_url: string,
      }[]
      for (const c of json) {
        if (c.login === 'dependabot[bot]' || c.login === 'dependabot-preview[bot]') continue
        newContributors.add(c.login)
      }
    } catch (error) { console.log(error) }
  }
  // check if two sets are exactly the same
  const oldContributors = new Set(contributors)
  for (const c of oldContributors)
    newContributors.delete(c)
  if (newContributors.size === 0)
    return [...oldContributors]
  await writeFile(
    './src/_content/contributors.ts',
    `export const contributors = ${ JSON.stringify([...newContributors], null, 2) }`,
    'utf-8'
  )
  return [...newContributors]
}
