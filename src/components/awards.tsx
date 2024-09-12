import "../css/awards.css";

import * as React from "react";

class Awards extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	render(): React.JSX.Element {
		return <div>
			<div id="2022">
			<p>Mt. SAC SPIN UP VEXU Final Qualifier</p>
				<p>Judges Award</p>
			</div>
			<div id="2023">
				<div>
					<p>MtSAC VEXU Over Under Blunder</p>
					<p>Judges Award</p>
				</div>
				<div>
					<p>2024 VEX Robotics World Championship</p>
					<p>Sportsmanship Award</p>
				</div>
			</div>
		</div>
	}
}

export default Awards;