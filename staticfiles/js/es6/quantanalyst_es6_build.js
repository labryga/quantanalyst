navigation.onclick = function(event) { 
	let lists = navigation.getElementsByTagName('UL');
	[].forEach.call(lists, item => item.style.display = "none");
	let list_title = event.target.dataset.navigationType;
	document.getElementById(list_title).style.display = "block";
};

navigation_mobile.onclick = function(event) {
	let list_navigation_type = event.target.dataset.navigationType;
	if (list_navigation_type === "menu_mobile") {
		let lists_mobile_collection = navigation_mobile.getElementsByTagName('UL');
		let lists_mobile = [...lists_mobile_collection]
		let lists_mobile_submenus = lists_mobile.slice(1);
		lists_mobile_submenus.forEach(item => item.style.display = "none");
	} else {
		document.getElementById(list_navigation_type).style.display = "block";
	}
};



tinymc.init({
	selector: 'textarea',
	toolbar: [
		'undo redo | stylesheet | bold italic | link image',
		'alignleft aligncenter alignright',
	]
});
