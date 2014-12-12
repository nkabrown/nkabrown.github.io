$(document).ready(function() {
	$("input").keydown(function(e) {
		if (e.keyCode == 13) {
			event.preventDefault();
			var shopItem = $("input").val();
			var listItem = $('<li class="item"><img class="btn_check" src="images/check.png">'+shopItem+'<img class="btn_x" src="images/x.png"></li>')
			$(".list").append(listItem);
			$(".iteminput").val('').empty();
		}
	});
	$(document).on('click', '.btn_check', function() {
		var item = $(this).closest('.item').css({
			'background-color': '#007051',
			'text-decoration': 'line-through'
		});
	});
	$(document).on('click', '.btn_x', function() {
		$(this).closest('.item').remove();
	});
});
