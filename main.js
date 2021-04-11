// ===========================Global Variables=================================
var show_langs_btn = document.querySelector('.show-langs-btn');
var all_langs = document.querySelector('.all-langs');
var lang_displayed_now = document.querySelector('.lang-displayed-now');
var city_input = document.querySelector('.city_input');
var city_search = document.querySelector('.city_search');
var my_location = document.querySelector('.my_location');
var location_determine = document.querySelector('.location_determine');

// ------------  previous cities -----------------
var prev_cities = document.querySelector('.prev-cities')

// ==============LocalStorage===================
var update_weather_to_locastorage = {}
var weather_from_localstorage = {}

if(window.localStorage){
    if(!localStorage.weather){
        localStorage.setItem('weather', JSON.stringify(weather_from_localstorage))
    }

    let weather_come_from_localstorage = JSON.parse(localStorage.getItem('weather'))
   
    for(let weatherCity in weather_come_from_localstorage){
        let textnode = document.createTextNode(weatherCity);
        let suggestedCity = document.createElement("div");

        suggestedCity.setAttribute('data-city-location', `${weather_come_from_localstorage[weatherCity].lat},${weather_come_from_localstorage[weatherCity].long}`)

        suggestedCity.appendChild(textnode)
        prev_cities.appendChild(suggestedCity)
    }
    
}

city_input.onfocus = function(){
    prev_cities.classList.add('active')
}
document.querySelector('.close-suggests').onclick = ()=>{
    prev_cities.classList.remove('active')
}

prev_cities_elements = prev_cities.querySelectorAll('div');


if(window.localStorage){
    if(!localStorage.weather){
        localStorage.setItem('weather', JSON.stringify(weather_from_localstorage))
    }

    let weather_come_from_localstorage = JSON.parse(localStorage.getItem('weather'))
   
    for(let weatherCity in weather_come_from_localstorage){
        let textnode = document.createTextNode(weatherCity);
        let suggestedCity = document.createElement("div");

        suggestedCity.setAttribute('data-city-location', `${weather_come_from_localstorage[weatherCity].lat},${weather_come_from_localstorage[weatherCity].long}`)

        suggestedCity.appendChild(textnode)
        prev_cities.appendChild(suggestedCity)
    }
    
}


var key = `bdc44217202a8f5ba4ed6ab4fb1ece0c`;
var api_current;
var api_forecast;


var body_lang = document.body.lang;
var body_dir = document.body.dir;
var long;
var lat;
var prayer_long;
var prayer_lat;

var side_menu = document.querySelector(".side-menu");
var menu_bars = document.querySelector(".menu_bars");

show_langs_btn.onclick = function(){
    all_langs.classList.toggle('active')
}
menu_bars.onclick = function(){
    side_menu.classList.toggle('active');
}

var display_weather_prayer_info = document.querySelector(".display-weather-prayer-info");
var weather_lable = document.querySelector(".weather-lable");
var weather_area = document.querySelector(".weather-area");

var prayer_lable = document.querySelector(".prayer-lable ");
var prayer_timings = document.querySelector(".prayer-timings");

prayer_lable.addEventListener('click', ()=>{
    prayer_timings.classList.add('full-screen-mood')
    prayer_timings.classList.remove('min-screen-mood')
    weather_area.classList.add('min-screen-mood')
    prayer_lable.classList.remove('active')
    weather_lable.classList.add('active')
    display_weather_prayer_info.style.flexDirection = 'column-reverse';
})

weather_lable.addEventListener('click', ()=>{
    weather_area.classList.add('full-screen-mood')
    weather_area.classList.remove('min-screen-mood')
    prayer_timings.classList.add('min-screen-mood')
    weather_lable.classList.remove('active')
    prayer_lable.classList.add('active')
    display_weather_prayer_info.style.flexDirection = 'column';
})

window.onresize = ()=>{
    if(window.innerWidth > 768){
        display_weather_prayer_info.style.flexDirection = 'row';
    }else{
        display_weather_prayer_info.style.flexDirection = 'column';
    }
}

var weather_Header = document.querySelector(".weather-title h1");
weather_Header.onclick = function(){
    // options.classList.toggle('show')
}

var en_btn = document.querySelector(".en_btn");
var ar_btn = document.querySelector(".ar_btn");


var display_area = document.querySelector(".display-area");
var location_display = document.querySelector(".location_display");
var location_determine = document.querySelector(".location_determine");
var btn_show_location_input = document.querySelector(".btn_show_location_input");
var show_determine_location_icon = document.querySelector(".show_determine_location_icon i");
var city = document.querySelector(".city"); 
var country = document.querySelector(".country"); 
var icon = document.querySelector(".icon"); 
var description = document.querySelector(".description"); 
var act_temp = document.querySelector(".act-temp"); 
var feel_temp = document.querySelector(".feel-temp");
var rain_amount = document.querySelector(".rain_amount");
// var d_rain_chance = document.querySelector(".rain_cahnce"); 

location_display.onclick = ()=>{
    location_determine.classList.toggle('show');
    location_display.classList.toggle('active');
}

var pressure = document.querySelector(".pressure"); 
var humidity = document.querySelector(".humidity"); 
var visibility = document.querySelector(".visibility"); 
var Wind_Speed = document.querySelector(".speed"); 
var Wind_Direction = document.querySelector(".direction"); 
var stored_current = document.querySelector('.current');
var stored_current_el = document.querySelectorAll('.current div');
var options = document.querySelector(".options");
var options_elements = document.querySelectorAll(".options div");
var header_elements = document.querySelectorAll(".display_header div");
var header_btn_now = document.querySelector(".now");
var header_btn_48hours = document.querySelector("._48hours");
var header_btn_8days = document.querySelector("._8days");

var pre = document.querySelector('.pre');
var next = document.querySelector('.next');



// Activate header_btn_Elements when it is clicked
function active_header_btn_elements(active_element){
    header_elements.forEach(element => {
        element.classList.remove('active');
        active_element.classList.add('active');
    });
}


// function convert wind_direction into english_text
var txt_dirction;
function en_text_deriction(dirction){
    if(dirction == 0 || dirction == 360){
        txt_dirction = "N"
    }else if(dirction == 90){
        txt_dirction = "E"
    }else if(dirction == 180){
        txt_dirction = "S"
    }else if(dirction == 270){
        txt_dirction = "W"
    }else if(dirction > 0 && dirction < 90){
        txt_dirction = "NE"
    }else if(dirction > 90 && dirction < 180){
        ditxt_dirctionrction = "SE"
    }else if(dirction > 180 && dirction < 270){
        txt_dirction = "SW"
    }else if(dirction > 270 && dirction < 360){
        txt_dirction = "NW"
    }
}
// function convert wind_direction into arabic_text
function ar_text_deriction(dirction){
    if(dirction == 0 || dirction == 360){
        txt_dirction = "شمالية"
    }else if(dirction == 90){
        txt_dirction = "شرقية"
    }else if(dirction == 180){
        txt_dirction = "جنوبية"
    }else if(dirction == 270){
        txt_dirction = "غربية"
    }else if(dirction > 0 && dirction < 90){
        txt_dirction = "شمالية شرقية"
    }else if(dirction > 90 && dirction < 180){
        ditxt_dirctionrction = "جنوبية شرقية"
    }else if(dirction > 180 && dirction < 270){
        txt_dirction = "جنوبية غربية"
    }else if(dirction > 270 && dirction < 360){
        txt_dirction = "شمالية غربية"
    }
}

// Week Days
var ar_week_days = [
                "الأحد", 
                "الإثنين",
                "الثلاثاء", 
                "الأربعاء", 
                "الخميس", 
                "الجمعة",
                "السبت"
]

var en_week_days = [
                "Sun", 
                "Mon",
                "Tue", 
                "Wed", 
                "Thu", 
                "Fri",
                "Sat"
]

var en_params = {
"t": "Temperature",
"ft": "Fells",
"tx": "Max",
"tm": "Min",
"p": "Preasure",
"h": "Humidty",
"v": "Visibilty",
"ws": "Wind",
"wd": "",
"p_unit": "hpa",
"v_unit": "km",
"ws_unit": "km/hour",
"percip_chance": "rain chance",
"percip_day_amount": "rain volume",
"percip_amount": "rain volume",
"percip_amount1h": "rain_(last 1 hour)",
"percip_amount3h": "rain_(last 3 hour)",
"percip_unit": "mm"
}

var ar_params = {
"t": "درجة الحرارة",
"ft": "محسوسة",
"tx": "عظمى",
"tm": "صغرى",
"p": "الضغط الجوي",
"h": "الرطوبة النسبية",
"v": "الرؤية الأفقية",
"ws": "الرياح",
"wd": "",
"p_unit": "مللي بار",
"v_unit": "كم",
"ws_unit": "كم/س",
"percip_chance": "إحتمال سقوط مطر",
"percip_day_amount": "كمية الأمطار",
"percip_amount": "كمية الأمطار",
"percip_amount1h": "أمطار ساعة ماضية",
"percip_amount3h": "أمطار 3 ساعات ماضية",
"percip_unit": "ملليمتر"
}


// ================Current_Weather_Function============================

// set general current_weather function
function current_weather(params, data, text_deriction){
    
    document.querySelectorAll(".display_header div").forEach(element => {
        element.classList.remove('active');
        document.querySelector(".now").classList.add('active');
    });

    document.querySelectorAll('.weather-data div').forEach(element => {
        element.classList.remove('show');
    });
    document.querySelector('.current').classList.add('show');
    
    icon.innerHTML = `<img src ="./icons/${data.weather[0].icon}.png">`;
    // icon.innerHTML = `<img src ="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    description.textContent = data.weather[0].description;

    act_temp.innerHTML =`<span>${params.t} : </span> <bdi><span>${Math.round(data.main.temp)} <sup>o</sup>C</span></bdi>`;
    feel_temp.innerHTML =`<span>${params.ft} : </span> <bdi><span>${Math.round(data.main.feels_like)}  <sup>o</sup>C</span></bdi>`;
    rain_amount.innerHTML =data["rain"]? data.rain["1h"] ? `<span>${params.percip_amount1h}: </span> <span>${data.rain["1h"]} ${params.percip_unit}</span>` : `<span>${params.percip_amount3h}: </span> <span>${data.rain["3h"]} ${params.percip_unit}</span>` : `<span>${params.percip_amount3h}: </span> <span> 0 ${params.percip_unit}</span>`;
    pressure.innerHTML =`<span>${params.p} : </span> <span>${data.main.pressure} ${params.p_unit}</span>`;
    humidity.innerHTML = `<span>${params.h} : </span> <span>${data.main.humidity} %</span>`;
    visibility.innerHTML = `<span>${params.v} : </span> <span>${Math.round(data.visibility/1000)}  ${params.v_unit}</span>`;
    var dirction = data.wind.deg;
    text_deriction(dirction);
    Wind_Speed.innerHTML = `<span> ${params.ws} : </span>`;
    
    Wind_Direction.innerHTML = `<span>( ${Math.round(data.wind.speed*3.6)} ${params.ws_unit} ) - ${txt_dirction}</span>`;
    // Wind_Direction.innerHTML = `<span>${params.wd} : </span> <span>${txt_dirction}</span>`;
}

function current_weather_for_manual(params, data, text_deriction){
    
    document.querySelectorAll(".display_header div").forEach(element => {
        element.classList.remove('active');
        document.querySelector(".now").classList.add('active');
    });

    document.querySelectorAll('.weather-data div').forEach(element => {
        element.classList.remove('show');
    });
    document.querySelector('.current').classList.add('show');
    

    
    // icon.innerHTML = `<img src ="https:${data.current.condition.icon}">`;
    description.textContent = data.current.condition.text;

    act_temp.innerHTML =`<span>${params.t} : </span> <bdi><span>${Math.round(data.current.temp_c)} <sup>o</sup>C</span></bdi>`;
    feel_temp.innerHTML =`<span>${params.ft}: </span> <bdi><span>${Math.round(data.current.feelslike_c)}  <sup>o</sup>C</span></bdi>`;

    rain_amount.innerHTML = `<span>${params.percip_amount}: </span> <span> ${data.current.precip_mm} ${params.percip_unit}</span>`;
    
    pressure.innerHTML =`<span>${params.p} : </span> <span>${data.current.pressure_mb} ${params.p_unit}</span>`;
    humidity.innerHTML = `<span>${params.h} : </span> <span>${data.current.humidity} %</span>`;
    visibility.innerHTML = `<span>${params.v} : </span> <span>${Math.round(data.current.vis_km)}  ${params.v_unit}</span>`;
    Wind_Speed.innerHTML = `<span> ${params.ws} : </span> <span>${Math.round(data.current.wind_kph)} ${params.ws_unit}</span>`;
    var dirction = data.current.wind_degree;
    text_deriction(dirction);
    Wind_Direction.innerHTML = `<span>${params.wd} : </span> <span>${txt_dirction}</span>`;
}


// ================Hourly_Weather_Function============================

var ar_week_days = [
    "الأحد", 
    "الإثنين",
    "الثلاثاء", 
    "الأربعاء", 
    "الخميس", 
    "الجمعة",
    "السبت"
]
var en_week_days = [
    "Sun", 
    "Mon",
    "Tue", 
    "Wed", 
    "Thu", 
    "Fri",
    "Sat"
]

var ar_pm_and_am= {
    am: "صباحا",
    pm: "مساء"
}
var en_pm_and_am = {
    am : "am",
    pm : "pm"
}

var ar_today_tommorow = {
    Today : "اليوم",
    Tommorow : "غداً"
}
var en_today_tommorow = {
    Today: "Today",
    Tommorow: "Tommorow"
}

function hourly_forecast(pm_and_am, week_days, params, text_deriction, today_tommorow, data){

    var hourly_forecast = document.querySelector('.hourly-forecast');
    var hourElement = document.querySelector('.hours');
    document.querySelector('.hours').remove();

    // activate display_header (48-Hours) button
    document.querySelectorAll(".display_header div").forEach(element => {
        element.classList.remove('active');
        header_btn_48hours.classList.add('active');
    });

    document.querySelectorAll('.weather-data div').forEach(element => {
        element.classList.remove('show');
    });
    hourly_forecast.classList.add('show');

    hourly_forecast.innerHTML = '';

    //create 48 element for 48 hour-forecast
    for (let i=0; i<48; i++){
        var newHourElement = hourElement.cloneNode(true);
        hourly_forecast.appendChild(newHourElement);
        var h = hourly_forecast.children[i].querySelector('.h');
        var day_name = hourly_forecast.children[i].querySelector('.day_name');
        var h_temp = hourly_forecast.children[i].querySelector('.h-temp');
        var h_icon = hourly_forecast.children[i].querySelector('.h-icon');

        let hour = +(data.hourly[i].dt+'000');
        let newHour = new Date(hour).getHours();

        h.innerHTML = newHour==12? `${newHour} ${pm_and_am.pm}`: newHour>12? (newHour-12)<10? `0${newHour-12} ${pm_and_am.pm}`:`${newHour-12} ${pm_and_am.pm}`: newHour<10? `0${newHour} ${pm_and_am.am}`: `${newHour} ${pm_and_am.am}`;

        let newDay = new Date(hour).getDay();
        day_name.innerHTML =`${week_days[newDay]}`;

        if(new Date(hour).getDate() === new Date().getDate()){
            day_name.innerHTML = today_tommorow.Today;
        }
        if(new Date(hour).getDate() === new Date().getDate()+1){
            day_name.innerHTML = today_tommorow.Tommorow;
        }
        h_temp.innerHTML = `${Math.round(data.hourly[i].temp)} <sup>o</sup>C`;
        h_icon.innerHTML = `<img src ="icons/${data.hourly[i].weather[0].icon}.png">`;

        var hour_icon = hourly_forecast.children[i].querySelector('.icon');
        var hour_description = hourly_forecast.children[i].querySelector('.description');
        var hour_act_temp = hourly_forecast.children[i].querySelector('.act-temp');
        var hour_feel_temp = hourly_forecast.children[i].querySelector('.feel-temp');
        var hour_rain_amount = hourly_forecast.children[i].querySelector('.rain_amount');
        var hour_speed = hourly_forecast.children[i].querySelector('.speed');
        var hour_direction = hourly_forecast.children[i].querySelector('.direction');
        var hour_humidity = hourly_forecast.children[i].querySelector('.humidity');
        var hour_visibility = hourly_forecast.children[i].querySelector('.visibility');
        var hour_pressure = hourly_forecast.children[i].querySelector('.pressure');

        hour_icon.innerHTML = `<img src ="https://openweathermap.org/img/wn/${data.hourly[i].weather[0].icon}@2x.png">`;
        hour_description.textContent = data.hourly[i].weather[0].description;

        hour_act_temp.innerHTML =`<span>${params.t} : </span> <bdi><span>${Math.round(data.hourly[i].temp)} <sup>o</sup>C</span></bdi>`;
        hour_feel_temp.innerHTML =`<span>${params.ft}: </span> <bdi><span>${Math.round(data.hourly[i].feels_like)}  <sup>o</sup>C</span></bdi>`;


        hour_rain_amount.innerHTML = data.rain ?
         (data.rain["1h"] ? 
         `<span>${params.percip_amount}: </span> <span>${data.rain["1h"]} ${params.percip_unit}</span>` : `<span>${params.percip_amount}: </span> <span>${data.rain["3h"]} ${params.percip_unit}</span>`)
          : 
          `<span>${params.percip_amount}: </span> <span> 0 ${params.percip_unit}</span>`;


        hour_pressure.innerHTML =`<span>${params.p} : </span> <span>${data.hourly[i].pressure} ${params.p_unit}</span>`;
        hour_humidity.innerHTML = `<span>${params.h} : </span> <span>${data.hourly[i].humidity} %</span>`;
        hour_visibility.innerHTML = `<span>${params.v} : </span> <span>${Math.round(data.hourly[i].visibility/1000)}  ${params.v_unit}</span>`;

        var dirction = data.hourly[i].wind_deg;
        text_deriction(dirction);
        hour_speed.innerHTML = `<span> ${params.ws} : </span> `;
        hour_direction.innerHTML = `<span>( ${Math.round(data.hourly[i].wind_speed*3.6)} ${params.ws_unit} )</span> </span>-<span>${txt_dirction}</span>`;


    }

    var hour_datails = hourly_forecast.querySelectorAll('.current');
    var hour_summary = hourly_forecast.querySelectorAll('summary');

    for(let i=0; i<48; i++){
        hour_summary[i].onclick = function(){
            for(let j=0; j<48; j++){
                hour_datails[j].classList.remove('show');
            }
            hour_datails[i].classList.toggle('show');
        }
    }
    
}
        
function hourly_forecast_for_manual(pm_and_am, week_days, params, today_tommorow, data){
    

    var hourly_forecast = document.querySelector('.hourly-forecast');
    var hourElement = document.querySelector('.hours');
    document.querySelector('.hours').remove();

    // activate display_header (48-Hours) button
    document.querySelectorAll(".display_header div").forEach(element => {
        element.classList.remove('active');
        header_btn_48hours.classList.add('active');
    });

    document.querySelectorAll('.weather-data div').forEach(element => {
        element.classList.remove('show');
    });
    hourly_forecast.classList.add('show');

    hourly_forecast.innerHTML = '';

    //create 48 element for 48 hour-forecast
    for (let i=0; i<48; i++){
        var newHourElement = hourElement.cloneNode(true);
        hourly_forecast.appendChild(newHourElement);
    }

    var h = hourly_forecast.querySelectorAll('.h');
    var day_name = hourly_forecast.querySelectorAll('.day_name');
    var h_temp = hourly_forecast.querySelectorAll('.h-temp');
    var h_icon = hourly_forecast.querySelectorAll('.h-icon');

    var begin_hour = +(data.current.last_updated[11] + data.current.last_updated[12]);
    var newHour;

    // first day (today)
    for(let i=0; i<(24 - begin_hour); i++){
        newHour = begin_hour+i;
        h[i].innerHTML = newHour==12? `${newHour} ${pm_and_am.pm}`: newHour>12? (newHour-12)<10? `0${newHour-12} ${pm_and_am.pm}`:`${newHour-12} ${pm_and_am.pm}`: newHour<10? `0${newHour} ${pm_and_am.am}`: `${newHour} ${pm_and_am.am}`;

        day_name[i].innerHTML =`${today_tommorow.Today}`;

        h_temp[i].innerHTML = `${Math.round(data.forecast.forecastday[0].hour[newHour].temp_c)} <sup>o</sup>C`;
        h_icon[i].innerHTML = `<img src ="https:${data.forecast.forecastday[0].hour[newHour].condition.icon}">`;
    }

    // second day (tomorrow)
    for(let i=(24 - begin_hour); i<(48 - begin_hour); i++){
        newHour = (begin_hour+i)%24;
        h[i].innerHTML = newHour==12? `${newHour} ${pm_and_am.pm}`: newHour>12? (newHour-12)<10? `0${newHour-12} ${pm_and_am.pm}`:`${newHour-12} ${pm_and_am.pm}`: newHour<10? `0${newHour} ${pm_and_am.am}`: `${newHour} ${pm_and_am.am}`;

        day_name[i].innerHTML =`${today_tommorow.Tommorow}`;

        h_temp[i].innerHTML = `${Math.round(data.forecast.forecastday[1].hour[newHour].temp_c)} <sup>o</sup>C`;
        h_icon[i].innerHTML = `<img src ="https:${data.forecast.forecastday[1].hour[newHour].condition.icon}">`;
    }

    // third day
    for(let i=(48 - begin_hour); i<48; i++){
        newHour = (begin_hour+i)%24;
        h[i].innerHTML = newHour==12? `${newHour} ${pm_and_am.pm}`: newHour>12? (newHour-12)<10? `0${newHour-12} ${pm_and_am.pm}`:`${newHour-12} ${pm_and_am.pm}`: newHour<10? `0${newHour} ${pm_and_am.am}`: `${newHour} ${pm_and_am.am}`;

        var date = new Date().getDay();

        day_name[i].innerHTML = `${week_days[(date+2)%7]}`;

        h_temp[i].innerHTML = `${Math.round(data.forecast.forecastday[2].hour[newHour].temp_c)} <sup>o</sup>C`;
        h_icon[i].innerHTML = `<img src ="https:${data.forecast.forecastday[2].hour[newHour].condition.icon}">`;
    }
        
}

// ================Daily_Weather_Function============================

function date_header(data, i, the_day, week_days, today_tommorow){

    let day = +(data.daily[i].dt+'000');
    let newDay = new Date(day).getDay();
    let newDate = new Date(day).toISOString().substring(0, 10);
    the_day.innerHTML = `${week_days[newDay]} <br><small>${newDate}</small>`;

    if(i === 0){
        the_day.innerHTML = `${today_tommorow.Today} <br><small>${newDate}</small>`;
    }
    if(i === 1){
        the_day.innerHTML = `${today_tommorow.Tommorow} <br><small>${newDate}</small>`;
    }
    
}

function daily_inner_elements(data, i, params, text_deriction){

    var d_icon = document.querySelector(".daily-forecast .icon");
    var d_description = document.querySelector(".daily-forecast .description"); 
    var max_temp = document.querySelector(".daily-forecast .max-temp"); 
    var min_temp = document.querySelector(".daily-forecast .min-temp"); 
    var rain_cahnce = document.querySelector(".daily-forecast .rain_cahnce"); 
    rain_cahnce.style.display = "none";
    var d_rain_amount = document.querySelector(".daily-forecast .rain_amount"); 
    var d_pressure = document.querySelector(".daily-forecast .pressure"); 
    var d_humidity = document.querySelector(".daily-forecast .humidity"); 
    var d_Wind_Speed = document.querySelector(".daily-forecast .speed"); 
    var d_Wind_Direction = document.querySelector(".daily-forecast .direction"); 

    d_icon.innerHTML = `<img src ="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png">`;
    d_description.textContent = data.daily[i].weather[0].description;

    max_temp.innerHTML =`<span>${params.t} : </span>`;
    min_temp.innerHTML =`<span>${params.tx} : </span> <bdi><span>${Math.round(data.daily[i].temp.max)} 
    <sup>o</sup>C</span></bdi> / <span>${params.tm} : </span> <bdi><span>${Math.round(data.daily[i].temp.min)} 
    <sup>o</sup>C</span></bdi>`;
    d_rain_amount.innerHTML = data.daily[i]["rain"]? `<span>${params.percip_day_amount} : </span> <span>${data.daily[i].rain} ${params.percip_unit}</span>` : `<span>${params.percip_day_amount} : </span> <span> 0 ${params.percip_unit}</span>`;
    d_pressure.innerHTML =`<span>${params.p} : </span> <span>${data.daily[i].pressure}  ${params.p_unit}</span>`;
    d_humidity.innerHTML = `<span>${params.h} : </span> <span>${data.daily[i].humidity} %</span>`;

    var dirction = data.daily[i].wind_deg;
    text_deriction(dirction); 

    d_Wind_Speed.innerHTML = `<span>${params.ws} : `;
    d_Wind_Direction.innerHTML = `<span>( ${Math.round(data.daily[i].wind_speed*3.6)} ${params.ws_unit} )</span>- <span>${txt_dirction}</span>`;
}

function daily_inner_elements_manaul(data, i, params){

    var d_icon = document.querySelector(".daily-forecast .icon");
    var d_description = document.querySelector(".daily-forecast .description"); 
    var max_temp = document.querySelector(".daily-forecast .max-temp"); 
    var min_temp = document.querySelector(".daily-forecast .min-temp"); 
    var d_rain_chance = document.querySelector(".daily-forecast .rain_cahnce"); 

    var d_rain_amount = document.querySelector(".daily-forecast .rain_amount"); 
    var d_pressure = document.querySelector(".daily-forecast .pressure"); 
    var d_humidity = document.querySelector(".daily-forecast .humidity"); 
    var d_Wind_Speed = document.querySelector(".daily-forecast .speed"); 
    var d_Wind_Direction = document.querySelector(".daily-forecast .direction"); 
    d_Wind_Speed.style.display = "none";
    d_Wind_Direction.style.display = "none";

    d_icon.innerHTML = `<img src ="http:${data.forecast.forecastday[i].day.condition.icon}">`;
    d_description.textContent = data.forecast.forecastday[i].day.condition.text;

    max_temp.innerHTML =`<span>${params.tx} : </span> <bdi><span>${Math.round(data.forecast.forecastday[i].day.maxtemp_c)} 
    <sup>o</sup>C</span></bdi>`;
    min_temp.innerHTML =`<span>${params.tm} : </span> <bdi><span>${Math.round(data.forecast.forecastday[i].day.mintemp_c)} 
    <sup>o</sup>C</span></bdi>`;

    d_pressure.innerHTML =`<span>${params.v} : </span> <span>${data.forecast.forecastday[i].day.avgvis_km} ${params.v_unit}</span>`;

    d_humidity.innerHTML = `<span>${params.h} : </span> <span>${data.forecast.forecastday[i].day.avghumidity} %</span>`;

    d_rain_chance.innerHTML = `<span>${params.percip_chance} : </span> <span>${Math.round(data.forecast.forecastday[i].day.daily_chance_of_rain)} %</span> `;
    

    d_rain_amount.innerHTML = `<span>${params.percip_day_amount} : </span> <span>${data.forecast.forecastday[0].day.totalprecip_mm} ${params.percip_unit}</span>`;
}


function daily_forecast(data, week_days, today_tommorow, params, text_deriction){
                            
    document.querySelectorAll('.weather-data div').forEach(element => {
        element.classList.remove('show');
    });
    document.querySelector('.daily-forecast').classList.add('show');

    var abbr = document.querySelector('.abbr');
    var day_abbr = document.querySelector('.day-abbr');
    var abbrElement = day_abbr.cloneNode(true);
    day_abbr.remove();
    abbr.innerHTML = '';

    //create 8 element for 8 day-forecast
    for (let i=0; i<8; i++){
        let copy_abbrElement = abbrElement.cloneNode(true);
        abbr.appendChild(copy_abbrElement);
        var d = abbr.children[i].querySelector('.d');
        var d_temp = abbr.children[i].querySelector('.d-temp');
        var d_icon = abbr.children[i].querySelector('.d-icon');
        var details_icon = abbr.children[i].querySelector('.details-icon');
        details_icon.innerHTML = `<i class="fas fa-info-circle"></i>`;

        date_header(data, i, d, week_days, today_tommorow);

        d_temp.innerHTML = `${Math.round(data.daily[i].temp.max)} / ${Math.round(data.daily[i].temp.min)} <sup>o</sup>C`;
        d_icon.innerHTML = `<img src ="./icons/${data.daily[i].weather[0].icon}.png">`;


        // when click details button 
        abbr.children[i].addEventListener('click', function(){
            var details = document.querySelector('.details');
            var the_day = document.querySelector('.the_day');

            date_header(data, i, the_day, week_days, today_tommorow);

            daily_inner_elements(data, i, params, text_deriction)

            // show details
            details.classList.add('show');
            // document.querySelector('.abbr').classList.remove('active')

            // hide details
            document.querySelector('.go_back').onclick = function(){
                details.classList.remove('show');
                // document.querySelector('.abbr').classList.add('active');
            }

            //next function
            next.onclick = function(){
                
                i = i<7? (i+1) : i;

                date_header(data, i, the_day, week_days, today_tommorow);

                daily_inner_elements(data, i, params, text_deriction)
                
            }

            // Previous function
            pre.onclick = function(){
                i = i>0? (i-1) : i;

                date_header(data, i, the_day, week_days, today_tommorow);

                daily_inner_elements(data, i, params, text_deriction)
            }
                
        })

    }
    

}

function daily_forecast_for_manaul(data, week_days, today_tommorow, params, text_deriction){
                            
    document.querySelectorAll('.weather-data div').forEach(element => {
        element.classList.remove('show');
    });
    document.querySelector('.daily-forecast').classList.add('show');

    var abbr = document.querySelector('.abbr');
    var day_abbr = document.querySelector('.day-abbr');
    var abbrElement = day_abbr.cloneNode(true);
    day_abbr.remove();
    abbr.innerHTML = '';

    //create 3 element for 3 day-forecast
    for (let i=0; i<3; i++){
        let copy_abbrElement = abbrElement.cloneNode(true);
        abbr.appendChild(copy_abbrElement);
        var d = abbr.children[i].querySelector('.d');
        var d_temp = abbr.children[i].querySelector('.d-temp');
        var d_icon = abbr.children[i].querySelector('.d-icon');
        var details_icon = abbr.children[i].querySelector('.details-icon');
        var date = new Date().getDay();
        details_icon.innerHTML = `<i class="fas fa-info-circle"></i>`;

        // set day_name and day_date
        if(i === 0){
            d.innerHTML = `${today_tommorow.Today} <br><small>${data.forecast.forecastday[i].date}</small>`;
        }
        else if(i === 1){
            d.innerHTML = `${today_tommorow.Tommorow} <br><small>${data.forecast.forecastday[i].date}</small>`;
        }
        else {
            d.innerHTML = `${week_days[(date+2)%7]} <br><small>${data.forecast.forecastday[i].date}</small>`;
        }


        d_temp.innerHTML = `${Math.round(data.forecast.forecastday[i].day.maxtemp_c)} / ${Math.round(data.forecast.forecastday[i].day.mintemp_c)} <sup>o</sup>C`;
        d_icon.innerHTML = `<img src ="https:${data.forecast.forecastday[i].day.condition.icon}">`;


        // when click details button 
        abbr.children[i].addEventListener('click', function(){
            var details = document.querySelector('.details');
            var the_day = document.querySelector('.the_day');

            // set day_name and day_date
            if(i === 0){
                the_day.innerHTML = `${today_tommorow.Today} <br><small>${data.forecast.forecastday[i].date}</small>`;
            }
            else if(i === 1){
                the_day.innerHTML = `${today_tommorow.Tommorow} <br><small>${data.forecast.forecastday[i].date}</small>`;
            }
            else {
                the_day.innerHTML = `${week_days[(date+2)%7]} <br><small>${data.forecast.forecastday[i].date}</small>`;
            }

            daily_inner_elements_manaul(data, i, params, text_deriction)

            // show details
            details.classList.add('show');
            document.querySelector('.abbr').classList.remove('active')

            // hide details
            document.querySelector('.go_back').onclick = function(){
                details.classList.remove('show');
                // document.querySelector('.abbr').classList.add('active');
            }

            //next function
            next.onclick = function(){
                
                i = i<2? (i+1) : i;

                if(i === 0){
                    the_day.innerHTML = `${today_tommorow.Today} <br><small>${data.forecast.forecastday[i].date}</small>`;
                }
                else if(i === 1){
                    the_day.innerHTML = `${today_tommorow.Tommorow} <br><small>${data.forecast.forecastday[i].date}</small>`;
                }
                else {
                    the_day.innerHTML = `${week_days[(date+2)%7]} <br><small>${data.forecast.forecastday[i].date}</small>`;
                }

                daily_inner_elements_manaul(data, i, params, text_deriction)
                
            }

            // Previous function
            pre.onclick = function(){
                i = i>0? (i-1) : i;

                if(i === 0){
                    the_day.innerHTML = `${today_tommorow.Today} <br><small>${data.forecast.forecastday[i].date}</small>`;
                }
                else if(i === 1){
                    the_day.innerHTML = `${today_tommorow.Tommorow} <br><small>${data.forecast.forecastday[i].date}</small>`;
                }
                else {
                    the_day.innerHTML = `${week_days[(date+2)%7]} <br><small>${data.forecast.forecastday[i].date}</small>`;
                }

                daily_inner_elements_manaul(data, i, params, text_deriction)
            }
                
        })

    }
    

}


// ####################==Main Function===###########################

function fetch_current_weather(auto_or_manual, api_current, settings, params, text_deriction){
    fetch(api_current)
    .then(res=>{let data = res.json(); console.log(data); return data})
    .then(data=>{

     
        // call current_weather function
        if(auto_or_manual == 1){
            if(window.localStorage){
                const city = data.name + ',' + data.sys.country
                update_weather_to_localstorage = {...JSON.parse(localStorage.getItem('weather'))}
                update_weather_to_localstorage[city] = {
                    long: data.coord.lon,
                    lat: data.coord.lat
                }
                localStorage.setItem('weather', JSON.stringify(update_weather_to_localstorage))
            }

            city.textContent = data.name;
            country.textContent = data.sys.country;
            current_weather(params, data, text_deriction);
            let now_updated = new Date(+(data.dt + '000')).toLocaleTimeString()
            if(now_updated.length == 10){
                now_updated = 0 + now_updated.slice(0, 4) + now_updated.slice(7, now_updated.length)
            }else{
                now_updated = now_updated.slice(0, 4) + now_updated.slice(7, now_updated.length)
            }
            header_btn_now.innerHTML = settings.header_now + ' ' + '<br><bdi><small> updated ' + now_updated  + '</small></bdi>';

            if(data.dt < data.sys.sunset && data.dt > data.sys.sunrise){
                stored_current.style.backgroundImage = `url('./images/1\ \(5\).jpg')`;
                stored_current.style.backgroundPosition = 'center';
                stored_current_el.forEach(element => {
                    element.style.color = '#000';
                });
            }

            else{
                
                let rand = Math.floor(Math.random() * 6);
                stored_current.style.backgroundImage = `url('./images/night/2\ \(${rand}\).jpg')`;
                stored_current.style.backgroundPosition = 'center';
                stored_current_el.forEach(element => {
                    element.style.color = '#fff';
                });
            }
        }

        else{
            if(window.localStorage){
                update_weather_to_localstorage = {...JSON.parse(localStorage.getItem('weather'))}
                const city = data.location.name + ',' + data.location.country
                update_weather_to_localstorage[city] = {
                    long: data.location.lon,
                    lat: data.location.lat
                }
                localStorage.setItem('weather', JSON.stringify(update_weather_to_localstorage))
            }

            
            city.textContent = data.location.name;
            country.textContent = data.location.country;
            let lastupdate = data.current.last_updated
            header_btn_now.innerHTML = settings.header_now + ' ' + '<br><bdi><small> update ' + lastupdate.slice(11) + '</small></bdi>';
            current_weather_for_manual(params, data, text_deriction);
            
        }
        header_btn_now.onclick = function(){
            if(auto_or_manual == 1){
                current_weather(params, data, text_deriction);
               
            }
            else{
                current_weather_for_manual(params, data, text_deriction);
            }               
        }
        
    })    
}


// fetch_forecast weather
function fetch_furecast_weather(auto_or_manual, api_forecast, pm_and_am, week_days, today_tommorow, params, text_deriction){
    fetch(api_forecast)
    .then(res=>{let data = res.json(); console.log(data); return data})
    .then(data=>{

        if(auto_or_manual==1){
            header_btn_8days.innerHTML = `8-Days`
        }else{
            header_btn_8days.innerHTML = `3-Days`
        }


        header_btn_48hours.onclick = function(){
            active_header_btn_elements(header_btn_48hours);
            if(auto_or_manual==1){
                hourly_forecast(pm_and_am, week_days, params, text_deriction, today_tommorow, data);
            }else{
                hourly_forecast_for_manual(pm_and_am, week_days, params, today_tommorow, data);
            }
        }



        //Call Daily-Forecast
        header_btn_8days.onclick = function(){
            active_header_btn_elements(header_btn_8days);

            if(auto_or_manual==1){
                daily_forecast(data, week_days, today_tommorow, params, text_deriction);
                header_btn_8days.innerHTML = `8-Days`
            }
            else{
                daily_forecast_for_manaul(data, week_days, today_tommorow, params, text_deriction);
                
            }
        }

    })
}

// manualy determine loaction
function manual(lang, settings, city_name, params, text_deriction, pm_and_am, week_days, today_tommorow)
{

    api_current = `https://api.weatherapi.com/v1/forecast.json?key=eaa9db6a162647f1bbb180949212101&q=${city_name}&days=3&lang=${lang}`;
    
    api_forecast = `https://api.weatherapi.com/v1/forecast.json?key=eaa9db6a162647f1bbb180949212101&q=${city_name}&days=3&lang=${lang}`;
    fetch_current_weather(2, api_current, settings, params, text_deriction);
    fetch_furecast_weather(2, api_forecast, pm_and_am, week_days, today_tommorow, params, text_deriction);
    
}

var x = document.querySelector('.error-in-fetching-data')
// automaticaly determine loaction
function auto(lang, settings, params, text_deriction, pm_and_am, week_days, today_tommorow){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            // x.classList.remove('.active')
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long, lat);
           

            api_current = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=${lang}&appid=${key}`;
            api_forecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&lang=${lang}&appid=${key}`;
    
            fetch_current_weather(1, api_current, settings, params, text_deriction);
            fetch_furecast_weather(1, api_forecast, pm_and_am, week_days, today_tommorow, params, text_deriction);
            my_location.classList.add('active')
        }, error=>{
                // x.classList.add('.active')
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                    // x.innerHTML = "User denied the request for Geolocation."
                    break;
                    case error.POSITION_UNAVAILABLE:
                    // x.innerHTML = "Location information is unavailable."
                    break;
                    case error.TIMEOUT:
                    // x.innerHTML = "The request to get user location timed out."
                    break;
                    case error.UNKNOWN_ERROR:
                    // x.innerHTML = "An unknown error occurred."
                    break;
                }
            })
    }
    else{
        // x.classList.add('.active')
        // x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


var en_settings = {
    letterSpacing: "5px",
    title: "Weather State",
    lang: "en",
    dir: "ltr",

    header_now: "Now",
    header_hours: "48-Hours",
    header_days: "8-Days",

    // options_now: "Weather-Now",
    // options_hours: "Hourly Weather-Forecast For 48 Hours",
    // options_days: "Daily Weather-Forecast For 7 Days",

}

var ar_settings = {
    letterSpacing: "normal",
    title: "حــالة الطقــس",
    lang: "ar",
    dir: "rtl",

    header_now: "ألآن",
    header_hours: "48-ساعة",
    header_days: "8-أيام",

    options_now: "الطقس ألآن",
    options_hours: "تنبؤ 48 ساعة قادمة",
    options_days: "تنبؤ 8 أيام",

}

function main_Weather_func(lang, settings, params, pm_and_am, week_days, today_tommorow, text_deriction){

    weather_Header.style.letterSpacing = settings.letterSpacing;
    weather_Header.innerHTML = settings.title;
    display_area.lang = settings.lang;
    display_area.dir = settings.dir;

    // Change header Texts
    // header_btn_now.innerHTML = settings.header_now
    header_btn_48hours.innerHTML = settings.header_hours
    header_btn_8days.innerHTML = settings.header_days

    auto(lang, settings, params, text_deriction, pm_and_am, week_days, today_tommorow);
    prayer_method_and_school_determine(lang)
    auto_prayer(lang, 0)


    var city_name;
    var change_city_name = false
    var clicked_city;

    location_determine.onsubmit = function(e){
        e.preventDefault();
        search_location_manaul(lang);
        
    }

    prev_cities_elements.forEach((element) => {
        element.addEventListener('click',(e)=>{
            city_input.value = element.innerHTML
            clicked_city = element.getAttribute('data-city-location')
            console.log(clicked_city)
            change_city_name = true
            e.preventDefault();
            search_location_manaul(lang);
        })
    });


    function search_location_manaul(lang){
        if(!change_city_name){
            city_name = city_input.value;
            manual_prayer(lang, city_name)
        }else{
            city_name = clicked_city
            change_city_name = false
            splited_city_name = city_name.split(',')
            prayer_lat = splited_city_name[0]
            console.log(long)
            prayer_long = splited_city_name[1]
            auto_prayer(lang, 1)
        }
        prev_cities.classList.remove('active')
        location_determine.classList.remove('show');
        manual(lang, settings, city_name, params, text_deriction, pm_and_am, week_days, today_tommorow);
        my_location.classList.remove('active')
    } 

    my_location.addEventListener('click', ()=>{
        city_input.value = "";
        location_determine.classList.remove('show');
        auto(lang, settings, params, text_deriction, pm_and_am, week_days, today_tommorow);
        auto_prayer(lang, 0)
        my_location.classList.add('active')
        header_btn_8days.innerHTML = `8-Days`
    })
}


// ################### English-Function ######################

function en_Weather(){

    all_langs.classList.remove('active')
    ar_btn.classList.remove('active');
    en_btn.classList.add('active');
    lang_displayed_now.innerHTML = "English"

    city_input.value = "";
    city_input['placeholder'] = "city..."
    pre.innerHTML = `<span><i class="far fa-caret-square-left"></i></span>`
    next.innerHTML = `<span><i class="far fa-caret-square-right"></i></span>`;

    my_location.innerHTML = "My Location";
    
    header_btn_now.style.borderRight = "2px solid #000";
    header_btn_now.style.borderLeft = "none";
    header_btn_8days.style.borderLeft = "2px solid #000";
    header_btn_8days.style.borderRight = "none";
    header_btn_48hours.style.borderRight = "none";
    header_btn_48hours.style.borderLeft = "none";

    main_Weather_func("en", en_settings, en_params, en_pm_and_am, en_week_days, en_today_tommorow, en_text_deriction)

}


// ################### Arabic-Function ######################

function ar_Weather(){

 
    all_langs.classList.remove('active')
    en_btn.classList.remove('active');
    ar_btn.classList.add('active');
    lang_displayed_now.innerHTML = "عربي"

    city_input.value = "";
    city_input['placeholder'] = "ابحث عن مدينة..."
    my_location.innerHTML = "موقعي حاليا"
    header_btn_now.style.borderLeft = "2px solid #000";
    header_btn_8days.style.borderLeft = "none";
    header_btn_now.style.borderRight = "none";
    header_btn_8days.style.borderRight = "2px solid #000";
    header_btn_48hours.style.borderRight = "none";
    header_btn_48hours.style.borderLeft = "none";
    pre.innerHTML = `<span><i class="far fa-caret-square-right"></i></span>`;
    next.innerHTML = `<span><i class="far fa-caret-square-left"></i></span>`;

    main_Weather_func("ar", ar_settings, ar_params, ar_pm_and_am, ar_week_days, ar_today_tommorow, ar_text_deriction)
}




window.onload = function(){
    ar_Weather();
    // remaining_time_func()
    
}




var prayer_settings = {

    en: {
        header_tap: ['today-prayers', '-prayer'],
        comming_prayer: 'after',
        comming_prayer_time: ['hours', 'min', 'sec'],
        prayers_name: [
            "Fajr",
            "Sunrise",
            "Dhuhr",
            "Asr",
            "Maghrib",
            "Isha",
        ],
        prayer_school_method_header: ['select method', 'select school'],
        prayer_methods: [
            'Shia Ithna-Ansari',
            'University of Islamic Sciences, Karachi',
            'Islamic Society of North America',
            'Muslim World League',
            'Umm Al-Qura University, Makkah',
            'Egyptian General Authority of Survey',
            'Institute of Geophysics, University of Tehran',
            'Gulf Region',
            'Kuwait',
            'Qatar',
            'Majlis Ugama Islam Singapura, Singapore',
            'Union Organization islamic de France',
            'Diyanet İşleri Başkanlığı, Turkey',
            'Spiritual Administration of Muslims of Russia'
        ],
        prayer_school: [
            'Shafi',
            'Hanafi'
        ]
    },

    ar: {
        header_tap: [' مواقيت الصلاة اليوم', 'الصلاة في شهر'],
        comming_prayer: 'بعد',
        comming_prayer_time: ['ساعة', 'دقيقة', 'ثانية'],
        prayers_name: [
            "فجر",
            "شروق",
            "ظهر",
            "عصر",
            "مغرب",
            "عشاء",
        ],
        prayer_school_method_header: ['اختر طريقة الحساب', 'اختر المذهب'],
        prayer_methods: [
            "الشيعة إثنا الأنصاري" ,
            "جامعة العلوم الإسلامية بكراتشي" ,
            "الجمعية الإسلامية لأمريكا الشمالية" ,
            "رابطة العالم الإسلامي" ,
            "جامعة أم القرى بمكة المكرمة",
            "الهيئة المصرية العامة للمساحة",
            "معهد الجيوفيزياء بجامعة طهران" ,
            'منطقة الخليج',
            'الكويت',
            'دولة قطر',
            "مجلس أوجاما إسلام سينجابورا ، سنغافورة" ,
            "الاتحاد الفرنسي الإسلامي" ,
            "ديانة İşleri Başkanlığı ، تركيا" ,
            "الإدارة الروحية لمسلمي روسيا"
        ],
        prayer_school: [
            'الشافعي',
            'الحنفي'
        ]
    }
}

var auto_prayer_today_api;
var auto_prayer_currentMonth_api;
var manaul_prayer_today_api;
var manaul_prayer_currentMonth_api;
var fixed_api_firstPart = 'https://api.aladhan.com/v1/'
var fixed_api_lastPart = `&method=${method? method : 5}&school=${ school ? school  : 0}`

var calendar = true
var method = 5
var school = 0
var up_down_month 
var displayed_calendar = calendar? 'Calendar' : 'hijriCalendar'
var full_today_prayers_ele = document.querySelectorAll('.full-today-prayers div')
var coming_prayer_name = document.querySelector('.comming-prayer-name');
console.log(coming_prayer_name)


const prayer_main_settings = (lang)=>{
    document.querySelector('.header-today-prayers').innerHTML = prayer_settings[lang].header_tap[0]
    console.log(prayer_settings[lang].header_tap[0])
    
    document.querySelector('.header-month-prayer').innerHTML = prayer_settings[lang].header_tap[1]
    document.querySelector('.coming_prayer_after').innerHTML = prayer_settings[lang].comming_prayer
    document.querySelector('.remaining-hours').lastElementChild.innerHTML = prayer_settings[lang].comming_prayer_time[0]
    document.querySelector('.remaining-minutes').lastElementChild.innerHTML = prayer_settings[lang].comming_prayer_time[1]
    document.querySelector('.remaining-sec').lastElementChild.innerHTML = prayer_settings[lang].comming_prayer_time[2]
    for(let i=0; i<full_today_prayers_ele.length; i++){
        full_today_prayers_ele[i].firstElementChild.innerHTML = prayer_settings[lang].prayers_name[i]
    }
}

const fetch_prayer_timings = (lang, prayer_api, prayer_lat, prayer_long)=>{
    fetch(prayer_api)
    .then(res=>{let prayer_data = res.json(); console.log(prayer_data); return prayer_data})
    .then(prayer_data=>{
        var today_date_els = document.querySelectorAll('.today-date span')

        today_date_els[0].innerHTML = prayer_data.data.date.hijri.weekday[lang]
        console.log(prayer_data.data.date.hijri.weekday[lang])

        today_date_els[1].innerHTML = prayer_data.data.date.gregorian.date

        today_date_els[2].innerHTML = prayer_data.data.date.hijri.day + ' ' + prayer_data.data.date.hijri.month[lang]+ ' ' + prayer_data.data.date.hijri.year
        console.log(prayer_data.data.date.hijri.month[lang])
        const income_timestamp = prayer_data.data.date.timestamp
        const now_timestamp = +(income_timestamp + '000');
        console.log(now_timestamp)

        const now_time = new Date(now_timestamp).toTimeString().slice(0, 8) 
        // ex: 14:12:05 (time when data came from server) --- [fixed]
        console.log(now_time)

        const {Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha} = prayer_data.data.timings
        const timings = [Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha]
        for(let i=0; i<timings.length; i++){
            full_today_prayers_ele[i].lastElementChild.innerHTML = timings[i]
        }

        var diff;
        //get the comming prayer-time
        const determine_comming_prayer = ()=>{
            for(let i=0; i<timings.length; i++){
                var t1 = timings[i].split(':')
                var t2 = now_time.split(':')
                var d1 = new Date(0, 0, 0, t1[0], t1[1], 0)
                var d2 = new Date(0, 0, 0, t2[0], t2[1], 0)
                diff = d1 - d2
    
                if(diff > 0){
                    coming_prayer_name.innerHTML = lang === 'ar'? `آذان ال${prayer_settings[lang].prayers_name[i]}` : `${prayer_settings[lang].prayers_name[i]} prayer`;
                    break;
                }else if(!(diff>0) && i === (timings.length - 1)){
                   var numeric_now_timestamp = +(income_timestamp)
                    //tomorrow api
                    auto_prayer_tomorrow_api = `${fixed_api_firstPart}timings/${numeric_now_timestamp + 36000}?latitude=${prayer_lat}&longitude=${prayer_long}${fixed_api_lastPart}`
    
                    fetch(auto_prayer_tomorrow_api)
                    .then(tomorrow_res=>{let tomorrow_prayer_data = tomorrow_res.json(); console.log(tomorrow_prayer_data); return tomorrow_prayer_data})
                    .then(tomorrow_prayer_data=>{
                        const {Fajr} = tomorrow_prayer_data.data.timings
                        coming_prayer_name.innerHTML = prayer_settings[lang].prayers_name[0]
                        console.log(Fajr)
                        var t1 = Fajr.split(':')
                        var t2 = now_time.split(':')
                        var d1 = new Date(0, 0, 1, t1[0], t1[1], 0)
                        var d2 = new Date(0, 0, 0, t2[0], t2[1], 0)
                        diff = d1 - d2
                        console.log(coming_prayer_name)
                    })
                    break;
                }
                else{
                    continue
                }
            }
        }
       
        determine_comming_prayer()

        console.log(diff)
        const timer = 
        setInterval(() => {
                    diff = diff - 1000
                    if(diff == 0){
                        clearInterval(timer)
                        determine_comming_prayer()
                    }
                    remaining_time_func(diff)
                }, 1000);

    })
}

const auto_prayer = (lang, manual_long_lat)=>{
    prayer_main_settings(lang)
    if(manual_long_lat === 0){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position=>{
                    prayer_long = position.coords.longitude;
                    prayer_lat = position.coords.latitude;

                    //today api
                    auto_prayer_today_api = `${fixed_api_firstPart}timings?latitude=${prayer_lat}&longitude=${prayer_long}${fixed_api_lastPart}` 

                    //current month api
                    auto_prayer_currentMonth_api =  `${fixed_api_firstPart}${displayed_calendar}latitude=${prayer_lat}&longitude=${prayer_long}&method=${method? method : 5}&school=${ school ? school  : 0}`

    
                    fetch_prayer_timings(lang, auto_prayer_today_api, prayer_lat, prayer_long)
            })
        }
    }
    else{
        auto_prayer_today_api = `${fixed_api_firstPart}timings?latitude=${prayer_lat}&longitude=${prayer_long}${fixed_api_lastPart}` 
    
        auto_prayer_currentMonth_api =  `${fixed_api_firstPart}${displayed_calendar}latitude=${prayer_lat}&longitude=${prayer_long}&method=${method? method : 5}&school=${ school ? school  : 0}`

        fetch_prayer_timings(lang, auto_prayer_today_api)
    }
    
}


const manual_prayer = (lang, city_name)=>{
    manaul_prayer_today_api = `${fixed_api_firstPart}timingsByCity?city=${city_name}&country=u&${fixed_api_lastPart}`
    fetch_prayer_timings(lang, manaul_prayer_today_api)
}

const remaining_time_func = (diff)=>{

    if(diff > 0){
        var remainning_hours = Math.floor(diff / (60*60*1000))
        var remainning_mintues = Math.floor((diff % (60*60*1000)) / (60*1000))
        var remainning_seconds = Math.floor(((diff % (60*60*1000)) % (60*1000)) / 1000)
    
        var final_remainning_hours = `${remainning_hours<10? '0' + remainning_hours : remainning_hours}`
        var final_remainning_mintues = `${remainning_mintues<10? '0' + remainning_mintues : remainning_mintues}`
        var final_remainning_seconds = `${remainning_seconds<10? '0' + remainning_seconds : remainning_seconds}`
    
        document.querySelector('.remaining-hours').firstElementChild.innerHTML = final_remainning_hours
        document.querySelector('.remaining-minutes').firstElementChild.innerHTML = final_remainning_mintues
        document.querySelector('.remaining-sec').firstElementChild.innerHTML = final_remainning_seconds
    }

 }

 var prayer_time_settings_icon = document.querySelector('.prayer_time_settings_icon')
 var prayer_time_settings = document.querySelector('.prayer_time_settings')
 var fa_cog = document.querySelector('.fa-cog')
 prayer_time_settings_icon.addEventListener('click', ()=>{
    prayer_time_settings.classList.toggle('active')
    fa_cog.classList.toggle('fa-spin')
 })


 const prayer_method_and_school_determine = (lang)=>{

    var prayer_school_header = document.querySelector('.prayer_school_header h2')
    prayer_school_header.innerHTML = prayer_settings[lang].prayer_school_method_header[1]

    var prayer_method_header = document.querySelector('.prayer_method_header h2')
    prayer_method_header.innerHTML = prayer_settings[lang].prayer_school_method_header[0]


    var prayer_method_options = document.querySelectorAll('.prayer_method option')
    for(let i=0; i<prayer_method_options.length; i++){
        prayer_method_options[i].innerHTML = prayer_settings[lang].prayer_methods[i]
        prayer_method_options[i].onselect = ()=>{
            method = prayer_method_options[i].value
        }
    }

    var prayer_school_options = document.querySelectorAll('.prayer_school option')
    for(let i=0; i<prayer_school_options.length; i++){
        prayer_school_options[i].innerHTML = prayer_settings[lang].prayer_school[i]
    }

}