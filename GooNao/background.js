function getImage(image, tab) {
	// chrome.tabs.create({
	// 	url: "http://www.google.com/searchbyimage?image_url=" + image.srcUrl
	// });
	chrome.tabs.create({
		url: "http://saucenao.com/search.php?db=999&url=" + image.srcUrl
	});
}

chrome.contextMenus.create({
	id: "search",
	// title: "Google&SauceNao",
	title: "Lazy SauceNao",
	contexts: ["image"]
});

chrome.contextMenus.onClicked.addListener(function(content, tab) {
	if (content.menuItemId == "search"){
		getImage(content, tab);
	}
})

