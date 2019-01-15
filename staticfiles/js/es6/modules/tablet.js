let tablet_device = window.matchMedia("(min-width: 600px) and (max-width: 899px)");
get_tablet_menu(tablet_device);
tablet_device.addListener(get_tablet_menu);

function get_tablet_menu(tablet_device) {
	if (tablet_device.matches) {

		let menu_list_raw = reset_menu_list();

		let ul_elements = [...Array(3).keys()].map(element => document.createElement("UL"));

		ul_elements.forEach(ul_element => {
			[...Array(3).keys()].forEach(value => {
				ul_element.appendChild(menu_list_raw.menu_li_elements.shift())
			})
		});

		ul_elements.forEach(ul_element => {menu_list_raw.ul_navigation
				.appendChild(ul_element)});
		menu.appendChild(menu_list_raw.ul_navigation);
	}
}
