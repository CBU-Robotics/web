import "../css/hero.css";

import * as React from "react";

class Hero extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  componentDidMount() {
    const cardContainer = document.getElementsByClassName(
      "hero-card-container"
    )[0];
    const { children } = cardContainer;
    [...children].forEach((child: HTMLDivElement, index) => {
      child.style.animationDelay = `${index * 500 + 250}ms`;
      console.log(child);
    });
  }

  render(): React.JSX.Element {
    return (
      <section className="hero">
        <div className="hero-card-container">
          <div className="delayed-floater">
            <img
              src="./images/cbu-robotics-logo.png"
              width={128}
              height={128}
            />
            <h1>CBU Robotics</h1>
          </div>
          <div className="delayed-floater">
            <h2>Professionalism</h2>
            <p>
              Our Robotics team excels in eloquent communication, effectively
              conveying complex technical concepts during presentations and
              discussions.
            </p>
          </div>
          <div className="delayed-floater">
            <h2>Eloquence</h2>
            <p>
              Our commitment to professionalism is evident in our interactions
              and project execution, establishing a commendable reputation
              within the robotics and engineering communities.
            </p>
          </div>
        </div>
        <div className="delayed-floater button-container">
          <button>Sign Up</button>
          <button>Sponsor Us</button>
        </div>
      </section>
    );
  }
}

export default Hero;
