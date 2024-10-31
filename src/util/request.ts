import axios from "axios";
import Constants from "expo-constants";

const { rapidApiKey, rapidApiHost } = Constants.manifest.extra;

const options = {
  method: "GET",
  url: "https://newscatcher.p.rapidapi.com/v1/latest_headlines",
  params: {
    lang: "en",
    media: "True",
  },
  headers: {
    "x-rapidapi-key": rapidApiKey,
    "x-rapidapi-host": rapidApiHost,
  },
};

export const fetchNews = async () => {
  try {
    console.log(rapidApiKey);
    const response = await axios.request(options);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
