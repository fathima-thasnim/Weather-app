const API_KEY = '6c1e54f24dfbf4732a22e408bb1e0fc8'

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?
  q=${city}&appid=${API_KEY}&units=${units}`

  const data = await fetch(URL)
  .then((res) => res.json())
  .then((data) => data);

  console.log(data)

}

export {getFormattedWeatherData}