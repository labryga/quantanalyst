let desktop_tablet_xl_device = window.matchMedia("(min-width: 900px) and (max-width: 2500px)");
get_deskotp_tablet_menu(desktop_tablet_xl_device);
desktop_tablet_xl_device.addListener(get_deskotp_tablet_menu);

function get_deskotp_tablet_menu(device) {
	if (device.matches) {

		let menu_list_raw = reset_menu_list();
		let ul_element = document.createElement("UL");

		menu_list_raw.menu_li_elements
			.forEach(li_element => ul_element.appendChild(li_element));
		menu_list_raw.ul_navigation.appendChild(ul_element);
		menu.appendChild(menu_list_raw.ul_navigation);
	}
}
