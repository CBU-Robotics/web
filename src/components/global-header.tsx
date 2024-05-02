import "../css/global-header.css";

import * as React from "react";

class GlobalHeader extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	render(): React.JSX.Element {
		return <header className="global-header">
			<nav>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/members">Members</a></li>
					<li><a href="/projects">Projects</a></li>
					<li><a href="mailto:cbu_robotics@calbaptist.edu" target="_blank">Contact Us</a></li>
				</ul>
			</nav>
		</header>;
	}
}

export default GlobalHeader;
