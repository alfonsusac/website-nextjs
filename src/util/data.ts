import { writeFile } from "fs/promises";

async function getRepos() {
  const response = await fetch('https://api.github.com/orgs/reactjs-id/repos', {
    headers: {
      Authorization: `token ${ process.env.GITHUB_TOKEN }`
    }
  });
  // console.log(response)
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

  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const repos = await getRepos();
  console.log(repos.map(r => r.name))
  const contributors = new Set<string>()
  for (const repo of repos) {
    try {
      const response = await fetch(`https://api.github.com/repos/${ repo.full_name }/contributors`, {
        headers: {
          Authorization: `token ${ process.env.GITHUB_TOKEN }`
        }
      });

      if (response.status !== 200) {
        continue
      }

      const json = await response.json() as {
        login: string,
        id: number,
        avatar_url: string,
        html_url: string,
      }[]

      // console.log(json)

      for (const c of json) {
        if (c.login === 'dependabot[bot]' || c.login === 'dependabot-preview[bot]') {
          continue
        }
        contributors.add(c.login)
      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log([...contributors])
  await writeFile('./src/_content/contributors.ts', `export const contributors = ${ JSON.stringify([...contributors], null, 2) }`, 'utf-8')
  return [...contributors]
}
