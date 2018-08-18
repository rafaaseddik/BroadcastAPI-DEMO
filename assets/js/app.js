//Broadcast channel Object
var channel = new BroadcastChannel("<-- Channel Name -->")

function init() {
    document.getElementById("log-box").innerHTML = "<div class=\"text-warning\">Session started :</div>";
    channel.onmessage = function (event) {
        let receivedObj = JSON.parse(event.data)
        document.getElementById("log-box").innerHTML += "<div>"+ receivedObj.source+" : " + receivedObj.message + "</div>";
    }
}

function openIframe(){
    document.getElementById("slave-frame").src="slave.html";
    document.getElementById("slave-frame").style.display="block";
    document.getElementById("placeholder-frame").style.display="none";

}
function sendEventAsMaster() {
    let sendObj = {
        message: document.getElementById("msg").value,
        source: "Master"
    }
    channel.postMessage(JSON.stringify(sendObj))
}

function sendEventAsSlave() {
    let sendObj = {
        message: document.getElementById("msg").value,
        source: "Slave"
    }
    channel.postMessage(JSON.stringify(sendObj))
}