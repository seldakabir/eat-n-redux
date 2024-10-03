import React from "react";
import "../index.css";
import Friend from "./Friend";
import { useDispatch, useSelector } from "react-redux";
import { selectedFriend } from "../eatSliceReducer";

export default function FriendList() {
  const friends = useSelector((store) => store.eat.friends);

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          //   onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
