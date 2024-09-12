import "../css/global-header.css";

import * as React from "react";

class GlobalHeader extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	render(): React.JSX.Element {
		return <header className="global-header">
      <a className="logo" href="/">
        <img src="cbu-robotics-logo.png" />
        <span>CBU Robotics</span>
      </a>
			<nav>
				<ul>
          <li><a href="#awards">Awards</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>;
	}
}

export default GlobalHeader;
