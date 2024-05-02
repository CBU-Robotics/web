import "../css/hero.css";

import * as React from "react";

class Hero extends React.Component {
	constructor(props: {} | Readonly<{}>) {
		super(props);
	}

	render(): React.JSX.Element {
		return <section className="hero">
			<h1>CBU Robotics</h1>
			<div className="image-carousel">
				<img src="" alt="Image 1" width="200" height="auto"/>
				<img src="" alt="Image 1" width="200" height="auto"/>
				<img src="" alt="Image 1" width="200" height="auto"/>
				<img src="" alt="Image 1" width="200" height="auto"/>
			</div>
		</section>;
	}
}

export default Hero;
