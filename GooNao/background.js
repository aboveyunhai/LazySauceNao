function isDataURL(str) {
	return !!str.trim().match(isDataURL.regex);
}

isDataURL.regex = /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)$/i;

function getImage(image, tab) {
	searchUrl = "";

	if(!isDataURL(image.srcUrl)){
		searchUrl = "http://saucenao.com/search.php?db=999&url=" + image.srcUrl;

		chrome.tabs.create({
			url: searchUrl
		});
	}
	else{
		alert("Still working on dataUrl.\n"
			+"Small tips: Using google image search first to get the image url end with .jpg/.png etc. from any websites that contain that image.\n"
			+"Then use this extension to search");
	}
}

//create button on context menus
chrome.contextMenus.create({
	id: "search",
	// title: "Google&SauceNao",
	title: "Lazy SauceNao",
	contexts: ["image"]
});


//make button clickable 
chrome.contextMenus.onClicked.addListener(function(content, tab) {
	if (content.menuItemId == "search"){
		getImage(content, tab);
	}
})

