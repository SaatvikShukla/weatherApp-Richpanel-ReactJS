import axios from 'axios';


export async function getWeatherDetailsFromLocation(params) {
  console.log(params);
  try {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${params.lattitude}&lon=${params.longitude}&appid=0a098c6e4f8953d7ec2e07215abd62b9&units=metric`
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    if (err.response) {
      throw err.response.data;
    } else if (err.request) {
      throw err.request;
    } else {
      throw err.message;
    }
  }
}