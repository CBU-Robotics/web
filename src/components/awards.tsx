import "../css/awards.css";

import * as React from "react";

class Awards extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	render(): React.JSX.Element {
		return <section id="awards" className="awards">
      <h2>2024 Awards</h2>
			<ul className="awards-list">
        <li>
          <p>Mt. SAC SPIN UP VEXU Final Qualifier</p>
          <p>Judges Award</p>
        </li>
			</ul>
      <h2>2023 Awards</h2>
			<ul className="awards-list">
				<li>
					<p>MtSAC VEXU Over Under Blunder</p>
					<p>Judges Award</p>
				</li>
				<li>
					<p>2024 VEX Robotics World Championship</p>
					<p>Sportsmanship Award</p>
				</li>
			</ul>
		</section>;
	}
}

export default Awards;
