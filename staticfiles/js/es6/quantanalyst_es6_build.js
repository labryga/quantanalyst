
let data = [4, 8, 16, 16, 26, 42];

let width = 420, barHeight = 20;

let x = d3.scaleLinear()
			.domain([0, d3.max(data)])
			.range([0, width]);

let chart = d3.select('.chart')
			.attr('widt', width)
			.attr('height', barHeight * data.length);

let bar = chart.selectAll('g')
				.data(data)
			.enter().append('g')
				.attr('transform', function(d, i) { return 'translate(0,' + i * barHeight + ')'; });
								

bar.append('rect')
		.attr('width', x)
		.attr('height', barHeight - 1);

// bar.append('text')
// 		.attr('x', function(d) { return x(d) - 20; })
// 		.attr('y', barHeight / 2)
// 		.attr('dy', '.4em')
// 		.attr('font-size', '0.8em')
// 		.text(function(d) { return d; });


bar.append('text')
		.attrs({
			'x': function(d) { return x(d) - 20; },
			'y': (barHeight / 2),
			'dy': '0.4em',
			'font-size': '0.8em',
			'text': function(d) { return d; } });

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

