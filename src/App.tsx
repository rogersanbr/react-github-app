import React, { ChangeEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Input from "./components/Input";
import AppButton from "./components/AppButton";
import { User } from "./core/models/user";

function App() {
  const [disabled, setDisabled] = useState(true);
  const [account, setAccount] = useState("");
  const [user, setUser] = useState({});

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    const value = event?.currentTarget?.value;
    const isAccountValid = !!value;

    setAccount(value);
    setDisabled(!isAccountValid);
  }

  function handleClick(event: React.MouseEvent) {
    fetch(`https://api.github.com/users/${account}`)
      .then((response) => response.json())
      .then((user: User) => setUser(user));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Github Search</h1>
      </header>
      <section className="d-inline-flex flex-column">
        <Input
          label="@"
          name="username"
          placeholder="Github Account"
          type="text"
          onChange={handleChange}
        />
        <AppButton disabled={disabled} onClick={handleClick} text={"Search"} />
        <pre className="white-font">{JSON.stringify(user)}</pre>
      </section>
    </div>
  );
}

export default App;
