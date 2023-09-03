// imports

import images from "../constants/images";

//  Css

import "./styles/tempcard.scss";

// Function

export default function TempCard({ weatherData }) {
  return (
    <>
      {weatherData && weatherData.location && (
        <div className="card-container">
          <div className="card el-spr">
            <h1 className="city-header">{weatherData.location.name}</h1>
            <p className="country">{weatherData.location.country}</p>
            <div className="condition-box">
              <p className="condition-text">
                {weatherData.current.condition.text}
              </p>
              <span>
                <img
                  className="condition-icon"
                  src={weatherData.current.condition.icon}
                  alt={weatherData.current.condition.text}
                />
              </span>
            </div>
            <h3 className="temp">{`${weatherData.current.temp_c} C`}</h3>
            <div className="weather-details">
              <div className="col">
                <div className="col-group">
                  <img
                    className="detail-icon "
                    src={images.max_temp}
                    alt="Max Temprature"
                  />
                  <p className="sm-text">{`${weatherData.forecast.forecastday[0].day.maxtemp_c} C`}</p>
                </div>
                <div className="col-group">
                  <img
                    className="detail-icon "
                    src={images.min_temp}
                    alt="Min Temprature"
                  />
                  <p className="sm-text">{` ${weatherData.forecast.forecastday[0].day.mintemp_c} C`}</p>
                </div>
              </div>
              <div className="col">
                <div className="col-group">
                  <img
                    className="detail-icon "
                    src={images.humidity}
                    alt="humidity"
                  />
                  <p className="sm-text">{`${weatherData.current.humidity}%`}</p>
                </div>
                <div className="col-group">
                  <img
                    className="detail-icon "
                    src={images.uv_index}
                    alt="UV Index"
                  />
                  <p className="sm-text">
                    {weatherData.forecast.forecastday[0].day.uv}
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="col-group">
                  <img
                    className="detail-icon "
                    src={images.sunrise}
                    alt="Sunrise"
                  />
                  <p className="sm-text">
                    {weatherData.forecast.forecastday[0].astro.sunrise}
                  </p>
                </div>
                <div className="col-group">
                  <img
                    className="detail-icon "
                    src={images.sunset}
                    alt="Sunset"
                  />
                  <p className="sm-text">
                    {weatherData.forecast.forecastday[0].astro.sunset}
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="col-group">
                  <img
                    className="detail-icon "
                    src={images.rain}
                    alt="Chances Of rain"
                  />
                  <p className="sm-text">
                    {`${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`}
                  </p>
                </div>
                <div className="col-group">
                  <img
                    className="detail-icon "
                    src={images.rain}
                    alt="Chances Of rain"
                  />
                  <p className="sm-text">
                    {`${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
