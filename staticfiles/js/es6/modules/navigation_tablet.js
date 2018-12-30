let tablet_device = window.matchMedia("(min-width: 600px) and (max-width: 899px)");
get_tablet_menu(tablet_device);
tablet_device.addListener(get_tablet_menu);

function get_tablet_menu(device) {
	if (device.matches) {
		let menu_li_elements = [...menu.getElementsByTagName("LI")];

		let ul_elements_remove = [...menu.getElementsByTagName("UL")];
		ul_elements_remove.forEach(ul_element => ul_element.remove());
		let ul_navigation = document.createDocumentFragment(); 

		let ul_elements = [...Array(3).keys()].map(element => document.createElement("UL"));

		ul_elements.forEach(ul_element => {
			[...Array(3).keys()].forEach(value => {
				ul_element.appendChild(menu_li_elements.shift())
			})
		});

		ul_elements.forEach(ul_element => ul_navigation.appendChild(ul_element));
		menu.appendChild(ul_navigation);
	}
}
