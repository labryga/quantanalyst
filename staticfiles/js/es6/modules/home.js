
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
