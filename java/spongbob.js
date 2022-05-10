let dt = new Date()
let ye = dt.getFullYear()
let mo = dt.getMonth()
let da = dt.getDay()
let hr = dt.getHours()
let mi = dt.getMinutes()

if (hr > 12) {
    hr = hr - 12
}
if (mi < 10) {
    mi = "0" + mi
}
document.getElementById('date-time').innerHTML =
    "year: " + ye + " \n" + "month: " + mo + " \n" +
"day: " + " \n" + da + "\n" + "hour: " + hr + " \n" +
"minite: " + " \n" + mi