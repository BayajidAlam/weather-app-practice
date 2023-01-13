// const API_KEY = `api key`;

const loadTemperature = city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then(res=>res.json())
  .then(data=>displayTemperature(data))
}


const displayTemperature = data => {
  // const temperature = document.getElementById('show-temp');
  // temperature.innerText = data.main.temp;
  setInnerText('show-temp',data.main.temp)
  setInnerText('condition',data.weather[0].main)
}

document.getElementById('search-btn').addEventListener('click',function(){
  const searchField = document.getElementById('search-field');
  const cityName = searchField.value 
  loadTemperature(cityName)

  // setCity 
  document.getElementById('city').innerText = cityName
})

const setInnerText = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
}
