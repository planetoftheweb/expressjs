$(function(){
	$("#social-icons").find('li i').on('click', function(){
		$("#social-icons").find('li i')
			.removeClass('hovered');
		$(this)
			.addClass('hovered');


		var info = $(this).data('info');
		$('#icons-info').text(info).fadeIn()
	});
});