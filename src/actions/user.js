import request from "superagent";
//const baseUrl = "http://localhost:4000";
const baseUrl = "https://evening-scrubland-81754.herokuapp.com";

export const JWT = "JWT";
export const NEW_USER = "NEW_USER";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (userName, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ userName, password })
    .then(res => {
      const action = jwt(res.body.jwt);
      dispatch(action);
    });
};

function newUser(payload) {
  return {
    type: NEW_USER,
    payload
  };
}

export const createUser = data => (dispatch, getState) => {
  //   const state = getState();
  //   const { user } = state; // const user = state.user

  request
    .post(`${baseUrl}/signup`)
    .send(data)
    .then(res => {
      const action = newUser(res.body);
      dispatch(action);
    })
    .catch(console.error);
};
