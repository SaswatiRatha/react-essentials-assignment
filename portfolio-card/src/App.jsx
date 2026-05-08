import { useState } from "react";
import lightIcon from "./assets/light-mode.png";
import darkIcon from "./assets/dark-mode.png";
import { profiles } from "./profiles";
import "./App.css";
import Card from "./components/Card";
export default function App() {
  const totalProfiles = profiles.length;
  const [isDark, setIsDark] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(0);
  const [data, setData] = useState(profiles);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  const increaseLike = () => {
    setData((prev) =>
      prev.map((p, i) =>
        i === currentProfile
          ? { ...p, likes: (p.likes || 0) + 1 }
          : p
      )
    );
  };

  const contactFnc = () => {
    alert("Contact me at +91 999 887 7665");
  };

  const prevFnc = () => {
    setCurrentProfile((prev) => (prev === 0 ? totalProfiles - 1 : prev - 1));
    console.log(currentProfile);
  };

  const nextFnc = () => {
    setCurrentProfile((next) => (next === totalProfiles - 1 ? 0 : next + 1));
    console.log(currentProfile);
  };

  return (
    <div className="app-wrapper">
      <button className="toggleBtn" onClick={toggleTheme}>
        <img
          src={isDark ? darkIcon : lightIcon}
          alt="theme icon"
          className="toggleIcon"
        />
        Toggle theme
      </button>
      <div className="portfolio-card">
        <Card
          profile={data[currentProfile]}
          like={data[currentProfile].likes || 0}
          handleLike={increaseLike}
          handleContact={contactFnc}
          toggleTheme={toggleTheme}
          isDark={isDark}
          prevFnc={prevFnc}
          nextFnc={nextFnc}
          currentProfile={currentProfile}
          totalProfiles={totalProfiles}
        />
      </div>
    </div>
  );
}
