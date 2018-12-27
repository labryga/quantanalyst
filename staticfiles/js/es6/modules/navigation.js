
// crucial header settings for django "self.request.is_ajax()" returning "true"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

[navigation_desktop_tablet, inhalt].forEach(function(item) {
		item.addEventListener("click", {
				handleEvent(event) {
						event.preventDefault(); 
						if (event.target.id == "menu") {
								let list_elements = getMenuListElements();
								list_elements.forEach(item => item.classList.add("phone_screen"));
						}
						axios.get(event.target.pathname)
							.then(function (response) {
									inhalt.innerHTML = response.data;}); }
		});
});


function getMenuListElements() {
		return [...navigation_desktop_tablet.getElementsByTagName("LI")]; }

function removeUlElements() {
						[...navigation_desktop_tablet.getElementsByTagName("UL")]
								.forEach( item => item.remove() ); }


(function() {

		let desktop_query = window.matchMedia("(min-width: 900px) and (max-width: 2000px)");

		function desktop_screen() {

				if (desktop_query.matches) {
						let list_elements = getMenuListElements();

						removeUlElements();

						let ul_element = document.createElement("UL");

						list_elements.forEach( item => ul_element.appendChild(item) );

						navigation_desktop_tablet.appendChild(ul_element);

						list_elements.forEach(item => item.style.display = "block");
				}
		}

		desktop_screen();
		desktop_query.addListener(desktop_screen);

})();


(function() {

		let tablet_query = window
				.matchMedia("(min-width: 600px) and (max-width: 899px)");

		function tablet_screen() {

				if (tablet_query.matches) {

						let list_elements = getMenuListElements();

						removeUlElements();

						let ul_elements = [...Array(3).keys()]
								.map( item => document.createElement('UL') );

						ul_elements.forEach( ul_item => {
								[...Array(3).keys()]
										.forEach( value => { 
												ul_item.appendChild(list_elements.shift());
												ul_item.classList.add("tablet"); } 
										)} 
						);

						ul_elements.forEach( item => navigation_desktop_tablet
								.appendChild(item) );

						let list_elements_appended = [...navigation_desktop_tablet
								.getElementsByTagName("LI")];

						list_elements_appended.forEach(item => item.style.display = "block");
				}

		}
		tablet_screen();
		tablet_query.addListener(tablet_screen);

})();


(function() {

		let phone_query = window.matchMedia("(max-width: 599px)");

		function phone_screen() {

			if (phone_query.matches) {

					let list_elements = getMenuListElements();

					removeUlElements();

					let ul_element = document.createElement("UL");
				
					list_elements.forEach( item => ul_element.append(item) );

					navigation_desktop_tablet.appendChild(ul_element);

					let list_elements_appended = [...navigation_desktop_tablet
							.getElementsByTagName("LI")];

					list_elements_appended.forEach(item => item.style.display = "none");
			}
		}
	phone_screen();	
	phone_query.addListener(phone_screen);

})();
