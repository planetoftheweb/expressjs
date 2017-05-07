/*
	$.getJSON('http://localhost:3000/api/feedbacks').done(
		function (data) {
			console.log(data)
		}
	);
*/

/**************************
 * document on ready logic
 ************************ */

/*var chatBody = document.getElementById('chat-body');
console.log(chatBody, chatBody.scrollTop);

	chatBody.scrollTop = 26;*/
$('#chat-body').scrollTop($('#chat-body').prop('scrollHeight') - $('#chat-body').innerHeight());
var chatBody = document.getElementById('chat-body');

chatBody.scrollTop = chatBody.scrollHeight - chatBody.offsetHeight;
$(function () {
	/*
	console.log($('#chat-body').prop('scrollHeight'), $('#chat-body').height())
	$('#chat-body').scrollTop('100px');*/

	

	$.getJSON('http://localhost:3000/api/chats').done(function (data) {
		data.forEach(function(element) {
			$('#chat-messages').append(
				'<li><div class="single-message"><div class="person-avatar"><div class="img-placeholder"></div><span class="person-name">'+element.name+'</span></div><div class="message-body"><p>'+element.message+'</p><div class="message-date">'+element.date.toLocaleString().slice(11, 19)+'</div></div></div></li>');
		}, this);
	})
});

/* **************************
	socket io logic
***************************** */

	var io = io();

	io.on("connect", function() {
		console.log('might be connected..');
	});
	
	io.on('disconnection', function () {
		localStorage.removeItem('name');
	})

	io.on('test', function (data) {
		console.log("Data from server", data);
		io.emit("newTest", {name:"hosam", message: "message"});
	});

	io.on('someoneConnected', function () {
		console.log(localStorage.getItem('name')+" connected")
	});


	//localStorage.removeItem('name');
	var isName = localStorage.getItem('name');
	if(isName) {
		$('.chat-message-name').val(isName);
		$('.name-checker-found').text(isName);
		$('.name-checker').fadeOut(0);
	} else {
		$('#name-checked').fadeOut(0);
	}
	$('.chat-message-name').on('keyup', function(e){
		var name = '';
		if (e.which == 16) {
			name = $(this).val();
		}
		console.log(name);
		localStorage.setItem('name', name);
	});


	$('.chat-message-send').on('click', function(e){
		var chatMsg = $('.chat-message-control').val();
		if(chatMsg && isName) {
			e.preventDefault();
			//console.log(chatMsg);

			$('#chat-messages').append(
				'<li><div class="single-message"><div class="person-avatar"><div class="img-placeholder"></div><span class="person-name">'+isName+'</span></div><div class="message-body"><p>'+chatMsg+'</p><div class="message-date">'+Date.now()+'</div></div></div></li>');
			$('#chat-body').scrollTop($(this).scrollMaxY);
			console.log($('#chat-body').scrollTop());
			$('.chat-message-control').val('');
			$.post('http://localhost:3000/api/chats', {name:isName, message: chatMsg}).done(function (data){
				io.emit("send", data);
			});

		} else {
			$('.chat-message-control').focus();
		}
		//console.log(e);
		io.on('chat-message', function (data) {
			console.log(data);

			
			$('#chat-messages').append(
				'<li><div class="single-message"><div class="person-avatar"><div class="img-placeholder"></div><span class="person-name">'+data.name+'</span></div><div class="message-body"><p>'+data.message+'</p><div class="message-date">1/2/1976</div></div></div></li>');
			});
	});


