chrome.runtime.sendMessage({from: 'cooler-content-script'});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.from === 'cooler-theme-injected') {
		fetch(chrome.extension.getURL('/templates/e-commerce-check-in.hbs'))
			.then(r => r.text())
			.then(d => inject(Handlebars.compile(d)));
	}
});

function inject(template) {

}