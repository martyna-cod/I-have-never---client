import request from "superagent";
const baseUrl = "http://localhost:4000";
// const baseUrl = "https://evening-scrubland-81754.herokuapp.com";

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (userName, password) => dispatch => {    //what's going on on this line??????? 
  request
    .post(`${baseUrl}/login`)
    .send({ userName, password })
    .then(res => {
      const action = jwt(res.body.jwt);
      dispatch(action);
    });
};

export const createUser = data => (dispatch, getState) => {   //what's going on on this line???????
  //   const state = getState();
  //   const { user } = state; // const user = state.user

  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(res => {
      console.log(res.body);        // => you can delete this line it's not very important
    })
    .catch(console.error);
};

