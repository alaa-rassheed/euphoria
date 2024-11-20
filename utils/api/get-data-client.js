

import axios from 'axios';
const BaseUrl = process.env.BASE_URL
const fetchClient = async (endpoint, language) => {
  try {
    const response = await axios.get(`https://api.euphoriagroup.com.eg/api/${endpoint}`, {
      headers: {
        'lang': language,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchClient;
