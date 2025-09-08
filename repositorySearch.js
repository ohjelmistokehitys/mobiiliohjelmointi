

async function searchRepositories(keyword, per_page = 1) {
    const response = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&per_page=${per_page}`)

    if (!response.ok) {
        throw new Error(`Received error ${response.status}`);
    }
    return await response.json()
}

searchRepositories("mobiiliohjelmointi")
