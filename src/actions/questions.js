import superagent from "superagent";
const baseUrl = '../constants';

export const createQuestion = data => (dispatch, getState) => {
  superagent
    .post(`${baseUrl}/room`)
    .send(data)
    .then(res => {
      console.log(res.body); 
    })
    .catch(console.error);
};
