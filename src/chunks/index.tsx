import "../css/index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

class App extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render(): React.JSX.Element {
    return (
      <React.Fragment>
        <img src="./images/shpe-2023.png" />
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
