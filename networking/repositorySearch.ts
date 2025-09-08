import { RepoSearchResponse } from "./githubTypes";


export async function searchRepositories(keyword: string, per_page = 20): Promise<RepoSearchResponse> {
    const response = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&per_page=${per_page}`);

    if (!response.ok) {
        throw new Error(`Received error ${response.status}`);
    }
    return await response.json();
}

