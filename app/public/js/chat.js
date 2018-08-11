let chatForm = document.forms.chatForm;

if (chatForm) {
  let chatUsername = document.querySelector('#chat-username');
  let chatMessage = document.querySelector('#chat-message');

  chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    showMessage({
      username: chatUsername.value,
      message: chatMessage.value,
    });
    chatMessage.value='';
    chatMessage.focus();
  });
}

function showMessage(data) {
  let chatDisplay = document.querySelector('.chat-display');
  let newMessage = document.createElement('p');
  newMessage.className = 'bg-success chat-text';
  newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
  chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}
