window.onload = function() {
		tablet_screen();
		desktop_screen();
};

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


let desktop_query = window.matchMedia("(min-width: 900px) and (max-width: 2000px)");

function desktop_screen() {

		if (desktop_query.matches) {
				
				// alert("desktop match!");

				let list_items = [...navigation_desktop_tablet
						.getElementsByTagName("LI")];

				[...navigation_desktop_tablet.getElementsByTagName("UL")]
						.forEach( item => item.remove() );

				let ul_element = document.createElement("UL");

				list_items.forEach( item => ul_element.appendChild(item) );

				navigation_desktop_tablet.appendChild(ul_element);

				list_items.forEach(item => item.style.display = "block");
		}
}
desktop_query.addListener(desktop_screen);



let tablet_query = window
		.matchMedia("(min-width: 600px) and (max-width: 899px)");

function tablet_screen() {

		if (tablet_query.matches) {

				// alert("tablet match!");

				let list_items = [...navigation_desktop_tablet
						.getElementsByTagName("LI")];

				[...navigation_desktop_tablet.getElementsByTagName("UL")]
						.forEach( item => item.remove() );

				let ul_elements = [...Array(3).keys()]
						.map( item => document.createElement('UL') );

				ul_elements.forEach( ul_item => {
						[...Array(3).keys()]
								.forEach( value => ul_item.appendChild(list_items.shift()) )} 
				);

				ul_elements.forEach( item => navigation_desktop_tablet
						.appendChild(item) );

				let list_items_appended = [...navigation_desktop_tablet
						.getElementsByTagName("LI")];

				list_items_appended.forEach(item => item.style.display = "block");
		}

}
tablet_query.addListener(tablet_screen);


