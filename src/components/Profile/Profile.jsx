import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileUserBox}>
        <div className={css.profileImageBox}>
          <img src={image} alt="User avatar" className={css.profileImage} />
        </div>
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;