export default function CardHeader({ profile }) {
    return(
        <div key={profile.id} className="profile-header">
            <div className="profile-image">
                <img src={profile.image} alt="" />
            </div>
            <div className="profile-info">
                <h2>{profile.name}</h2>
                <h3>{profile.designation}</h3>
            </div>
      </div>
    )
}