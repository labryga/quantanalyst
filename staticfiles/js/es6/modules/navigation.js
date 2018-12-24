
// crucial header settings for django "self.request.is_ajax()" returning "true"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

[navigation_desktop_tablet, inhalt].forEach(function(item) {
		item.addEventListener("click", {
				handleEvent(event) {
						event.preventDefault(); 
						axios.get(event.target.pathname)
							.then(function (response) {
									inhalt.innerHTML = response.data;}); }
		});
});


