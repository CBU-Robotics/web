import "../css/hero.css";

import * as React from "react";

class Hero extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  componentDidMount(): void {
    const canvas = document.getElementById(
      "hero-animation"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.onresize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const vertexSize = 3;
    const velocityScalar = 0.125;
    const vertexAmount = Math.max(
      30,
      ((window.innerWidth * window.innerHeight) / 20000) | 0
    );

    const vertices = Array(vertexAmount)
      .fill({})
      .map((v) => ({
        x:
          Math.random() * (window.innerWidth - vertexSize * 2) - vertexSize * 2,
        y:
          Math.random() * (window.innerHeight - vertexSize * 2) -
          vertexSize * 2,
        xVel: (Math.random() - 0.5) * velocityScalar,
        yVel: (Math.random() - 0.5) * velocityScalar,
      }));

    let last = 0;
    const animationLoop = (then: number) => {
      const diff = then - last;
      last = then;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = "#323338";
      vertices.forEach((v) => {
        v.x += v.xVel * diff;
        v.y += v.yVel * diff;

        if (v.x > window.innerWidth + vertexSize) {
          const excessDistance = v.x - (window.innerWidth + vertexSize);
          v.x = -vertexSize + (excessDistance % window.innerWidth);
        } else if (v.x < -vertexSize) {
          const excessDistance = -vertexSize - v.x;
          v.x =
            window.innerWidth +
            vertexSize -
            (excessDistance % window.innerWidth);
        }

        if (v.y > window.innerHeight + vertexSize) {
          const excessDistance = v.y - (window.innerHeight + vertexSize);
          v.y = -vertexSize + (excessDistance % window.innerHeight);
        } else if (v.y < -vertexSize) {
          const excessDistance = -vertexSize - v.y;
          v.y =
            window.innerHeight +
            vertexSize -
            (excessDistance % window.innerHeight);
        }

        const n = 5;
        let closest = Array(n).fill({
          x: null,
          y: null,
          distance: Number.MAX_SAFE_INTEGER,
        });

        for (const vertex of vertices) {
          if (vertex === v) continue;

          const dx = vertex.x - v.x;
          const dy = vertex.y - v.y;
          const distTo = Math.sqrt(dx * dx + dy * dy);

          if (distTo < closest[n - 1].distance) {
            closest[n - 1] = { ...vertex, distance: distTo };
            closest.sort((a, b) => a.distance - b.distance);
          }
        }

        ctx.beginPath();
        ctx.ellipse(v.x, v.y, vertexSize, vertexSize, 0, 0, Math.PI * 2);
        ctx.fill();

        for (const closestVertex of closest) {
          ctx.strokeStyle = `rgba(50, 51, 56, ${
            closestVertex.distance / 2000
          })`;
          ctx.beginPath();
          ctx.moveTo(v.x, v.y);
          ctx.lineTo(closestVertex.x, closestVertex.y);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animationLoop);
    };

    requestAnimationFrame(animationLoop);
  }

  render(): React.JSX.Element {
    return (
      <section className="hero">
        <canvas id="hero-animation"></canvas>
        <header className="hero-header">
          <img
            className="logo-image"
            src="./images/cbu-robotics-logo.png"
            alt="CBU Robotics Logo"
          />
        </header>
        <div className="hero-component-container">
          <div className="hero-card-container">
            <div className="snippet">
              <h2>Innovate</h2>
              <p>
                Our team thrives on innovation, constantly pushing the
                boundaries of robotics with inventive designs and groundbreaking
                solutions.
              </p>
            </div>
            <div className="snippet">
              <h2>Create</h2>
              <p>
                We are a collective of visionaries and engineers, transforming
                ideas into reality through meticulous craftsmanship and creative
                engineering.
              </p>
            </div>
            <div className="snippet">
              <h2>Collaborate</h2>
              <p>
                Collaboration is at the core of our success, as we bring
                together diverse minds to work seamlessly and achieve remarkable
                advancements in robotics.
              </p>
            </div>
          </div>
          <div className="snippet button-container">
            <button>Sign Up</button>
            <button>Sponsor Us</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
