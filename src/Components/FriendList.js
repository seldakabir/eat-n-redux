import React from "react";
import "../index.css";
import Friend from "./Friend";

export default function FriendList({ friends, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          key={friend.id}
          //   selectedFriend={selectedFriend}
          //   onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
