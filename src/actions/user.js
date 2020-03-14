import request from "superagent";
const baseUrl = '../constants';

export const JWT = "JWT";

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

export const createUser = data => (dispatch, getState) => {  

  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(res => {
      console.log(res.body); 
    })
    .catch(console.error);
};

