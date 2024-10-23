import { Sun, Moon, MonitorCog } from "lucide-react";
import styles from "./ThemeToggle.module.css";
import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const themeOrder = ["light", "dark", "system"] as const;
    const currentIndex = themeOrder.indexOf(theme);
    const newTheme = themeOrder[(currentIndex + 1) % themeOrder.length];

    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className={styles.toggleButton} role="switch">
      <div className={styles.iconWrapper}>
        <Sun
          className={`${styles.icon} ${
            theme === "light" ? styles.visible : ""
          }`}
          size={25}
        />
        <Moon
          className={`${styles.icon} ${theme === "dark" ? styles.visible : ""}`}
          size={25}
        />
        <MonitorCog
          className={`${styles.icon}  ${
            theme === "system" ? styles.visible : ""
          }`}
          size={25}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
