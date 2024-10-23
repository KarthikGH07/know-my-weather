import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "theme-storage",
    }
  )
);

export default useTheme;
