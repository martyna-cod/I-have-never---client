import React from "react";

export default function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Email:</label>
      <input
        type="text"
        name="email"
        placeholder="email"
        value={props.values.email}
        onChange={props.onChange}
      />
      <label>Password:</label>
      <input
        type="text"
        name="password"
        placeholder="password"
        value={props.values.password}
        onChange={props.onChange}
      />
      <button type="Submit">LOGIN</button>
    </form>
  );
}
