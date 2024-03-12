import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  const listItems = friends.map((friend) => (
    <li key={friend.id} className={css.friendListItem}>
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    </li>
  ));
  return <ul className={css.friendList}>{listItems}</ul>;
};

export default FriendList;