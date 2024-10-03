import React from "react";
import "../index.css";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { selectedFriend } from "../eatSliceReducer";
import FormSplitBill from "./FormSplitBill";
export default function Friend({ friend }) {
  const selectedFriendId = useSelector((state) => state.eat.selectedFriend?.id);

  const dispatch = useDispatch();
  function handleSelectedFrined(id) {
    dispatch(selectedFriend(id));
  }

  const isSelected = selectedFriendId === friend.id;
  console.log(selectedFriendId);
  if (!isSelected && selectedFriendId) {
    return null;
  }

  function handleClose() {
    dispatch(selectedFriend(null));
  }

  return (
    <>
      <div className="nextt">
        <li className={`sel ${isSelected ? "selected" : ""}`}>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>

          {friend.balance < 0 && (
            <p className="red">
              You owe {friend.name} {Math.abs(friend.balance)}€
            </p>
          )}

          {friend.balance > 0 && (
            <p className="green">
              {friend.name} owes you {Math.abs(friend.balance)}€
            </p>
          )}
          {friend.balance === 0 && <p>You and {friend.name} are even</p>}

          <Button
            onClick={() =>
              isSelected ? handleClose() : handleSelectedFrined(friend.id)
            }
          >
            {isSelected ? "close" : "select"}
          </Button>
        </li>

        <div className="split">{isSelected && <FormSplitBill />}</div>
      </div>{" "}
    </>
  );
}
