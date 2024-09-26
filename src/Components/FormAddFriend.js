import React, { Component, useState } from "react";
import "../index.css";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addFriend } from "../eatSliceReducer";

export default function FormAddFriend() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [image, setImage] = useState("https:i.pravatar.cc/48");
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handelAddForm() {
    setShowAddFriend((show) => !show);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    dispatch(addFriend(name, image));

    setName("");
    setImage("https:i.pravatar.cc/48");
    setShowAddFriend(false);
  }

  return (
    <>
      {showAddFriend && (
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <label>👫 Friend name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>🌄 Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <Button type="submit">Add</Button>
        </form>
      )}
      <Button onClick={handelAddForm}>
        {showAddFriend ? "Cancel" : "Add Friend"}
      </Button>
    </>
  );
}
