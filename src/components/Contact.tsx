import "../css/contact.css";

import * as React from "react";

class Contact extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	render(): React.JSX.Element {
		return <section id="contact" className="contact">
        <h2>Contact Us</h2>
				<p>Location: TEGR106</p>
				<a href="mailto:cbu_robotics@calbaptist.edu" target="_blank">cbu_robotics@calbaptist.edu</a>
			</section>
	}
}

export default Contact;
