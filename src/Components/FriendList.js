import React from "react";
import "../index.css";
import Friend from "./Friend";
import { useSelector } from "react-redux";

export default function FriendList() {
  const friends = useSelector((store) => store.friends);

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          //   selectedFriend={selectedFriend}
          //   onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
