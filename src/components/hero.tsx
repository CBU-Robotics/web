import "../css/hero.css";

import * as React from "react";

class Hero extends React.Component {
	private carouselStripRef: React.RefObject<HTMLDivElement>;
	
	constructor(props: {} | Readonly<{}>) {
		super(props);
		this.carouselStripRef = React.createRef();
	}

	componentDidMount() {
		if (this.carouselStripRef.current == null) {
			return;
		}

		const carouselStrip = this.carouselStripRef.current;
		const carouselImages = carouselStrip.getElementsByTagName("img");
		carouselStrip.appendChild(carouselImages[0].cloneNode(true));
		let carouselInterval;
		let carouselWidth = carouselStrip.clientWidth;
		let count = 0;

		carouselStrip.style.transform = `translateX(${-carouselWidth * count}px)`;

		const nextSlide = () => {
			if (count > carouselImages.length - 2) return;
			carouselStrip.classList.add("smooth-slide");
			carouselStrip.style.transform = `translateX(${-carouselWidth * ++count}px`;
		};

		window.addEventListener("resize", () => {
			window.clearInterval(carouselInterval);
			carouselInterval = window.setInterval(nextSlide, 4000);
			carouselWidth = carouselStrip.clientWidth;
			carouselStrip.classList.remove("smooth-slide");
			carouselStrip.style.transform = `translateX(${-carouselWidth * count}px`;
		});

		carouselStrip.addEventListener("transitionend", () => {
			window.clearInterval(carouselInterval);
			carouselInterval = window.setInterval(nextSlide, 4000);
			if (count > carouselImages.length - 2) {
				carouselStrip.classList.remove("smooth-slide");
				count = 0;
				carouselStrip.style.transform = `translateX(${-carouselWidth * count}px)`;
			}
		});

		carouselInterval = window.setInterval(nextSlide, 4000);
	}

	render(): React.JSX.Element {
		return <section className="hero">
			<div className="image-carousel">
				<div className="image-carousel-strip" ref={this.carouselStripRef}>
					<img src="shpe-2023.png" alt="SHPE 2023" />
					<img src="vex-robotics-world-championship-2024.jpg" alt="Vex Robotics World Championship 2024 Team Photo" />
				</div>
			</div>
		</section>;
	}
}

export default Hero;
