import { createSlice } from "@reduxjs/toolkit";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const eatSlice = createSlice({
  name: "eat",
  initialState: initialFriends,
  reducers: {
    addFriend: {
      prepare(name, image, balance) {
        return {
          payload: { name, image, balance },
        };
      },
    },
    reducer(state, action) {
      const newFriend = {
        id: Date.now(),
        name: action.payload.name,
        image: action.payload.image,
        balance: action.payload.balance,
      };
      state.push(newFriend);
    },
  },
});
export const { addFriend } = eatSlice.actions;
export default eatSlice.reducer;
