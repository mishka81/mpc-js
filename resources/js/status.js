var mpdsocket = new goog.net.WebSocket();
goog.events.listen(mpdsocket, goog.net.WebSocket.EventType.MESSAGE, updateStatus);
mpdsocket.open('ws://localhost:8080');

function updateStatus(messageEvent) {
	var status = JSON.parse(messageEvent.message);
	var volumeElem = document.getElementById('volume');
	volumeElem.innerHTML = status.volume;
}