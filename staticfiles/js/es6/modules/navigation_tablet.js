
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




function getMenuListElements() {
		return [...navigation_desktop_tablet.getElementsByTagName("LI")]; }

function removeUlElements() {
						[...navigation_desktop_tablet.getElementsByTagName("UL")]
								.forEach( item => item.remove() ); }

