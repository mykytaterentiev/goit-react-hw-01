import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItemImg}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendListItemName}>{name}</p>
      <p className={clsx(css.friendListItemStat, { [css.online]: isOnline })}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;