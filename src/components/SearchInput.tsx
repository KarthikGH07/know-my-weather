import { FormEvent, useState } from "react";
import styles from "./SearchInput.module.css";

type SearchInputProps = {
  onSearch: (city: string) => void;
};

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className={styles.input}
            required
          />
          <svg
            className={styles.searchIcon}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <button
          type="submit"
          className={`${styles.button} ${
            !city.trim() ? styles.buttonDisabled : ""
          }`}
          disabled={!city.trim()}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
