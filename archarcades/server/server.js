import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3001;

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

const RAWG_API_KEY = "76efca81ec0f4ec9acd40cfc62a85bae";

app.get("/api/games", async (req, res) => {
  try {
    const RAWG_URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&genres=arcade&ordering=-rating&page_size=10`;

    const response = await fetch(RAWG_URL);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error from RAWG API (status ${response.status}): ${errorText}`);
      return res.status(response.status).json({
        error: `Failed to fetch game data from RAWG: ${response.statusText}`,
        details: errorText,
        statusCode: response.status
      });
    }

    const data = await response.json();

    const combinedGames = data.results.map(game => ({
      name: game.name,
      img: game.background_image || 'placeholder-image-url.jpg',
      year: game.released ? new Date(game.released).getFullYear().toString() : 'N/A',
      description: `Genres: ${game.genres?.map(g => g.name).join(', ') || 'N/A'}`
    }));

    const sixGames = combinedGames.slice(0, 6);

    res.json({ results: sixGames });
  } catch (err) {
    console.error("API error in Express:", err);
    res.status(500).json({ error: "Failed to fetch game data", details: err.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));