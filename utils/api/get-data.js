import axios from 'axios';
const BaseUrl = process.env.BASE_URL
// const fetchData = async (endpoint, language) => {
//   try {
//     const response = await axios.get(`${BaseUrl}${endpoint}`, {
//       headers: {
//         'lang': language,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// export default fetchData;

const fetchData = async (endpoint, language) => {
  try {
    const response = await fetch(`${BaseUrl}${endpoint}`, {
      headers: {
        'lang': language,
      },
      cache: "no-cache"
    });

    console.log("base url " + BaseUrl)

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;