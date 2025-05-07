const fetchData = async (req, res) => {
  const movieTitle = req.query.title;

  const apiUrl = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&`;

  try {
    const response = await fetch(apiUrl + `t=${movieTitle}&plot=full`);

    if (!response.ok) {
      throw new Error("Error fetching movie data");
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching movie data" });
  }
};

export default fetchData;
