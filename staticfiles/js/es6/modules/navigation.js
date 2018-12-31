
[menu, inhalt].forEach(function(item) {
		item.addEventListener("click", {
				handleEvent(event) {
						event.preventDefault(); 
						if (event.target.id == "menu") {
						} else {
							// crucial header settings for django "self.request.is_ajax()" returning "true"
							axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
							axios.get(event.target.pathname)
								.then(function (response) {
										inhalt.innerHTML = response.data;}); 
						}
				}
		});
});

function reset_menu_list() {
		let menu_li_elements = [...menu.getElementsByTagName("LI")];
		let ul_elements_remove = [...menu.getElementsByTagName("UL")];
		ul_elements_remove.forEach(ul_element => ul_element.remove());
		menu_li_elements.forEach(li_item => li_item.style.display = "block");
		let ul_navigation = document.createDocumentFragment(); 
		return {menu_li_elements, ul_navigation}
}

