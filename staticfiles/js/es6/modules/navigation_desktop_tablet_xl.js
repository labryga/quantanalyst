let desktop_tablet_xl_device = window.matchMedia("(min-width: 900px) and (max-width: 2500px)");
get_deskotp_tablet_menu(desktop_tablet_xl_device);
desktop_tablet_xl_device.addListener(get_deskotp_tablet_menu);

function get_deskotp_tablet_menu(device) {
	if (device.matches) {
		let menu_li_elements = [...menu.getElementsByTagName("LI")]
		let ul_elements_remove = [...menu.getElementsByTagName("UL")];
		ul_elements_remove.forEach(ul_element => ul_element.remove());
		let ul_navigation = document.createDocumentFragment();
		let ul_element = document.createElement("UL");
		menu_li_elements.forEach(li_element => ul_element.appendChild(li_element));
		ul_navigation.appendChild(ul_element);
		menu.appendChild(ul_navigation);
	}
}
