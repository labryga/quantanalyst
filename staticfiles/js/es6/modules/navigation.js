navigation.onclick = function(event) { 
	let lists = navigation.getElementsByTagName('UL');
	[].forEach.call(lists, item => item.style.display = "none");
	let list_title = event.target.dataset.navigationType;
	document.getElementById(list_title).style.display = "block"
};
