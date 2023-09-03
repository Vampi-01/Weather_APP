// Components

// import { useState } from "react";
import { useState } from "react";
import { Navbar, Search, TempCard } from "./components/components";

// CSS

import "./styles/general.scss";

//  function

function App() {
  const [weatherData, setWeatherData] = useState(null);

  function updateWeatherData(data) {
    setWeatherData(data);
  }

  return (
    <>
      <div className="container">
        <Navbar />
        <Search updateWeather={updateWeatherData} />
        <TempCard weatherData={weatherData} />
      </div>
    </>
  );
}

export default App;
