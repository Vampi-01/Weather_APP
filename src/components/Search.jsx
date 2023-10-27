import { useState, useRef } from "react";
import "./styles/search.scss";

const api = {
  key: import.meta.env.VITE_REACT_APP_API_KEY,
  base: "https://api.weatherapi.com/v1/forecast.json",
};

export default function Search({ updateWeather }) {
  const [query, setQuery] = useState("");

  const [error, setError] = useState(null);

  const inputRef = useRef();

  const handleButtonClick = () => {
    fetchWeatherData();

    clearInput();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  const fetchWeatherData = () => {
    fetch(`${api.base}?key=${api.key}&q=${query}&days=1`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.error) {
          setError(result.error.message);
          console.log(result);
        } else {
          setError(null);
          updateWeather(result);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setError("An error occurred. Please try again.");
      });
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="hero-container">
      <div className="search-box f-ctr">
        <input
          type="text"
          placeholder="Enter City..."
          className="src-inp"
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button className="btn" onClick={handleButtonClick}>
          Search
        </button>
      </div>

      {error && <h3 className="error-msg">{error}</h3>}
    </div>
  );
}
