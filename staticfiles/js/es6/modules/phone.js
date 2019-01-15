let phone_device = window.matchMedia("(max-width: 599px)");
get_phone_menu(phone_device);
phone_device.addListener(get_phone_menu);

function get_phone_menu(device) {
	if (device.matches) {
		let menu_li_elements = [...menu.getElementsByTagName("LI")]
		let ul_elements_to_remove = [...menu.getElementsByTagName("UL")];

		ul_elements_to_remove.forEach(ul_element => ul_element.remove());
		let ul_navigation = document.createDocumentFragment();
		let ul_element = document.createElement("UL");
		ul_element.style.display = "none";
		ul_element.id = "phone";
		menu_li_elements.forEach(li_element => {
			ul_element.appendChild(li_element);
		});
		ul_navigation.appendChild(ul_element);
		menu.appendChild(ul_navigation);
	}
}
