import React, { useState } from "react";
import FriendList from "./Components/FriendList";
import Button from "./Components/Button";
import "./index.css";
import { useSelector } from "react-redux";

export default function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const friends = useSelector((store) => store.friends);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
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
        <Button>Add</Button>
      </div>
    </div>
  );
}
