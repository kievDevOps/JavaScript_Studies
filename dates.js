//  date objects = objects that contain values that represent dates and times.
//  These date objects can be changed and formatted.

//  Date(year, month, day, hour, minute, second, ms)
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();
console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);
