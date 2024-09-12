import "../css/Contact.css";

import * as React from "react";

class Contact extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	render(): React.JSX.Element {
		return <div>
				
				<p>Location: TEGR106</p>
				<p>cbu_robotics@calbaptist.edu</p>
				<p>www.cburobotics.com</p>
			</div>
	}
}

export default Contact;