let phone_device = window.matchMedia("(max-width: 599px)");
get_phone_menu(phone_device);
phone_device.addListener(get_phone_menu);

function get_phone_menu(device) {
	if (device.matches) {

		let menu_li_elements = [...menu.getElementsByTagName("LI")]
		let ul_element = document.createElement("UL");
		menu.appendChild(ul_element);
	}
}
