var time, date;
var a;
var clock = document.querySelector("#time");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
    a = new Date();
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  date = a.toLocaleDateString(undefined, options);
  clock.innerHTML =` ${time}  ${date}`;
}, 1000);
