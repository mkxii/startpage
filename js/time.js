displayDateTime();

setInterval(function () {
    displayDateTime();
}, 1000);

function displayDateTime() {
    var now = new Date();

    var h = (now.getHours() < 10) ? '0' + now.getHours() : now.getHours();
    var m = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes();
    var s = (now.getSeconds() < 10) ? '0' + now.getSeconds() : now.getSeconds();

    document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
    document.getElementById('date').innerHTML = now.toDateString();
}