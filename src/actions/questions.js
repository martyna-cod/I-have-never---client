import superagent from "superagent";
const baseUrl = "http://localhost:4000";

export const createQuestion = data => (dispatch, getState) => {
  //what's going on on this line???????
  //   const state = getState();
  //   const { user } = state; // const user = state.user

  superagent
    .post(`${baseUrl}/room`)
    .send(data)
    .then(res => {
      console.log(res.body); // => you can delete this line it's not very important
    })
    .catch(console.error);
};
