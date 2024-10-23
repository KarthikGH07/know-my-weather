import { useCallback, useEffect, useState } from "react";
import Weather from "./components/Weather";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { BASE_URL } from "./constants";
import styles from "./App.module.css";
import type { WeatherResponse } from "./types/weather";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();
  const [weatherData, setWeatherData] = useState<WeatherResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getWeather = useCallback(async (city: string) => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL}/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_OPENWEATHER_API_KEY
        }`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (
      theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    getWeather("Bengaluru");
  }, [getWeather]);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <SearchInput onSearch={getWeather} />
        {isLoading && (
          <div className={styles.loading}>
            <span>Loading...</span>
          </div>
        )}

        {error && !isLoading && (
          <div className={styles.error}>
            <span>{error}</span>
          </div>
        )}

        {!isLoading && weatherData && error == null && (
          <Weather data={weatherData} />
        )}
      </main>
    </>
  );
}

export default App;
