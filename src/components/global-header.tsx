import "../css/global-header.css";

import * as React from "react";

class GlobalHeader extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render(): React.JSX.Element {
    return (
      <header className="global-header">
        <img
          className="logo-image"
          src="./images/cbu-robotics-logo.png"
          alt="CBU Robotics Logo"
        />
        <ul className="header-links">
          <li>
            <a href="#sign-up">Sign Up</a>
          </li>
          <li>
            <a href="#sponsor-us">Sponsor Us</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default GlobalHeader;
