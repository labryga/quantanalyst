
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



let desktop_query = window.matchMedia("(min-width: 900px)");
function desktop_screen() {
		alert("desktop match!");
		let ul_list = document.createElement("UL");
		let li_items = [...navigation_desktop_tablet.getElementsByTagName("LI")]
		li_items.forEach( item => ul_list.appendChild(item) );
		navigation_desktop_tablet.appendChild(ul_list);
}
desktop_query.addListener(desktop_screen);



let tablet_query = window
		.matchMedia("(min-width: 600px) and (max-width: 899px)");

function tablet_screen() {

		alert("tablet match!");

		let list_itemms = [...navigation_desktop_tablet
				.getElementsByTagName("LI")];

		[...navigation_desktop_tablet.getElementsByTagName("UL")]
				.forEach( item => item.remove() );

		let ul_elements = [...Array(3).keys()]
				.map(item => document.createElement('UL'));

		ul_elements.forEach( ul_item => {
				[...Array(3).keys()].forEach( value => ul_item.appendChild( list_itemms.shift() ) )} );



		ul_elements.forEach( item => navigation_desktop_tablet
				.appendChild(item) );

}

tablet_query.addListener(tablet_screen);
