document.getElementById("share-btn")?.addEventListener("click", async () => {
	const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
	if (tab?.url) {
		const encodedUrl = encodeURIComponent(tab.url);
		const targetUrl = `https://curaq.pages.dev/share?url=${encodedUrl}`;
		await browser.tabs.create({ url: targetUrl });
	}
});
