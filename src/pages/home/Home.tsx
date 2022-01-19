import React, { FunctionComponent, useState } from "react";
import { User } from "../../core/models/user";
import AppSearch from "../../shared/components/AppSearch";

const Home: FunctionComponent = () => {
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
    <div className="d-inline-flex flex-column">
      <AppSearch
        disabled={disabled}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <pre className="white-font">{JSON.stringify(user)}</pre>
    </div>
  );
};

export default Home;
