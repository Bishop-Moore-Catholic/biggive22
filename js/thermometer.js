var tag = function () {
    var a = {};
    var b = window.location.search.substring(1);
    var vars = b.split("&");

    for (var c = 0; c < vars.length; c++) {
        var d = vars[c].split("=");

        if (typeof a[d[0]] === "undefined") {
            a[d[0]] = decodeURIComponent(d[1]);
        } else if (typeof a[d[0]] === "string") {
            var e = [a[d[0]], decodeURIComponent(d[1])];
            a[d[0]] = e;
        } else {
            a[d[0]].push(decodeURIComponent(d[1]));
        }
    }

    return a;
}();

var percentage = Math.floor((tag.current / tag.goal) * 100);
console.log(percentage);

$('.progress-bar').css('width', `${percentage}%`);
$('.progress-bar').text(`${percentage}%`);

