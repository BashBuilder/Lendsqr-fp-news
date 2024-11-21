import axios from "axios";

const options = {
  method: "GET",
  url: "https://real-time-news-data.p.rapidapi.com/topic-news-by-section",
  params: {
    topic: "TECHNOLOGY",
    section:
      "CAQiW0NCQVNQZ29JTDIwdk1EZGpNWFlTQW1WdUdnSlZVeUlQQ0FRYUN3b0pMMjB2TURKdFpqRnVLaGtLRndvVFIwRkVSMFZVWDFORlExUkpUMDVmVGtGTlJTQUJLQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURkak1YWVNBbVZ1R2dKVlV5Z0FQAVAB",
    limit: "500",
    country: "US",
    lang: "en",
  },
  headers: {
    "x-rapidapi-key": "8ea25d3ccfmsh8e57713d4011d7ap16929cjsna8f0c5ac78a0",
    "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
  },
};

export const fetchNews = async () => {
  try {
    const response = await axios.request(options);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
