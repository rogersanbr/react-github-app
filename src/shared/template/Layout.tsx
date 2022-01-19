import React, { FunctionComponent } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
  logo: string;
}

const AppLayout: FunctionComponent<AppLayoutProps> = (
  props: AppLayoutProps
) => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={props.logo} className="App-logo" alt="logo" />
          <h1>Github Search</h1>
        </header>
        <section className="d-inline-flex flex-column">
          {props.children}
        </section>
      </div>
    </>
  );
};

export default AppLayout;
