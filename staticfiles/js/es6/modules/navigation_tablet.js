
let tablet_device = window.matchMedia("(min-width: 600px) and (max-width: 899px)");
get_tablet_menu(tablet_device);
tablet_device.addListener(get_tablet_menu);

function get_tablet_menu(device) {
	if (device.matches) {
		alert(" tablet device!");
	}
}
