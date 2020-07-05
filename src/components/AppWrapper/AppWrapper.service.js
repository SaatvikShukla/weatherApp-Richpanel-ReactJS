import axios from 'axios';

export async function getUserLocationDetails() {
  try {
    const resp = await axios.get('https://geolocation-db.com/json/');
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