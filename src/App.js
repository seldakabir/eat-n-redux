import React, { useState } from "react";
import FriendList from "./Components/FriendList";
import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";

import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { selectedFriend } from "./eatSliceReducer";
import Friend from "./Components/Friend";

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList

        // selectedFriend={selectedFriend}
        // onSelection={handleSelection}
        />

        {/* {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div> */}

        {/* {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )} */}
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "add"}
        </Button>
      </div>
    </div>
  );
}
