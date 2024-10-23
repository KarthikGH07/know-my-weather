import { BASE_IMAGE_URL } from "../constants";
import styles from "./Weather.module.css";
import type { WeatherResponse } from "../types/weather";
import { formatDate } from "../utils/formatDate";

interface WeatherProps {
  data: WeatherResponse;
}

const Weather = ({ data }: WeatherProps) => {
  return (
    <div className={styles.card}>
      <div>
        <h2>
          {data.name}, {data.sys?.country}
        </h2>
        <span>
          {formatDate(data.dt)}, {data.weather?.[0]?.main}
        </span>
      </div>
      <div className={styles.tempWrapper}>
        <div>
          <h3>{Math.floor(data.main.temp)}&deg;</h3>
          <span>Feels like {Math.floor(data.main.feels_like)}&deg;</span>
        </div>
        <div>
          <img
            src={`${BASE_IMAGE_URL}/img/wn/${data.weather?.[0]?.icon}@2x.png`}
            alt={data.weather?.[0]?.main}
          />
        </div>
      </div>
      <div className="">
        <p>
          Humidity: <span>{data.main?.humidity}%</span>
        </p>
        <p>
          Wind: <span>{data.wind?.speed}m/s</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
