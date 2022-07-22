// Opens a new external url. Goto should be used for internal pages
export const openUrl = (url: string, newTab = true) => {
	const formattedUrl = url.startsWith('http') ? url : `https://${url}`
	window.open(formattedUrl, newTab ? '_blank' : '_self')
}

// Mutate the query params of the current url without reloading page
export const replaceStateWithQuery = (values: Record<string, string>) => {
	const url = new URL(window.location.toString())
	for (const [k, v] of Object.entries(values)) {
		if (v) {
			url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v))
		} else {
			url.searchParams.delete(k)
		}
	}
	history.replaceState({}, '', url)
}
