export default function CardBody({ profile }) {
  return (
    <>
      <div className="profile-body">
        <p>{profile.description}</p>
      </div>
      <div className="profile-skills">
        <div className="skill-title">
          <h4>Skills:</h4>
        </div>
        <div className="skills">
          {profile.skills.map((skill, index) => (
            <span className="badge" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
