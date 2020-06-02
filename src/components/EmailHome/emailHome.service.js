import axios from 'axios';

export async function getEmails() {
  try {
    const resp = await axios.get('https://flipkart-email-mock.now.sh/');
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