
let desktop_tablet_xl_device = window.matchMedia("(min-width: 900px) and (max-width: 2500px)");
get_deskotp_tablet_menu(desktop_tablet_xl_device);
desktop_tablet_xl_device.addListener(get_deskotp_tablet_menu);

function get_deskotp_tablet_menu(desktop_tablet_xl_device) {
	if (desktop_tablet_xl_device.matches) {

		let menu_li_elements = get_menu_li_elements();
		let ul_navigation = document.createDocumentFragment();
		let ul_element = document.createElement("UL");

		menu_li_elements
			.forEach(li_element => ul_element.appendChild(li_element));
		ul_navigation.appendChild(ul_element);
		menu.appendChild(ul_navigation);
	}
}
