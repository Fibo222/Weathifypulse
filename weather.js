  let i = 0;
  let j = 0;
  let deg = 0;
  let incr = 0;
  let red = 0;
  let z = 0;
  let Cel = 30;
  
  let search_value;
  
  let date = new Date();
  let currSec = date. getSeconds();
  let currMin = date.getMinutes();
  let currHour = date.getHours();
  let currDay = date.getDay();
  let currDate = date.getDate();
  let currMonth = date.getMonth();
  let currYear = date.getFullYear();
  
  let Mth = ["Jan", "Feb", "Mar", "Apr", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let abbr_day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  
  const checkSingleNumber = (val) => {
    if (val < 10) {
      val = "0" + val;
      return val
    } else {
      return val
    }
  }
  const roundOff = (val) => {
    return Math.round(val);
  }
  const removeDuplicates = (arr) => {
      return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  const generator = (val) => {
    return `${new Date().getFullYear()}${val}${(new Date().getTime()%Math.random(1, 5))}`
  }
  const DIALOG = (Elem, childElem, txt) => {
    red = 0;
    childElem.innerText = txt;
    fadeIn(Elem);
    setTimeout(()=> {
      red = 9;
      fadeOut(Elem);
    }, 2200);
  }
  const fadeIn = (Elem) => {
    let id = setInterval(()=> {
      if (red == 9) {
        Elem.style.opacity = '1';
        clearInterval(id);
        red = 9;
      } else {
        red++;
        Elem.style.display = "block";
        Elem.style.opacity = `0.${red}`;
      }
    },
      0.0005);
  }
  const fadeOut = (Elem) => {
    let id = setInterval(()=> {
      if (red == 0) {
        Elem.opacity = '0';
        clearInterval(id);
        red = 0;
        Elem.style.display = "none";
      } else {
        red--;
        Elem.style.opacity = `0.${red}`;
      }
    },
      0.0005);
  }
  const slideOpen = (Elem, H, Parent) => {
    let id = setInterval(()=> {
      if (incr == H) {
        clearInterval(id);
      } else {
        Parent.style.display = "block";
        incr++;
        Elem.style.height = `${incr}vh`;
      }
    },
      1);
  }
  const slideClose = (Elem, default_H, Parent) => {
    incr = incr + default_H;
    const id = setInterval(()=> {
      if (incr == default_H) {
        Parent.style.display = "none";
        clearInterval(id);
        incr = 0;
      } else {
        incr--;
        Elem.style.height = `${incr}vh`;
      }
    },
      1)
  }
  
  const Temp_conv = (val, unit) => {
    if (unit === '°C') {
      return roundOff(((5(val - 32))/9))
    } else if (unit === '°F') {
      return roundOff(((9*val)/5)+32)
    } else {
      return val
    }
  }
  const pressure_conv = (val, unit) => {
    if (unit === 'inHg') {
      return (val*0.0295).toFixed(2)
    }
  }
  
  
  function Interval(val) {
    if (val <= 86) {
      return roundOff(Temp_conv(23, "°F")+40)
    } else if (val >= 87) {
      return roundOff(Temp_conv(17, "°F")+40)
    } else if (val <= 77) {
      return roundOff(Temp_conv(30, "°F")+40)
    } else if (val <= 68) {
      return roundOff(Temp_conv(40, "°F")+40)
    } else if (val <= 60) {
      return roundOff(Temp_conv(50, "°F")+40)
    } else if (val == 50) {
      return roundOff(Temp_conv(60, "°F")+40)
    } else if (val <= 48) {
      return roundOff(Temp_conv(70, "°F")+40)
    } else if (val <= 44) {
      return roundOff(Temp_conv(90, "°F")+40)
    } else if (val <= 41) {
      return roundOff(Temp_conv(130, "°F")+40)
    } else {
      return (40-40)
    }
  }
  function weather_analysis_C(loader , temp , k) {
    let id = setInterval(()=> {
      if (j == k) {
        clearInterval(id);
        i = 0; j = 0; deg = 0;
      } else if (k < 1) {
        deg--;
        if (deg == k) {
          clearInterval(id);
        } else {
          loader.style.backgroundImage = `conic-gradient(#1d57e0 100% , #1C1C1C ${deg}%)`;
          temp.innerText = `${deg}°C`;
        }
      } else {
        j++; i++; deg++;
        if (j >= 37) {
          loader.style.backgroundImage = `conic-gradient(#dc1616 ${j+2}% , #1C1C1C ${i}%)`;
          temp.innerText = `${checkSingleNumber(deg)}°C`;
        } else if (j <= 25) {
          temp.innerText = `${checkSingleNumber(deg)}°C`;
          loader.style.backgroundImage = `conic-gradient(#1d57e0 ${j+2}% , #1C1C1C ${i}%)`;
        } else if (j <= 36) {
          temp.innerText = `${checkSingleNumber(deg)}°C`;
          loader.style.backgroundImage = `conic-gradient(#FF7600 ${j+2}% , #1C1C1C ${i}%)`;
        } else {
          temp.innerText = `${checkSingleNumber(deg)}°C`;
          loader.style.backgroundImage = `conic-gradient(#FF2900 ${j+2}%, #1C1C1C ${i}%)`;
        }
      }
    },
      80);
  }
  function weather_analysis_F(loader , temp , k , conv) {
    let Temp = setInterval(()=> {
      if (deg == conv) {
        clearInterval(Temp);
        deg = 0;
      } else if (conv < 1) {
        deg--;
        if (deg == conv) {
          clearInterval(Temp);
        } else {
          temp.innerText = `${deg}°F`;
        }
      } else {
        deg++;
        temp.innerText = `${checkSingleNumber(deg)}°F`;
      }
    },
      40);
  
    let Load = setInterval(()=> {
      if (j == k) {
        clearInterval(Load);
        j = 0; i = 0;
      } else if (k < 1) {
        loader.style.backgroundImage = `conic-gradient(#1d57e0 100% , #1C1C1C 0%)`;
      } else {
        j++; i++;
        if (j >= 37) {
          loader.style.backgroundImage = `conic-gradient(#dc1616 ${j+2}% , #1C1C1C ${i}%)`;
        } else if (j <= 25) {
          loader.style.backgroundImage = `conic-gradient(#1d57e0 ${j+2}% , #1C1C1C ${i}%)`;
        } else if (j <= 36) {
          loader.style.backgroundImage = `conic-gradient(#FF7600 ${j+2}% , #1C1C1C ${i}%)`;
        } else {
          loader.style.backgroundImage = `conic-gradient(#FF2900 ${j+2}%, #1C1C1C ${i}%)`;
        }
      }
    },
      Interval(Temp_conv(Cel, '°F')));
  
  }
  
  let db = null;
  let st1; let st2;
  let DBName = window.indexedDB.open("Fibo_Weather", 6);
  function startDB() {
    DBName.onsuccess = (ev) => {
      db = ev.target.result;
      console.log(db);
    }
    DBName.onerror = (ev) => {
      console.log(ev.target.error);
    }
    DBName.onupgradeneeded = (ev) => {
      db = ev.target.result;
      if (!db.objectStoreNames.contains('Recents') || !db.objectStoreNames.contains('Favourite') || !db.objectStoreNames.contains('Expire') || !db.objectStoreNames.contains('Settings')) {
        db.createObjectStore('Recents', {
          keypath: "id", autoIncrement: false
        });
        db.createObjectStore('Favourite', {
          keypath: "id", autoIncrement: false
        });
        db.createObjectStore('Expire', {
          keypath: "id", autoIncrement: false
        });
        db.createObjectStore('Settings', {
          keypath: "id", autoIncrement: false
        });
      }
      //db.deleteObjectStore("Settings");
  
    }
  }
  startDB();
  
  function transaction(Store, Mode) {
    let createTx = db.transaction(`${Store}`, `${Mode}`);
  
    createTx.onerror = (err) => {
      console.log("can't create a transaction", err.error);
    }
    return createTx
  }
  
  function DEFAULT() {
  
    let tx = transaction("Settings", "readonly");
    let st = tx.objectStore("Settings");
    let r = st.getAll();
    r.onsuccess = (ev) => {
      let obj = ev.target.result;
      if (obj.length == 0) {
        let data = {
          "id": generator(new Date().getTime()),
          "Units": {
            "temp_unit": "°C",
            "press_unit": "inHg",
            "wind_unit": "m/s"
          },
          "Notification": "Disabled",
          "UserLocation": "Paris"
        };
        let ntx = transaction("Settings", "readwrite");
        let nst = ntx.objectStore("Settings");
        let nr = nst.add(data, data.id);
        nr.onerror = (err) => {
          console.log("Default", err.error);
        }
      }
    }
  
  }
  //setTimeout(()=> {DEFAULT();}, 400);
  
  async function weather_Retriever(Lat, Lon) {
    let isOnLine = window.navigator.onLine;
    if (isOnLine) {
      let APIkey = "25bd566df879147d8082c1787422c986";
      let weather = `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&appid=${APIkey}&units=metric`;
      let Get = await fetch(weather);
      let res = await Get.json();
  
      //General variables to be used when location is search
  
      let forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${res.coord.lat}&lon=${res.coord.lon}&appid=${APIkey}&units=metric`;
      let Get_F = await fetch(forecast);
      let res_F = await Get_F.json();
  
      let tx = transaction("Settings", "readonly");
      let st = tx.objectStore("Settings");
      let r = st.getAll();
  
      r.onsuccess = (ev) => {
        search_value = JSON.stringify({
          'id': generator("Fav"),'lat': Lat, 'lon': Lon
        });
        let obj = ev.target.result[0];
  
        let speed = (val) => {
          let res = val;
          if (obj.Units.wind_unit === "m/s") {
            return `${(res)}m/s`
          } else if (obj.Units.wind_unit === "km/hr") {
            return `${(res*3.6).toFixed(2)}km/hr`
          } else {
            return `${(res/0.447).toFixed(2)}mph`
          }
        }
        let direction = (val) => {
          if (val > 315 && val < 46) {
            return `${90-(val/4)}°N`
          } else if (val < 136 && val > 45) {
            return `${90-(val/4)}°E`
          } else if (val < 226 && val > 135) {
            return `${90-(val/4)}°S`
          } else if (val < 316 && val > 225) {
            return `${90-(val/4)}°W`
          } else if (val == 0) {
            return `${90-(val/4)}°N`
          } else if (val <= 25) {
            return `${90-(val/4)}°N`
          }else{}
        }
  /*
        let iconLink = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
        let icon_desc = res.weather[0]["description"];
        let pressure = (obj.Units.press_unit === "inHg")? `${pressure_conv(res.main.pressure, 'inHg')}inHg`: `${(res.main.pressure).toFixed(2)}kpa`;
        let humidity = res.main.humidity;
  
        let curr_city = document.getElementById("curr_city");
        let img = document.getElementById("cloud");
        let desc = document.getElementById("desc");
        let temp = document.getElementById("temp");
        let city_name = document.getElementById("city_name");
        let outer = document.querySelector(".outer");
  
        if (obj.Units.temp_unit === "°C") {
          weather_analysis_C(outer, temp, roundOff(res.main.temp));
        } else {
          weather_analysis_F(outer, temp, roundOff(res.main.temp), Temp_conv(roundOff(res.main.temp), "°F"));
        }
        curr_city.innerText = `${res.sys.country}, ${res.name}`;
        img.innerHTML = `<img src='${iconLink}'/>`;
        img.style.display = "block";
        desc.innerText = `${icon_desc}`;
        city_name.innerText = `${res.name}`;
        document.querySelector(".Details").innerHTML = `
        <label>Today details</label>
        <main class='main'>
        <div>
        <span>Pressure</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill='#fff' viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg> ${pressure}</button>
        </div>
        <div>
        <span>Humidity</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill='#fff' viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" /></svg> ${humidity}%</button>
        </div>
        <div>
        <span>Wind speed</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="#fff" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" /></svg> ${speed(res.wind.speed)}</button>
        </div>
        <div>
        <span>Direction</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill='#fff' viewBox="0 0 512 512" stroke='#fff' class="w-6 h-6"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>${direction(res.wind.deg)}</button>
        </div>
        </main>
        `;
        let forcasts_details = document.querySelector('.forcasts_details');
        forcasts_details.innerHTML = `
        <label style='margin-left: 3%;'>Forcasts</label>
        <main></main>
        `;
  
        function loadForcastTempl() {
          let forcast = res_F['list'];
          let s = 0;
          let arr = [{
            'Sun': []},
            {
              'Mon': []},
            {
              'Tue': []},
            {
              'Wed': []},
            {
              'Thu': []},
            {
              'Fri': []},
            {
              'Sat': []}];
          let newArr = [];
          let t = 12;
          let h = (t-(t%3));
          let currTimeForcast = Math.trunc(h/2);
  
          while (s < forcast.length) {
            let dt = forcast[s].dt;
            let newDay = abbr_day[new Date(dt*1000).getDay()];
  
            switch (newDay) {
              case 'Sun': arr[0][newDay].push(forcast[s]); break;
              case 'Mon': arr[1][newDay].push(forcast[s]); break;
              case 'Tue': arr[2][newDay].push(forcast[s]); break;
              case 'Wed': arr[3][newDay].push(forcast[s]); break;
              case 'Thu': arr[4][newDay].push(forcast[s]); break;
              case 'Fri': arr[5][newDay].push(forcast[s]); break;
              case 'Sat': arr[6][newDay].push(forcast[s]); break;
              default: console.log("forcast issues");
              }
              s++;
            }
            s = new Date().getDay()+1;
            while (s < new Date().getDay()+6) {
              let Ftemp = (obj.Units.temp_unit === '°C')? arr[s%7][abbr_day[s%7]][0]["main"]["temp"]: Temp_conv(roundOff(arr[s%7][abbr_day[s%7]][0]["main"]["temp"]), "°F");
              let Ficon = `https://openweathermap.org/img/wn/${arr[s%7][abbr_day[s%7]][0]["weather"][0]["icon"]}@2x.png`;
              let blocks = document.querySelector('.forcasts_details > main');
              blocks.innerHTML += `
              <div class="forcast_blocks" id="forcast_${s}" data-key='${JSON.stringify(arr[s%7])}' onclick='Forcast(this)'>
              <button class="forcastDay">${days[s%7]}</button>
              <button class="mainItm">
              <block class="fig"><img src="${Ficon}" /></block>
              <block class="Ftemp">${roundOff(Ftemp)}${obj.Units.temp_unit}</block>
              </button>
              </div>
              `;
             // console.log(Ftemp);
              s++;
            }
          }
          loadForcastTempl();
          let love = document.querySelector(".heart");
          love.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>';
  
        }*/
        
        let iconLink = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
        let icon_desc = res.weather[0]["description"];
        let pressure = (obj.Units.press_unit === "inHg")? `${pressure_conv(res.main.pressure, 'inHg')}inHg`: `${(res.main.pressure).toFixed(2)}kpa`;
        let humidity = res.main.humidity;
  
        let curr_city = document.getElementById("curr_city");
        let img = document.getElementById("cloud");
        let desc = document.getElementById("desc");
        let temp = document.getElementById("temp");
        let city_name = document.getElementById("city_name");
        let outer = document.querySelector(".outer");
  
        if (obj.Units.temp_unit === "°C") {
          weather_analysis_C(outer, temp, roundOff(res.main.temp));
        } else {
          weather_analysis_F(outer, temp, roundOff(res.main.temp), Temp_conv(roundOff(res.main.temp), "°F"));
        }
        curr_city.innerText = `${res.sys.country}, ${res.name}`;
        img.innerHTML = `<img src='${iconLink}'/>`;
        img.style.display = "block";
        desc.innerText = `${icon_desc}`;
        city_name.innerText = `${res.name}`;
        document.querySelector(".Details").innerHTML = `
        <label>Today details</label>
        <main class='main'>
        <div>
        <span>Pressure</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill='#fff' viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg> ${pressure}</button>
        </div>
        <div>
        <span>Humidity</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill='#fff' viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" /></svg> ${humidity}%</button>
        </div>
        <div>
        <span>Wind speed</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="#fff" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" /></svg> ${speed(res.wind.speed)}</button>
        </div>
        <div>
        <span>Direction</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill='#fff' viewBox="0 0 512 512" stroke='#fff' class="w-6 h-6"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>${direction(res.wind.deg)}</button>
        </div>
        </main>
        `;
        let forcasts_details = document.querySelector('.forcasts_details');
        forcasts_details.innerHTML = `
        <label style='margin-left: 3%;'>Forcasts</label>
        <main></main>
        `;
  
        function loadForcastTempl() {
          let forcast = res_F['list'];
          let s = 0;
          let arr = [{
            'Sun': []},
            {
              'Mon': []},
            {
              'Tue': []},
            {
              'Wed': []},
            {
              'Thu': []},
            {
              'Fri': []},
            {
              'Sat': []}];
          let newArr = [];
          let t = 12;
          let h = (t-(t%3));
          let currTimeForcast = Math.trunc(h/2);
  
          while (s < forcast.length) {
            let dt = forcast[s].dt;
            let newDay = abbr_day[new Date(dt*1000).getDay()];
  
            switch (newDay) {
              case 'Sun': arr[0][newDay].push(forcast[s]); break;
              case 'Mon': arr[1][newDay].push(forcast[s]); break;
              case 'Tue': arr[2][newDay].push(forcast[s]); break;
              case 'Wed': arr[3][newDay].push(forcast[s]); break;
              case 'Thu': arr[4][newDay].push(forcast[s]); break;
              case 'Fri': arr[5][newDay].push(forcast[s]); break;
              case 'Sat': arr[6][newDay].push(forcast[s]); break;
              default: console.log("forcast issues");
              }
              s++;
            }
          s = new Date().getDay()+1;
          while (s < new Date().getDay()+6) {
              let Ftemp = (obj.Units.temp_unit === '°C')? arr[s%7][abbr_day[s%7]][0]["main"]["temp"]: Temp_conv(roundOff(arr[s%7][abbr_day[s%7]][currTimeForcast-3]["main"]["temp"]), "°F");
              let Ficon = `https://openweathermap.org/img/wn/${arr[s%7][abbr_day[s%7]][0]["weather"][0]["icon"]}@2x.png`;
              let blocks = document.querySelector('.forcasts_details > main');
              blocks.innerHTML += `
              <div class="forcast_blocks" id="forcast_${s}" data-key='${JSON.stringify(arr[s%7])}' onclick='Forcast(this)'>
              <button class="forcastDay">${days[s%7]}</button>
              <button class="mainItm">
              <block class="fig"><img src="${Ficon}" /></block>
              <block class="Ftemp">${roundOff(Ftemp)}${obj.Units.temp_unit}</block>
              </button>
              </div>
              `;
              //console.log(arr[s%7][abbr_day[s%7]]);
              s++;
            }
          }
          loadForcastTempl();
        
      }
      r.onerror = (err) => {console.log("Weather retriever", err.error);}
          
    } else {
        setTimeout (()=> {
          DIALOG(document.querySelector(".dialog_container"), document.querySelector(".DIALOG"), `Check your network or wifi connection`)}, 300);
      }
  }
  weather_Retriever(51.5073219, -0.1276474);
  function hideForcast(){
    let Parent = document.querySelector(".Forcasts-page");
    let child = document.querySelector(".Forcasts-page .mainItm");
    red = 9;
    incr = 85;
    slideClose(child, 10, Parent);
    fadeOut(Parent);
  }
  function Forcast(el) {
    let Parent = document.querySelector(".Forcasts-page");
    let child = document.querySelector(".Forcasts-page .mainItm");
    red = 0;
    incr = 85;
    slideOpen(child, 90, Parent);
    fadeIn(Parent);
    
    let blocks = document.querySelector('.forcasts_details > main');
    let forcast_day = document.querySelector(`#${el.id} > .forcastDay`).textContent;
    let data = el.getAttribute("data-key");
    let res = JSON.parse(data);
    
    let tx = transaction("Settings", "readonly");
    let st = tx.objectStore("Settings");
    let r = st.getAll();

    r.onsuccess = (ev) => {
      let obj = ev.target.result[0];
      
      let date_holder = document.querySelector(".date_container");
      let icon = document.querySelector(".mainBlock .fig img");
      let temp = document.querySelector(".mainBlock .span");
      let forcasts_time = document.querySelector(".Forcasts-page .mainItm .subheader");
      let details = document.querySelector(".Forcasts-page .mainItm .details");
      
      date_holder.innerText = `${abbr_day[new Date(res[`${abbr_day[days.indexOf(forcast_day)]}`][0].dt * 1000).getDay()]}, ${Mth[new Date(res[`${abbr_day[days.indexOf(forcast_day)]}`][0].dt * 1000).getMonth()]} ${new Date(res[`${abbr_day[days.indexOf(forcast_day)]}`][0].dt * 1000).getDate()}`;
      icon.setAttribute('src', `https://openweathermap.org/img/wn/${res[`${abbr_day[days.indexOf(forcast_day)]}`][0].weather[0].icon}@2x.png`);
      let temperature = (obj.Units.temp_unit === "°F")? `${Temp_conv(res[`${abbr_day[days.indexOf(forcast_day)]}`][0].main.temp, "°F")}` : `${res[`${abbr_day[days.indexOf(forcast_day)]}`][0].main.temp}`;
      temp.innerText = `${roundOff(temperature)}${obj.Units.temp_unit}`;
      
      let s = 0;
      forcasts_time.innerText = "";
      for(s = 0; s < res[`${abbr_day[days.indexOf(forcast_day)]}`].length; s++){
        let tmp = (obj.Units.temp_unit === "°F")? `${Temp_conv(res[`${abbr_day[days.indexOf(forcast_day)]}`][s].main.temp, "°F")}` : `${roundOff(res[`${abbr_day[days.indexOf(forcast_day)]}`][s].main.temp)}`;  
        let time = (res[abbr_day[days.indexOf(forcast_day)]][s].dt * 1000);
        let check = (new Date(time).getHours() > 12)? `${new Date(time).getHours()}PM` : `${checkSingleNumber(new Date(time).getHours())}AM` ;
        forcasts_time.innerHTML += `
          <button>
            <block class="time">${check}</block>
            <block class="imgTemp">
              <div>
                <img src="https://openweathermap.org/img/wn/${res[`${abbr_day[days.indexOf(forcast_day)]}`][s].weather[0].icon}@2x.png" />
              </div>
              <figcaption>${roundOff(tmp)} ${obj.Units.temp_unit}</figcaption>
            </block>
          </button>
        `;
      }
      
            let speed = (val) => {
        let res = val;
        if (obj.Units.wind_unit === "m/s") {
          return `${(res)}m/s`
        } else if (obj.Units.wind_unit === "km/hr") {
          return `${(res*3.6).toFixed(2)}km/hr`
        } else {
          return `${(res/0.447).toFixed(2)}mph`
        }
      }
      let direction = (val) => {
        if (val > 315 && val < 46) {
          return `${90-(val/4)}°N`
        } else if (val < 136 && val > 45) {
          return `${90-(val/4)}°E`
        } else if (val < 226 && val > 135) {
          return `${90-(val/4)}°S`
        } else if (val < 316 && val > 225) {
          return `${90-(val/4)}°W`
        } else if (val == 0) {
          return `${90-(val/4)}°N`
        } else if (val <= 25) {
          return `${90-(val/4)}°N`
        }else{}

      }
      
      let Pressure = (obj.Units.press_unit === "inHg")? `${pressure_conv(res[abbr_day[days.indexOf(forcast_day)]][0].main.pressure, "inHg")}` : `${res[abbr_day[days.indexOf(forcast_day)]][0].main.pressure}`;
      let Humidity = res[abbr_day[days.indexOf(forcast_day)]][0].main.humidity;
      let spd = speed(res[abbr_day[days.indexOf(forcast_day)]][0].wind.speed, obj.Units.wind_unit);
      let dir = direction(res[abbr_day[days.indexOf(forcast_day)]][0].wind.deg);
      details.innerHTML = `
        <div class="itms">
          <button class="span">Pressure</button>
          <button class="main-span">${Pressure}${obj.Units.press_unit}</button>
        </div>
        <div class="itms">
          <button class="span">Humidity</button>
          <button class="main-span">${Humidity}%</button>
        </div>
        <div class="itms">
          <button class="span">Wind speed </button>
          <button class="main-span">${spd}</button>
        </div>
        <div class="itms" style="border-bottom: 0px solid transparent;">
          <button class="span">Wind direction</button>
          <button class="main-span">${dir}</button>
        </div>
      `;
      
    }
    
    }
  
  function showBookMark() {
    let Elem = document.querySelector('.BookMark_city');
    fadeIn(Elem);
  }
  function hideBookMark() {
    let Elem = document.querySelector('.BookMark_city');
    fadeOut(Elem);
  }
  function fetchRecDB() {
    let tx = transaction("Recents", "readonly");
    let st = tx.objectStore("Recents");
    let r = st.getAll();

    r.onsuccess = (ev) => {

      let json = removeDuplicates(ev.target.result);
      let container = document.querySelector('.recentContainer');
      let Nth = document.querySelector(".Nothing");
      let s = 0;
      if (json.length > 0) {
        container.innerText = "";
        for (s; s < json.length; s++) {
          let st = (!json[s].state)? "": json[s].state;
          container.innerHTML += `
          <div class="recents_itms" data-key='${JSON.stringify({
            'lat': json[s].lat, 'lon': json[s].lon, 'country': json[s].country, 'state': json[s].state, 'name': json[s].city
          })}' onclick="get_Lat_Lon(this);hideBookMark()">
          <block>
          <button class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path> </svg></button>
          <button class="span">
          <span class="rec_country">${json[s].country}, ${json[s].city}</span>
          <span class="rec_state">${st}</span>
          </button>
          </block>
          <button class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg></button>
          </div>
          `;
        }
      } else {
        container.innerHTML = `
        <div class="Empty">
        <figure><img src="/storage/emulated/0/Pictures/Eraser/1693152444325.png" /></figure>
        <figcaption>Nothing here</figcaption>
        </div>
        `;
      }
    }

  }
  function weatherFrom(val) {
    let search = val.getAttribute('data-key');
    let isOnLine = window.navigator.onLine;
    if (isOnLine == true) {
      setTimeout (()=> {
        weather_Retriever(search.lat, search.lon);
        DIALOG(document.querySelector(".dialog_container"), document.querySelector(".DIALOG"), `Fetching...`);
      }, 300);
    } else {
      setTimeout (()=> {
        DIALOG(document.querySelector(".dialog_container"), document.querySelector(".DIALOG"), `Check your network or wifi connection`)}, 300);
    }
  }
  function clearAllRec() {
    let tx = transaction("Recents", "readonly");
    let st = tx.objectStore("Recents");
    let r = st.getAll();

    r.onsuccess = (ev) => {
      let data = ev.target.result;
      let s = 0;
      if (data.length > 0) {
        for (s; s < data.length; s++) {
          let ntx = transaction("Recents", "readwrite");
          let nst = ntx.objectStore("Recents");
          let nr = nst.delete(`${data[s].id}`);
          nr.onsuccess = (ev) =>{
            fetchRecDB();
          }
          nr.onerror = (ev) => {
            console.log("looping r.onsuccess", ev.error);
          }
        }
      }
    }
    r.onerror = (ev) => {
      console.log("clearAllRec", ev.error);
    }
  }

  function showMenu(k) {
    let Parent = document.querySelector(".Menu-page");
    let child = document.querySelector(".Menu");
    k.style.transition = "All .5s ease-in-out";
    k.style.transform = "rotate(90deg)";
    incr = 40;
    slideOpen(child, 60, Parent);
    fadeIn(Parent);
  }
  function hideMenu() {
    let Parent = document.querySelector(".Menu-page");
    let child = document.querySelector(".Menu");
    let k = document.querySelector(".chevron");
    k.style.transition = "All .5s ease-in-out";
    k.style.transform = "rotate(-90deg)";
    slideClose(child, 0, Parent);
    fadeOut(Parent);
  }

  function showSearch() {
    fadeIn(document.querySelector(".Search-page"));
  }
  function hideSearch() {
    fadeOut(document.querySelector(".Search-page"));
  }
  
  async function getSearchValue() {
    let inp = document.getElementById('searchInp').value;
    let container = document.querySelector('.search_results_container');
    let isOnLine = window.navigator.onLine;
    if (inp == "" || inp == "  " || inp == "   " || inp == "    " || inp == "     " || inp == "      ") {
      return false
    } else {
      if (isOnLine == true) {

        let link = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inp}&limit=20&units=metric&appid=25bd566df879147d8082c1787422c986`);
        let json = await link.json();

        if (json.length > 0) {
          let s;
          let container = document.querySelector('.search_results_container');
          container.innerText = '';
          for (s = 0; s < json.length; s++) {
            container.innerHTML +=
            `<div class="search_results_btn" data-key='${JSON.stringify({
              'lat': json[s].lat, 'lon': json[s].lon, 'country': json[s].country, 'state': json[s].state, 'name': json[s].name
            })}' onclick='get_Lat_Lon(this)'>
            <button class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path> </svg></button>
            <button class="span">
            <span class="search_country">${json[s].country}, ${json[s].name}</span>
            <span class="state">${json[s].state}</span>
            </button>
            </div>
            `;
          }
        } else {
          //weather_Retriever(inp);
        }

      } else {
        setTimeout (()=> {
          DIALOG(document.querySelector(".dialog_container"), document.querySelector(".DIALOG"), `Check your network or wifi connection`)}, 300);
      }
    }
  }
  function get_Lat_Lon(k) {
    let data = k.getAttribute('data-key');
    let obj = JSON.parse(data);
    weather_Retriever(obj.lat, obj.lon);
    hideSearch();
    let container = document.querySelector('.search_results_container');
    container.innerText = '';

    let Data = {
      "id": generator(Math.abs(obj.lat)),
      "country": obj.country,
      "state": obj.state,
      "city": obj.name,
      "lat": obj.lat,
      "lon": obj.lon,
    };
    let tx = transaction("Recents", "readwrite");
    let st = tx.objectStore("Recents");
    let r = st.add(Data, Data.id);
    r.onsuccess = (ev) => {
      setTimeout (()=> {
        DIALOG(document.querySelector(".dialog_container"), document.querySelector(".DIALOG"), `Fetching...`)}, 300);
    }
  }
  
  function setUpLocation(){
    let page = document.getElementById('OtherPage');
    page.innerHTML = `
    <article class="Location_body">
      <header class="Location_header header">
        <div class="main">
          <a href="#Home"><button class="back"><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path> </svg></button></a>
          <button class="span">Location</button>
        </div>
      </header>
      
      <div class="Location_Illustration">
        <figure>
          <img src="/storage/emulated/0/Pictures/Eraser/1694463827096.png" />
        </figure>
        <main>
          <span>Find your location</span>
          <small>Get the current weather status of your current position.</small>
        </main>
      </div>
      
      <footer>
        <a href="#Home"><button onclick="Fibo_GeoLocation()">Weathify my location</button></a>
      </footer>
    </article>
    `;
  }
  function Fibo_GeoLocation(){
    const getLocation = () => {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
    getLocation();
}
  function showPosition(position) {
    weather_Retriever(position.coords.latitude, position.coords.longitude);
}

  function FavAddRem(k) {
    let Favourite_DB_Operation = (obj, method) =>{
      let tx = transaction("Favourite", "readwrite");
      let st = tx.objectStore("Favourite");
      let r = (method === "add")? st.add(obj, obj.id) : st.delete(obj.id) ;
      
      r.onerror = (err) =>{
        console.log("Favourite_DB_Operation failed", err.error);
      };
    }
    
    let data = JSON.parse(search_value);
    
    let love = document.querySelector(".heart");
    
    let tx = transaction("Favourite", "readonly");
    let st = tx.objectStore("Favourite");
    let r = st.getAll();
    r.onsuccess = (ev) =>{
      let extracted_data = ev.target.result;
      
      if(extracted_data.length > 0 || typeof data !== undefined){
        let s = 0;
        for(s = 0; s < extracted_data.length; s++){
          if(extracted_data[s].lat === data.lat || extracted_data[s].lon === data){
           Favourite_DB_Operation(data, "delete");
           love.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>';
          }else{
            Favourite_DB_Operation(data, "add");
            love.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" fill="currentColor"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path></svg>';
          }
        }
        
      }else{
        Favourite_DB_Operation(data, "add");
        love.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" fill="currentColor"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path></svg>';
      }
    }
    r.onerror = (err) =>{
      console.log(err.error, "can't get favourite db itms");
    }
    
  }
  function weatherFav() {
    let tx = transaction("Settings", "readonly");
    let st = tx.objectStore("Settings");
    let r = st.getAll();

    r.onsuccess = (ev) => {
      let settings_obj = ev.target.result;

      let ntx = transaction("Favourite", "readonly");
      let nst = ntx.objectStore("Favourite");
      let nr = nst.getAll();

      nr.onsuccess = (ev) => {
        let nobj = removeDuplicates(ev.target.result);
        let s = 0;
        document.querySelector(".TotalFavouriteFound").innerText = `(${nobj.length} items)`;
        if (nobj.length > 0) {
          let container = document.querySelector('.Favourite_Holder');
          container.innerText = "";
          for (s; s < nobj.length; s++) {
            let ids = nobj[s];
            async function weathify() {
              let weather = `https://api.openweathermap.org/data/2.5/weather?lat=${nobj[s].lat}&lon=${nobj[s].lon}&appid=25bd566df879147d8082c1787422c986&units=metric`;
              let Get = await fetch(weather);
              let res = await Get.json();

              let unit = (settings_obj[0].Units.temp_unit == "°C")? roundOff(res.main.temp): roundOff(Temp_conv(res.main.temp, "°F"));
              container.innerHTML += `
              <div class="items" data-key='${JSON.stringify({
                'id': ids.id,'country': res.sys.country, 'state': res.sys.state, 'name': res.name, 'lat': res.coord.lat, 'lon': res.coord.lon
              })}' onclick="show_Fav_dialog(this)">
              <div class="top div">
              <button class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path> </svg></button>
              <button class="span">${res.sys.country}, ${res.name}</button>
              </div>
              <div class="mid div">
              <button class="FavIcon"><img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" /></button>
              <button style="color: #fff;">${res.weather[0]["description"]}</button>
              </div>
              <div class="bottom div">
              <button class="FavTemp">${unit}${settings_obj[0].Units.temp_unit}</button>
              <button class="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" fill="#DC000C"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path></svg></button>
              </div>
              </div>
              `;
            }
            weathify();
          }
        } else {
          let container = document.querySelector(".Favourite_Holder");
          container.innerHTML = `
          <div class="Empty">
            <figure><img src="/storage/emulated/0/Pictures/Eraser/1694509743022.png" /></figure>
            <figcaption>Starred locations are found here.</figcaption>
          </div>
          `;
        }
      }
      nr.onerror = (err) => {
        console.log(err.error);
      }
    }
    r.onerror = (err) => {
      console.log(err.error);
    }

  }
  function setUpFav() {
    let page = document.getElementById('OtherPage');
    page.innerHTML = `
      <article class="Favourite_parent">
        <header class="Favourite_header header">
          <div class="main">
            <a href="#Home"><button class="back"><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /> </svg> </button></a>
            <button class="span">Favourite</button>
          </div>
        </header>
        <div class="TotalFavouriteFound">...</div>
         <br />
        <article class="Favourite_Holder"></article>
      </article>
    `;
    weatherFav();
  }
  function show_Fav_dialog(k){
    let data = JSON.parse(k.getAttribute('data-key'));
    let dialog_parent = document.querySelector(".Fav_dialog_page");
    let dialog_child = document.querySelector(".Fav_dialog_page > .Fav_dialog");
    red = 0;
    incr = 40;
    fadeIn(dialog_parent);
    slideOpen(dialog_child, 55, dialog_parent);
    
    let title = document.querySelector(".Fav_dialog .Info .span");
    let LookUp = document.querySelector(".Fav_dialog .Opts .LookUp");
    let TurnNotification = document.querySelector(".Fav_dialog .Opts .TurnNotification");
    let Remove = document.querySelector(".Fav_dialog .Opts .Remove");
    title.innerText = `${data.country}, ${data.name}`;
    LookUp.setAttribute('data-key', JSON.stringify(data));
    TurnNotification.setAttribute('data-key', JSON.stringify(data));
    Remove.setAttribute('data-key', JSON.stringify(data));
  }
  function hide_Fav_dialog(){
    let dialog_parent = document.querySelector(".Fav_dialog_page");
    let dialog_child = document.querySelector(".Fav_dialog_page > .Fav_dialog");
    red = 9;
    incr = 15;
    slideClose(dialog_child, 40, dialog_parent);
    fadeOut(dialog_parent);
  }
  function Delete_Fav(k){
    let data = k.getAttribute('data-key');
    let obj = JSON.parse(data);
    
    let tx = transaction('Favourite', 'readwrite');
    let st = tx.objectStore('Favourite');
    let r = st.delete(`${obj.id}`);
    r.onsuccess = (ev) =>{
      hide_Fav_dialog();
      setUpFav();
    }
    r.onerror = (ev) =>{
      console.log('something went wrong',ev.error);
    }
  }

  function setUpSettings() {
    let tx = transaction("Settings", "readonly");
    let st = tx.objectStore("Settings");
    let r = st.getAll();

    r.onsuccess = (ev) => {
      let obj = ev.target.result;
      let page = document.getElementById('OtherPage');

      let Bg = (obj[0].Notification === "Enabled")? "#00FF54": "grey";
      page.innerHTML = `
      <article class="Setting_parent">
      <header class="Setting_header header">
      <div class="main">
      <a href="#Home"'><button class="back" onclick='Reload()'><svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path> </svg></button></a>
      <button class="span">Settings</button>
      </div>
      </header>

      <main class="Setting_holder">
      <div class="items">
      <label>Units &amp; measurements </label>
      <block>
      <div>
      <button>Temperature</button>
      <button class="change" id="setting_Temp">${obj[0].Units.temp_unit}</button>
      </div>
      <div>
      <button>Pressure</button>
      <button class="change" id="setting_Pressure">${obj[0].Units.press_unit}</button>
      </div>
      <div>
      <button>Wind speed</button>
      <button class="change" id="setting_Wind">${obj[0].Units.wind_unit}</button>
      </div>
      </block>
      </div><br/>
      <div class="items" style="margin-top: 4%;">
      <label>Notifications</label>
      <block>
      <div>
      <button>Notify on device</button>
      <button id="NotifyChange" class="change" style="color:${Bg};">${obj[0].Notification}</button>
      </div>
      </block>
      </div><br/>
      <div class="items">
      <label>Location </label>
      <block>
      <div>
      <button class="change" id="locationChange">${obj[0].UserLocation}</button>
      <button style="width: auto;color:#008AFF;font:85% 'Poppins';">Change Location</button>
      </div>
      </block>
      </div>
      </main>
      </article>
      </section>

      `;
      setTimeout(()=> {
        AddEvents();
      }, 100);
    }
    r.onerror = (err) => {
      console.log("line558", err.error);
    }
  }
  function AddEvents() {
    let tx = transaction("Settings", "readonly");
    let st = tx.objectStore("Settings");
    let r = st.getAll();

    r.onsuccess = (ev) => {
      let obj = ev.target.result[0];
      //Variables for settings Update
      let temp_unit = obj.Units.temp_unit;
      let press_unit = obj.Units.press_unit;
      let wind_unit = obj.Units.wind_unit;
      let Notify = obj.Notification;
      let Location = obj.UserLocation;

      let el = document.querySelectorAll('.Setting_holder > .items > block > div > .change');
      el.forEach((j)=> {
        j.addEventListener("click", ()=> {
          let txt = j.textContent;

          if (txt === "°C") {
            j.innerText = "°F";
            temp_unit = '°F';

          } else if (txt === "°F") {
            j.innerText = "°C";
            temp_unit = '°C';

          } else if (txt === "inHg") {
            j.innerText = "kpa";
            press_unit = "kpa";

          } else if (txt === "kpa") {
            j.innerText = "inHg";
            press_unit = "inHg";

          } else if (txt === "m/s") {
            j.innerText = "km/hr";
            wind_unit = "km/hr"

          } else if (txt === "km/hr") {
            j.innerText = "mph";
            wind_unit = "mph";

          } else if (txt === "mph") {
            j.innerText = "m/s";
            wind_unit = "m/s";

          } else if (txt === "Disabled") {
            j.innerText = "Enabled";
            j.style.color = "#20C600";
            Notify = "Enabled";

          } else if (txt === "Enabled") {
            j.innerText = "Disabled";
            j.style.color = "grey";
            Notify = "Disabled";

          } else {
            return false
          }
          UpdateSettingsData();
        });
      });


      const UpdateSettingsData = () => {
        let newSettingsData = {
          "id": obj.id,
          "Units": {
            "temp_unit": temp_unit,
            "press_unit": press_unit,
            "wind_unit": wind_unit
          },
          "Notification": Notify,
          "UserLocation": "London"
        };
        let ntx = transaction("Settings", "readwrite");
        let nst = ntx.objectStore("Settings");
        let nr = nst.put(newSettingsData, newSettingsData.id);

        nr.onerror = (err) => {
          console.log("getAllSettingsData", err.error);
        }
      }

    }

  }


  function Reload() {
    let obj = JSON.parse(search_value);
    if (obj) {
      weather_Retriever(obj.lat, obj.lon);
    }
  }
  
 /* function NETWORK_CHECK(){
    let isOnLine = window.navigator.onLine;
    if (isOnLine) {
      
    }else{
      
    }
  }*/