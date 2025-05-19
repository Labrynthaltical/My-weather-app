async function Getmyweather() {
  try{
  let searcity = document.getElementById("cityname").value.toLowerCase();
  console.log(searcity)
  const linkin = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=${api_key}=${searcity}&days=7&aqi=no&alerts=no`)
  if(!linkin.ok){
    throw new Error("Please search correctly");
  }
  const infor = await linkin.json();
  console.log(infor);
  const nam = infor.location.name
  console.log(nam)
  const maxel = infor.forecast.forecastday[[0]].day.maxtemp_c
  console.log(maxel)
  const minnel = infor.forecast.forecastday[[0]].day.mintemp_c
  console.log(minnel)
let conditiona = infor.current.condition
let curtemp = infor.current.temp_c
console.log(curtemp)
let roundtemp = Math.round(curtemp)
console.log(roundtemp)
let skywawy = infor.current.condition.text
console.log(skywawy)
let icona = infor.current.condition.icon
let imageplace = document.getElementById("imagaro")
imageplace.src = icona
document.getElementById("namedcity").innerHTML = nam
document.getElementById("currenttemp").innerHTML = roundtemp + ("	&#730;")
document.getElementById("minitemp").innerHTML = ("min : ") + Math.round(minnel) + ("	&#730;")
document.getElementById("maxtemp").innerHTML = ("max : ") + Math.round(maxel) + ("	&#730;")
console.log(infor.forecast.forecastday[[1]].day.maxtemp_c)
// next day min temp
const nextdaymintemp = infor.forecast.forecastday[[1]].day.mintemp_c
console.log(Math.round(nextdaymintemp) + " is the min temp of the next day") 
// next day max temp
const nextdaymaxtemp = infor.forecast.forecastday[[1]].day.maxtemp_c
console.log(Math.round(nextdaymaxtemp) + " is the max temp of the next day")
// day after next day min temp
const nextnextdaymintemp = infor.forecast.forecastday[[2]].day.mintemp_c
console.log(Math.round(nextnextdaymintemp) + " is the min temp for the day after the next day")
// day after next day max temp
const nextnextdaymaxtemp =infor.forecast.forecastday[[2]].day.maxtemp_c
console.log(Math.round(nextnextdaymaxtemp) + " is the max temp for the day after the next day")
// weather condition icons for the next two days
const icona1 = infor.forecast.forecastday[[1]].day.condition.icon
console.log(icona1)
const icona1place = document.getElementById("nextdaycon")
const icona2 = infor.forecast.forecastday[[2]].day.condition.icon
console.log(icona2)
const icona2place = document.getElementById("nextnextdaycon")

let dated = new Date();
let dateday = dated.getDay();

// Get the next day (tomorrow) and the day after that (lemon day)
let orange = (dateday + 1) % 7; // Tomorrow
let lemon = (orange + 1) % 7; // Day after tomorrow

console.log(dateday + "   is the current day");
console.log(orange + "   is the day after that");
console.log(lemon + "   is the day after that after day");

// Output the current day of the week
if (dateday === 0) {
  console.log("sunday");
} else if (dateday === 1) {
  console.log("monday");
} else if (dateday === 2) {
  console.log("tuesday");
} else if (dateday === 3) {
  console.log("wednesday");
} else if (dateday === 4) {
  console.log("thursday");
} else if (dateday === 5) {
  console.log("friday");
} else if (dateday === 6) {
  console.log("saturday");
}

// Output tomorrow's day of the week
if (orange === 0) {
  console.log("tmrw is sunday");
  document.getElementById("nextday").innerHTML = ("sunday" + Math.round(nextdaymintemp)+("	&#730;") +("/")+  Math.round(nextdaymaxtemp)+("	&#730;"))
  icona1place.src = icona1
} else if (orange === 1) {
  console.log("tmrw is monday");
  document.getElementById("nextday").innerHTML = ("monday" + Math.round(nextdaymintemp)+("	&#730;") +("/")+  Math.round(nextdaymaxtemp)+("	&#730;"))
  icona1place.src = icona1
} else if (orange === 2) {
  console.log("tmrw is tuesday");
  document.getElementById("nextday").innerHTML = ("tuesday" + Math.round(nextdaymintemp)+("	&#730;") +("/")+  Math.round(nextdaymaxtemp)+("	&#730;"))
  icona1place.src = icona1
} else if (orange === 3) {
  console.log("tmrw is wednesday");
  document.getElementById("nextday").innerHTML = ("wednesday" + Math.round(nextdaymintemp)+("	&#730;") +("/")+  Math.round(nextdaymaxtemp)+("	&#730;"))
  icona1place.src = icona1
} else if (orange === 4) {
  console.log("tmrw is thursday");
  document.getElementById("nextday").innerHTML = ("thursday" + Math.round(nextdaymintemp)+("	&#730;") +("/")+  Math.round(nextdaymaxtemp)+("	&#730;"))
  icona1place.src = icona1
} else if (orange === 5) {
  console.log("tmrw is friday");
  document.getElementById("nextday").innerHTML = ("friday" + Math.round(nextdaymintemp)+("	&#730;") +("/")+  Math.round(nextdaymaxtemp)+("	&#730;"))
  icona1place.src = icona1
} else if (orange === 6) {
  console.log("tmrw is saturday");
  document.getElementById("nextday").innerHTML = ("saturday" + Math.round(nextdaymintemp)+("	&#730;") +("/")+  Math.round(nextdaymaxtemp)+("	&#730;"))
  icona1place.src = icona1
}

// Output the day after tomorrow's day of the week
if (lemon === 0) {
  console.log("tmrw after is sunday");
  document.getElementById("nextnextday").innerHTML = ("sunday" + Math.round(nextnextdaymintemp)+("	&#730;") +("/")+  Math.round(nextnextdaymaxtemp)+("	&#730;"))
  icona2place.src = icona2
} else if (lemon === 1) {
  console.log("tmrw after is monday");
  document.getElementById("nextnextday").innerHTML = ("monday" + Math.round(nextnextdaymintemp)+("	&#730;") +("/")+  Math.round(nextnextdaymaxtemp)+("	&#730;"))
  icona2place.src = icona2
} else if (lemon === 2) {
  console.log("tmrw after is tuesday");
  document.getElementById("nextnextday").innerHTML = ("tuesday" + Math.round(nextnextdaymintemp)+("	&#730;") +("/")+  Math.round(nextnextdaymaxtemp)+("	&#730;"))
  icona2place.src = icona2
} else if (lemon === 3) {
  console.log("tmrw after is wednesday");
  document.getElementById("nextnextday").innerHTML = ("wednesday" + Math.round(nextnextdaymintemp)+("	&#730;") +("/")+  Math.round(nextnextdaymaxtemp)+("	&#730;"))
  icona2place.src = icona2
} else if (lemon === 4) {
  console.log("tmrw after is thursday");
  document.getElementById("nextnextday").innerHTML = ("thursday" + Math.round(nextnextdaymintemp)+("	&#730;") +("/")+  Math.round(nextnextdaymaxtemp)+("	&#730;"))
  icona2place.src = icona2
} else if (lemon === 5) {
  console.log("tmrw after is friday");
  document.getElementById("nextnextday").innerHTML = ("friday" + Math.round(nextnextdaymintemp)+("	&#730;") +("/")+  Math.round(nextnextdaymaxtemp)+("	&#730;"))
  icona2place.src = icona2
} else if (lemon === 6) {
  console.log("tmrw after is saturday");
  document.getElementById("nextnextday").innerHTML = ("saturday" + Math.round(nextnextdaymintemp)+("	&#730;") +("/")+  Math.round(nextnextdaymaxtemp)+("	&#730;"))
  icona2place.src = icona2
}
document.getElementById("hidern").style.display = "inline"
}


catch (error){
  console.log(error);
}
}
