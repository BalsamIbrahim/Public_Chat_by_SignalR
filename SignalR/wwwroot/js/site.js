var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
connection.on("ReciveMessage", function (fromuser, message) {
    var msg = fromuser + ": " + message;
    var li = document.createElement("li");
    li.textContent = msg;
    $('#list').append(li);
});

connection.start();
$('#btnsend').click(function () {
    var fromuser = $('#txtuser').val();
    var fromtext = $('#txtmessage').val();

    connection.invoke("SendMessage", fromuser, fromtext );
});