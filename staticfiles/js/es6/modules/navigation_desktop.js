
// crucial header settings for django "self.request.is_ajax()" returning "true"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

[navigation_desktop_tablet, inhalt].forEach(function(item) {
		item.addEventListener("click", {
				handleEvent(event) {
						event.preventDefault(); 
						if (event.target.id == "menu") {

								let list_elements = getMenuListElements();
								list_elements.forEach(item => item.style.display = "block");
								
								let menu_item = document.createElement("DIV");
								menu_item.innerHTML = "zurück";

								let ul_item = navigation_desktop_tablet.getElementsByTagName("UL")[0];
								ul_item.insertBefore(menu_item, ul_item.firstElementChild);
								ul_item.classList.add("phone_screen");

								ul_item.onclick = function() {
										ul_item.classList.remove("phone_screen");
										list_elements.forEach(item => item.style.display = "none");
										ul_item.firstElementChild.remove();
								};

						} else {

							axios.get(event.target.pathname)
								.then(function (response) {
										inhalt.innerHTML = response.data;}); 
						}
				}
		});
});



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


function getMenuListElements() {
		return [...navigation_desktop_tablet.getElementsByTagName("LI")]; }

function removeUlElements() {
						[...navigation_desktop_tablet.getElementsByTagName("UL")]
								.forEach( item => item.remove() ); }

