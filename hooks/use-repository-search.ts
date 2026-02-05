import { useEffect, useState } from "react";

// TODO: add other fields when needed
export type Repository = {
    full_name: string
}

/**
 * This hook fetches repositories from GitHub API based on the input keyword. 
 * It returns the list of repositories and a loading state.
 * 
 * The benefit of this hook is to abstract the fetching logic and state management
 * from the UI component, making it also reusable in other parts of the app if needed.
 */
export function useRepositorySearch(input: string) {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true); // update loading state (triggers re-render immediately)

        fetchRepositories(input)
            .then(result => {
                // update repositories and loading state (triggers re-render when data is fetched)
                setRepositories(result);
            })
            .catch(error => {
                console.error("Failed to fetch repositories:", error);
                setRepositories([]);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [input]); // re-run effect when input changes

    return {
        repositories: loading ? [] : repositories, // when loading, return empty array to avoid showing old results
        loading
    };
}


async function fetchRepositories(input: string): Promise<Repository[]> {
    console.log(`fetching repositories with keyword ${input}`);

    const keyword = encodeURIComponent(input);
    const response = await fetch(`https://api.github.com/search/repositories?q=${keyword}`);

    if (!response.ok) {
        throw new Error(`request failed with code ${response.status}`);
    }

    const json = await response.json();
    return json.items;
}
