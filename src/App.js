import React, { useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import MovieCard from "./components/MovieCard";
import "./App.css";
import { Typography } from "antd";
import axios from "axios";
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const data = await axios.get(`${API_URL}&s=${title}`);
    // const data = await response.json();
    if(data){console.log(data.data.Search)
    setMovies(data.data.Search);
    }
  };

  return (
    <div className="app">
    <div className="typo">
    <Typography
        level={2}
        style={{ color: "goldenrod", fontSize: "6rem", textAlign: "center" }}
      >
        MovieVilla
      </Typography>
    </div>
      
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="search Movie here"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
         <div className="icon">
          <SearchOutlined
            className="icons"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>

      {movies.length > 0 ? (
        <div className="movielist">
        {
          movies.map((movie) => <MovieCard movie={movie} />)
        }
        </div>
      ) : (
        <div className="nodata">
          <h1 style={{ color: "greenyellow" }}>No Movies</h1>
        </div>
      )}
    </div>
  );
}

export default App;
