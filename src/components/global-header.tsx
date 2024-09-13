import "../css/global-header.css";

import * as React from "react";

class GlobalHeader extends React.Component {
  private navRef: React.RefObject<HTMLDivElement>;
  private navButtonRef: React.RefObject<HTMLButtonElement>;

	constructor(props: {} | Readonly<{}>) {
		super(props);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleMobileNavLinkClick = this.handleMobileNavLinkClick.bind(this);
    this.navRef = React.createRef<HTMLDivElement>();
    this.navButtonRef = React.createRef<HTMLButtonElement>();
	}

  private handleNavClick(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.target as HTMLButtonElement;
    const nav = this.navRef.current as HTMLDivElement;
    if (!button || !nav) return;
    button.classList.toggle("toggled");
    nav.classList.toggle("toggled");
  }

  private handleMobileNavLinkClick(_event: React.MouseEvent<HTMLAnchorElement>) {
    const nav = this.navRef.current as HTMLDivElement;
    if (nav) nav.classList.remove("toggled");
    const button = this.navButtonRef.current as HTMLButtonElement;
    if (button) button.classList.remove("toggled");
  }

	render(): React.JSX.Element {
		return <React.Fragment>
    <header className="global-header">
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
      <button className="mobile-nav-button" ref={this.navButtonRef} onClick={this.handleNavClick}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 100 100"
            fill="#0000"
            stroke="#000"
            strokeWidth="5"
            strokeLinecap="round">
            <path d="M20 30H80L80 80L20 20" />
            <path d="M20 50H80" />
            <path d="M20 70H80L80 20L20 80" />
          </svg>
        </button>
      </header>
      <nav className="mobile-nav" ref={this.navRef}>
        <ul>
          <li><a onClick={this.handleMobileNavLinkClick} href="#awards">Awards</a></li>
          <li><a onClick={this.handleMobileNavLinkClick} href="#sponsors">Sponsors</a></li>
          <li><a onClick={this.handleMobileNavLinkClick} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </React.Fragment>;
	}
}

export default GlobalHeader;
