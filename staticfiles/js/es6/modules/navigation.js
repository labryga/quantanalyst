
[menu, inhalt].forEach(function(item) {
  item.addEventListener("click", {
	handleEvent(event) {
	  event.preventDefault(); 
		if (event.target.id == "menu_phone") {

		  if (phone.style.display == "block") {
			  phone.style.display = "none";
			  phone.classList.remove("phone_list");

		  } else { 
				  phone.style.display = "block";
				  phone.classList.add("phone_list");
		  }

		} else if (event.target.nodeName == "A" && event.target.closest("DIV").id == "menu" ) {
			// crucial header settings for django "self.request.is_ajax()" returning "true"
			let li_items = [...menu.getElementsByTagName("A")];
			li_items.forEach(li_item => li_item.classList.remove("menu_item"));
			event.target.classList.add("menu_item");
			axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
			axios.get(event.target.pathname)
				.then(function (response) {
						inhalt.innerHTML = response.data;}); 
		} else if (event.target.id == "menu_mobile") {
			alert("mobile!");
	
		} else {
			axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
			axios.get(event.target.pathname)
			  .then(function (response) {
				inhalt.innerHTML = response.data;}); 
		}
	  }
	});
});


function get_menu_li_elements() {
	let menu_li_elements = [...menu.getElementsByTagName("LI")];
	let ul_elements_to_remove = [...menu.getElementsByTagName("UL")];
	ul_elements_to_remove.forEach(ul_element => ul_element.remove());
	return menu_li_elements
}

function reset_raw() {
  return {
	menu_li_elements: [...menu.getElementsByTagName("LI")],
	ul_elements: [...menu.getElementsByTagName("UL")],
	ul_elements_to_remove() {this.ul_elements
												.forEach(item => item.remove())},
	ul_navigation: document.createDocumentFragment(),
	}
}
