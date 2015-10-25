var data = [{
  axes: [
    {axis: ''},
    {axis: ''},
    {axis: ''},
    {axis: ''},
    {axis: ''},
    {axis: ''},
    {axis: ''},
    {axis: ''},
    {axis: ''},
    {axis: ''},
    {axis: ''},
    {axis: ''},
    {axis: ''}
  ]
}];

var chart = RadarChart.chart();

var svg = d3.select('.chart-container').append('svg')
    .attr('width', 1500)
    .attr('height', 1500);

svg.append('g').classed('focused', 1).datum(data).call(chart);
