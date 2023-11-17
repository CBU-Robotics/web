import "../css/index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Hero from "../components/hero";
import GlobalHeader from "../components/global-header";

class App extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render(): React.JSX.Element {
    return (
      <React.Fragment>
        <GlobalHeader />
        <Hero />
        <div style={{ height: "100vh" }}></div>
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
