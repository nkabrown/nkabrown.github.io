$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show();
			$('.hadouken').animate({
				'left': '300px'
				},
				500,
				function(){
					$(this).hide();
					$(this).css('left', '-206px');
				}
			);
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
	$(document).on('keydown', function(e){
		e.stopPropagation();
		eventType = e.which
		if (e.which == 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	});
	$(document).on('keyup', function(e){
		e.stopPropagation();
		eventType = e.which
		if (e.which == 88){
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
});