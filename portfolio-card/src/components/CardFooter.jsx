import likeIcon from "../assets/heart.png";
import mailIcon from "../assets/mail.png";
import lightIcon from "../assets/light-mode.png";
import darkIcon from "../assets/dark-mode.png";
export default function CardFooter({
  handleLike,
  handleContact,
  like,
  toggleTheme,
  isDark,
  prevFnc,
  nextFnc,
  currentProfile,
  totalProfiles,
}) {
  return (
    <div className="profile-footer">
      <button className="toggleBtnCard" onClick={toggleTheme}>
        <img
          src={isDark ? lightIcon : darkIcon}
          alt="theme icon"
          className="toggleIconCard"
        />
        {isDark ? "Light" : "Dark"}
      </button>
      <div className="navGroup">
        <button className="navBtns" onClick={prevFnc}>
          ‹
        </button>
        <button className="navBtns" onClick={nextFnc}>
          ›
        </button>
      </div>
      <p className="showTotal">{`${currentProfile + 1} / ${totalProfiles}`}</p>
      <button className="likeIcon" onClick={handleLike}>
        <img src={likeIcon} alt="Like Icon" /> {like}
      </button>
      <button className="contact" onClick={handleContact}>
        <img src={mailIcon} alt="Like Icon" />
        Contact
      </button>
    </div>
  );
}
