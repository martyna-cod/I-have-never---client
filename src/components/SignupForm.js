import React from "react";

export default function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>user name:</label>
      <input
        type="text"
        name="userName"
        placeholder="userName"
        value={props.values.email}
        onChange={props.onChange}
      />
      <label>password:</label>
      <input
        type="text"
        name="password"
        placeholder="password"
        value={props.values.password}
        onChange={props.onChange}
      />
      <button type="Submit">SIGN UPPPPP</button>
    </form>
  );
}
