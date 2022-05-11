let filesToCache =
[
	"/",
	"/apple-touch-icon.png",
	"/icon-512.png",
	"/favicon.ico",
	"/favicon.svg",
	"/banner.png",
	"/en",
	"/ru"
];

self.addEventListener("install", e =>
{
	e.waitUntil(
		// Get React bundle files list to cache
		fetch("/asset-manifest.json")
		.then(response => response.json())
		.then(assets => filesToCache.concat(Object.entries(assets.files).map(i => i[1])))

		.then(() => caches.open("easylogon-demo"))
		.then(cache => cache.addAll(filesToCache))
	);
});

self.addEventListener("fetch", event =>
	event.respondWith((async () =>
	{
		let response = await caches.match(event.request);
		return response || await fetch(event.request);
	})()));