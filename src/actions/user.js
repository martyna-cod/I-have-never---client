import request from "superagent";
const baseUrl = "http://localhost:4000";

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(res => {
      const action = jwt(res.body.jwt);
      dispatch(action);
    });
};
