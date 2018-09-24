var database = firebase.database();

function sendButton() {
    var x = document.getElementById("messbox").value;
    var a = document.getElementById("namebox").value;
    sendMessage(a, x);
}

function receivedMessage(mess) {
    document.getElementById("receivebox").value = mess.userName + "said: " + mess.message;
}

function sendMessage(userName, message) {
    database.ref('Message').set(
        userName,
        message
    )
}