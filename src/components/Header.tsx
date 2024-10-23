import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className={styles.heading}>
      <h1 className={styles.headingTitle}>Know My Weather</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
