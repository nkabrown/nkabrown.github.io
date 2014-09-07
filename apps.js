$(document).ready(function() {
	$("#iteminput").keydown(function(e) {
		if (e.keyCode == 13) {
			var shopitem = $("input").text();
			$("#list").prepend('<p>'+shopitem+'</p>');
		}
	});
	$(".item").on('click', '.btn_check', function() {
		var item = $(this).closest('.item').css({
			'background-color': '#007051',
			'text-decoration': 'line-through'
		});
	});
	$(".item").on('click', '.btn_x', function() {
		$(this).closest('.item').remove();
	});
});