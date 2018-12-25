
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


if (window.matchMedia("(min-width: 900px)").matches) {
		alert("it matches");
		let ul_list = document.createElement("UL");
		let li_items = [...navigation_desktop_tablet.getElementsByTagName("LI")]
		li_items.forEach( item => ul_list.appendChild(item) );
		navigation_desktop_tablet.appendChild(ul_list);
} else {
		alert("does not match");
}
