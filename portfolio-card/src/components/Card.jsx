import "./Card.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
export default function Card({ profile, like, handleLike, handleContact, toggleTheme, isDark, prevFnc, nextFnc, currentProfile, totalProfiles}) {
  return (
    <>
      <CardHeader profile={profile} />
      <CardBody profile={profile} />
      <CardFooter
        handleLike={handleLike}
        like={like}
        handleContact={handleContact}
        toggleTheme={toggleTheme}
        isDark={isDark}
        prevFnc={prevFnc}
        nextFnc={nextFnc}
        currentProfile={currentProfile}
        totalProfiles={totalProfiles}
      />
    </>
  );
}
