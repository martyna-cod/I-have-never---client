import { JWT } from "../actions/user";

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case JWT:
      return action.payload;
    default:
      return state;
  }
}
