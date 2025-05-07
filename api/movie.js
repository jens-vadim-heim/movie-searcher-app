const fetchData = async (query) => {
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&`;

  try {
    const response = await fetch(apiUrl + `t=${query}&plot=full`);

    if (!response.ok) {
      throw new Error("Error fetching movie data");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export default fetchData;
