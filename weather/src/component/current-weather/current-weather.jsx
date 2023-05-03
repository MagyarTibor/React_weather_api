import "./current-weather.css";

const CurreWeather = ({ data }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayName = days[today.getDay()];
  let height = "";

  if (data.main.temp >= 0) {
    height = `${65 + (data.main.temp * 3)}px`;
  } else {
    height = `${data.main.temp * -3.6}px`;
  }

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
          <p>{dayName}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        
        
          <div className="thermometer">
            <div className="logo">
              <div className="fourty">40</div>
              <div className="thirty">30</div>
              <div className="twenty">20</div>
              <div className="ten">10</div>
              <div className="zero">0</div>
              <div className="minus-ten">-10</div>
              <div className="bar" style={{ '--height': height }}></div>
              <div className="circle"></div>
              <div className="graduations"></div>
              {<p className="temperature">{Math.round(data.main.temp)}°C</p>}
            </div>
           
          
        </div>
       
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurreWeather;
