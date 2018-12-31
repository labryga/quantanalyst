
[menu, inhalt].forEach(function(item) {
		item.addEventListener("click", {
				handleEvent(event) {
						event.preventDefault(); 
						if (event.target.id == "menu") {

						} else if (event.target.nodeName == "A" && event.target.closest("DIV").id == "menu" ) {
							// crucial header settings for django "self.request.is_ajax()" returning "true"
							let li_items = [...menu.getElementsByTagName("A")];
							li_items.forEach(li_item => li_item.style.color = "inherit");
							event.target.style.onHover = "#ffff00";
							event.target.style.color = "#00ff00";
							axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
							axios.get(event.target.pathname)
								.then(function (response) {
										inhalt.innerHTML = response.data;}); 
						} else {
							alert("none");
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

function reset_raw() {
	return {
		menu_li_elements: [...menu.getElementsByTagName("LI")],
		ul_elements: [...menu.getElementsByTagName("UL")],
		ul_elements_remove() {this.ul_elements
													.forEach(item => item.remove())},
		ul_navigation: document.createDocumentFragment(),
	};
}
